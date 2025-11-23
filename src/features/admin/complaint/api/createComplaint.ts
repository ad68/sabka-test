import { useAxiosWithToken } from "@/hooks";
export const createComplaint = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/complaint/add`, data)
