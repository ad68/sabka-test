import { useAxiosWithToken } from "@/hooks";
export const deleteSliderItem = (id: any): Promise<any> =>
    useAxiosWithToken.delete(`/slider/delete/${id}`)