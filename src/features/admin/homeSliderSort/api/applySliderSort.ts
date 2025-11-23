import { useAxiosWithToken } from "@/hooks";
export const applySliderSort = (data: any): Promise<any> =>
    useAxiosWithToken.put(`/sort-slider/edit/1`, data)