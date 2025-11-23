'use client'
import useFetchEmployeesQuery from "./queries/useFetchEmployeesQuery"

const useEmployees = () => {
    const { data, isFetching } = useFetchEmployeesQuery()
    return {
        data, isFetching
    }
}
export default useEmployees