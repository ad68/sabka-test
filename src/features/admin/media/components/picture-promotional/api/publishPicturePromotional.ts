import {useAxiosWithToken} from "@/hooks";

export const publishPicturePromotional = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/article/approve-publish`, data)
