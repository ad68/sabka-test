
import { useQuery } from '@tanstack/react-query'
import {fetchContract} from "@/features/admin/law-transparency/contracts/api/fetchContract";

const useFetchContractQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['contract', id],
        queryFn: () => fetchContract(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchContractQuery