import { zodResolver } from '@hookform/resolvers/zod'
import Alert from '@mui/material/Alert'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { UiButton, UiText } from '@/design-system'
import {
  createContactFormSchema,
  type ContactFormValues,
} from '../data/contactForm'
import { useLandingCopy, useLocale } from '../i18n/LocaleProvider'
import { contactSectionStyles } from '../sections/ContactSection.styles'

type SubmitStatus = 'idle' | 'success' | 'error'

function buildMailto(
  values: ContactFormValues,
  serviceOptions: ReturnType<typeof useLandingCopy>['contactServiceOptions'],
  contactEmail: string,
) {
  const serviceLabel =
    serviceOptions.find((option) => option.value === values.service)?.label ?? values.service

  const subject = encodeURIComponent(`Zimam inquiry — ${serviceLabel}`)
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Service: ${serviceLabel}`,
      '',
      values.message,
    ].join('\n'),
  )

  const email = contactEmail.replace(/^mailto:/, '')

  return `mailto:${email}?subject=${subject}&body=${body}`
}

export function ContactForm() {
  const { content, contactServiceOptions, contactFormMessages } = useLandingCopy()
  const { locale } = useLocale()
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const schema = useMemo(
    () => createContactFormSchema(contactFormMessages),
    [contactFormMessages],
  )

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'saas',
      message: '',
    },
  })

  const onSubmit = handleSubmit((values) => {
    try {
      setStatus('idle')
      window.location.href = buildMailto(values, contactServiceOptions, content.contactEmail)
      setStatus('success')
      reset({
        name: '',
        email: '',
        phone: '',
        service: values.service,
        message: '',
      })
    } catch {
      setStatus('error')
    }
  })

  return (
    <Stack
      key={locale}
      component="form"
      spacing={2.5}
      sx={contactSectionStyles.formCard}
      onSubmit={(event) => {
        void onSubmit(event)
      }}
      noValidate
    >
      <UiText sx={contactSectionStyles.formTitle}>{content.contactFormTitle}</UiText>

      <Stack sx={contactSectionStyles.fieldRow}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={content.contactFieldName}
              fullWidth
              autoComplete="name"
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              sx={contactSectionStyles.field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={content.contactFieldEmail}
              type="email"
              fullWidth
              autoComplete="email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              sx={contactSectionStyles.field}
            />
          )}
        />
      </Stack>

      <Stack sx={contactSectionStyles.fieldRow}>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={content.contactFieldPhone}
              type="tel"
              fullWidth
              autoComplete="tel"
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
              sx={contactSectionStyles.field}
            />
          )}
        />

        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={Boolean(errors.service)} sx={contactSectionStyles.field}>
              <InputLabel id="contact-service-label">{content.contactFieldService}</InputLabel>
              <Select
                {...field}
                labelId="contact-service-label"
                label={content.contactFieldService}
                MenuProps={{
                  slotProps: {
                    paper: { sx: contactSectionStyles.menuPaper },
                  },
                }}
              >
                {contactServiceOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {errors.service ? (
                <FormHelperText>{errors.service.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      </Stack>

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={content.contactFieldMessage}
            fullWidth
            multiline
            minRows={4}
            error={Boolean(errors.message)}
            helperText={errors.message?.message}
            sx={contactSectionStyles.field}
          />
        )}
      />

      {status === 'success' ? (
        <Alert severity="success" sx={contactSectionStyles.statusSuccess}>
          {content.contactFormSuccess}
        </Alert>
      ) : null}

      {status === 'error' ? (
        <Alert severity="error" sx={contactSectionStyles.statusError}>
          {content.contactFormError}
        </Alert>
      ) : null}

      <Stack sx={contactSectionStyles.actions}>
        <UiButton type="submit" size="large" disabled={isSubmitting}>
          {isSubmitting ? content.contactFormSending : content.contactFormSubmit}
        </UiButton>
      </Stack>
    </Stack>
  )
}
