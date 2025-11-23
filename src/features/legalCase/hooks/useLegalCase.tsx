'use client'
import useFetchContractQuery from "./queries/useFetchLegalCase"
const useContracts = () => {
    const { data, isFetching } = useFetchContractQuery()
    return {
        data, isFetching
    }
}
export default useContracts