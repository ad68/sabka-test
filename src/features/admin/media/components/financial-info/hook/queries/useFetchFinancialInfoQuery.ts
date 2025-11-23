
import { useQuery } from '@tanstack/react-query'
import {fetchFinancialInfo} from "@/features/admin/media/components/financial-info/api/fetchFinancialInfo";

const useFetchFinancialInfoQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['financial-info', id],
        queryFn: () => fetchFinancialInfo(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchFinancialInfoQuery