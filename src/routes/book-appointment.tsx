import { BookAppointmentPage } from '@/features/book-appointment/BookAppointmentPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/book-appointment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BookAppointmentPage />
}
