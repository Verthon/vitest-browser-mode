import { useQuery } from '@tanstack/react-query'
import { createDoctorsService } from '../services/doctors'

const service = createDoctorsService()

export const useDoctorsBySpecialty = (
  specialtyId: string,
  queryFn = service.getDoctorsBySpecialty,
) => {
  const { data, isError, isPending, isSuccess, refetch } = useQuery({
    queryKey: ['doctors', specialtyId],
    queryFn: queryFn(specialtyId),
    enabled: Boolean(specialtyId),
  })

  return {
    isPending,
    isError,
    isSuccess,
    data,
    refetch
  }
}