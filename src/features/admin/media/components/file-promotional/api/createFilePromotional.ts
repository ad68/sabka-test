import { useAxiosWithToken } from "@/hooks";
export const createFilePromotional = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/media/file/add`, data)
