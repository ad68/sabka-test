import {useAxiosWithToken} from "@/hooks";

export const publishFilmGallery = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/media/file/approve-publish`, data)
