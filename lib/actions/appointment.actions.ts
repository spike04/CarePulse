'use server'

import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
} from '@/lib/appwrite.config'
import { parseStringify } from '@/lib/utils'
import { ID } from 'node-appwrite'

export const createAppointment = async (
  appointment: CreateAppointmentParams,
) => {
  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment,
    )

    return parseStringify(newAppointment)
  } catch (error) {
    console.log(error)
  }
}

export const getAppointment = async (appointmentId: string) => {
  try {
    const appointment = await databases.getDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId,
    )

    return parseStringify(appointment)
  } catch (error) {
    console.error(error)
  }
}
