import { useAxiosWithToken } from "@/hooks";
export const createPicturePromotional = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/media/file/add`, data)
