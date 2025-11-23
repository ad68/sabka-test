import useFetchNewsQuery from './queries/useFetchNewsQuery'
const useNews = () => {
    const { data, error, isFetching } = useFetchNewsQuery()
    return {
        data,
        error,
        isFetching
    }
}
export default useNews