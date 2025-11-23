import useFetchProductsQuery from "./queries/useFetchProductsQuery"
const useProducts = () => {
    const { data, isFetching } = useFetchProductsQuery()
    return {
        data, isFetching
    }
}
export default useProducts