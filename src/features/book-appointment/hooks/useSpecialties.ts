import { useQuery } from "@tanstack/react-query"
import { createSpecialtyService } from "../services/specialty"

const service = createSpecialtyService()

export const useSpecialties = (queryFn: typeof service.getSpecialties = service.getSpecialties) => {
  const { data, isError, isPending, refetch } = useQuery({ queryKey: ['getSpecialties'], queryFn: queryFn() })
  
  return {
    isPending,
    isError,
    data,
    refetch
  }
}