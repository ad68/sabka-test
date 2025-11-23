
import { useQuery } from '@tanstack/react-query'
import { fetchContract } from "@/features/contracts/api/fetchContract";

const useFetchContractQuery = () => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['web-contract'],
        queryFn: fetchContract,
        staleTime: 0,
        gcTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchContractQuery