import useFetchPublicationQuery from './queries/useFetchPublicationQuery'
const usePublication = () => {
    const { data, error, isFetching } = useFetchPublicationQuery()
    return {
        data,
        error,
        isFetching
    }
}
export default usePublication