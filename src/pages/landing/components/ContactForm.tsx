import { zodResolver } from '@hookform/resolvers/zod'
import Alert from '@mui/material/Alert'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { UiButton, UiText } from '@/design-system'
import {
  contactFormSchema,
  contactServiceOptions,
  type ContactFormValues,
} from '../data/contactForm'
import { landingContent } from '../data/content'
import { contactSectionStyles } from '../sections/ContactSection.styles'

type SubmitStatus = 'idle' | 'success' | 'error'

function buildMailto(values: ContactFormValues) {
  const serviceLabel =
    contactServiceOptions.find((option) => option.value === values.service)?.label ??
    values.service

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

  const email = landingContent.contactEmail.replace(/^mailto:/, '')

  return `mailto:${email}?subject=${subject}&body=${body}`
}

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
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
      window.location.href = buildMailto(values)
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
      component="form"
      spacing={2.5}
      sx={contactSectionStyles.formCard}
      onSubmit={(event) => {
        void onSubmit(event)
      }}
      noValidate
    >
      <UiText sx={contactSectionStyles.formTitle}>
        {landingContent.contactFormTitle}
      </UiText>

      <Stack sx={contactSectionStyles.fieldRow}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
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
              label="Email"
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
              label="Phone"
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
              <InputLabel id="contact-service-label">Service</InputLabel>
              <Select
                {...field}
                labelId="contact-service-label"
                label="Service"
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
            label="Project details"
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
          {landingContent.contactFormSuccess}
        </Alert>
      ) : null}

      {status === 'error' ? (
        <Alert severity="error" sx={contactSectionStyles.statusError}>
          {landingContent.contactFormError}
        </Alert>
      ) : null}

      <Stack sx={contactSectionStyles.actions}>
        <UiButton type="submit" size="large" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : landingContent.contactFormSubmit}
        </UiButton>
      </Stack>
    </Stack>
  )
}
