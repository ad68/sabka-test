import {useAxiosWithToken} from "@/hooks";

export const publishFilmPromotional = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/article/approve-publish`, data)
