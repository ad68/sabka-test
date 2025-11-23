'use client'

import useFetchContractQuery from "./queries/useFetchContractQuery"
const useContracts = () => {
    const { data, isFetching } = useFetchContractQuery()

    return {
        data, isFetching
    }
}
export default useContracts