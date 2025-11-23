import { useAxios } from "@/hooks";

import { GlobalResponse } from "@/types/api/responses";

export const fetchCompanies = async (id: number | undefined) => {
  const response: GlobalResponse<any> = await useAxios.get(`/companyInfo/search-With-pageable?pageSize=100&pageNumber=0&provinceId=${id}`)
  return response.data
}