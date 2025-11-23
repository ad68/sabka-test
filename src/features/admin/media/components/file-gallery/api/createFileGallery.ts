import { useAxiosWithToken } from "@/hooks";
export const createFileGallery = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/media/file/add`, data)
