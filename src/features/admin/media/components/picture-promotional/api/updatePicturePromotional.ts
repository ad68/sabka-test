import { useAxiosWithToken } from "@/hooks";
export const updatePicturePromotional = ({ data, id }: { data: FormData, id: number }): Promise<any> =>
    useAxiosWithToken.put(`/media/file/edit/${id}`, data)
