import { useAxiosWithToken } from "@/hooks";
export const createPictureGallery = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/media/file/add`, data)
