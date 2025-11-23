import { useAxiosWithToken } from "@/hooks";
export const createFilmPromotional = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/media/file/add`, data)
