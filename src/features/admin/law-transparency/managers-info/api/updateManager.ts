import { useAxiosWithToken } from "@/hooks";
/* import {Contract} from "@/features/admin/law-transparency/contracts/types"; */
export const updateManager = ({ data, id }: { data: any, id: number }): Promise<any> =>
    useAxiosWithToken.put(`/managerInfo/edit/${id}`, data)
