import {useAxiosWithToken} from "@/hooks";

export const publishPictureGallery = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/media/file/approve-publish`, data)
