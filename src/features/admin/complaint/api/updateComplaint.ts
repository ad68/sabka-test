import { useAxiosWithToken } from "@/hooks";
export const updateComplaint = ({ data, id }: { data: FormData, id: number }): Promise<any> =>
    useAxiosWithToken.put(`/complaint/edit/${id}`, data)
