import { useAxiosWithToken } from "@/hooks";
export const createFilmGallery = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/media/file/add`, data)
