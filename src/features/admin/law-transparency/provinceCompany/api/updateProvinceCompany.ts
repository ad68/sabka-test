import { useAxiosWithToken } from "@/hooks";
export const updateProvinceCompany = ({ data, id }: { data: any, id: number }): Promise<any> =>
    useAxiosWithToken.put(`/companyInfo/edit/${id}`, data)
