'use client'

import AppointmentForm from '@/components/forms/AppointmentForm'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Appointment } from '@/types/appwrite.types'
import { useState } from 'react'
import { Button } from './ui/button'

export default function AppointmentModal({
  type,
  patientId,
  userId,
  appointment,
}: {
  type: 'schedule' | 'cancel'
  patientId: string
  userId: string
  appointment: Appointment
}) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={`capitalize ${type === 'schedule' && 'text-green-500'}`}
        >
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
          <DialogDescription>
            Please fill the following details to {type} your appointment.
          </DialogDescription>

          <AppointmentForm
            patientId={patientId}
            userId={userId}
            type={type}
            appointment={appointment}
            setOpen={setOpen}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
