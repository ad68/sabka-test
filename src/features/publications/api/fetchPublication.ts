import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'

export const fetchPublication = async (pageNumber: number) => {
  const response: GlobalResponse<any> = await useAxios.get(`article/search-with-pageable?pageNumber=${pageNumber}&pageSize=9&articleTypeEnum=PUBLICATION`)
  return response.data
}