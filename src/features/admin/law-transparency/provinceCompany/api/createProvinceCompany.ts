import { useAxiosWithToken } from "@/hooks";
export const createProvinceCompany = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/companyInfo/add`, data)
