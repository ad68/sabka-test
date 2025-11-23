import { useAxiosWithToken } from "@/hooks";
export const createSliderItem = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/slider/add`, data)
