import {useAxiosWithToken} from "@/hooks";

export const publishFileGallery = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/media/file/approve-publish`, data)
