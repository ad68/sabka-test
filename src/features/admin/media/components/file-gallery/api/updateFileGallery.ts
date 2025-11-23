import { useAxiosWithToken } from "@/hooks";
export const updateFileGallery = ({ data, id }: { data: FormData, id: number }): Promise<any> =>
    useAxiosWithToken.put(`/media/file/edit/${id}`, data)
