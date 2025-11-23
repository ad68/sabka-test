import useFetchVideosQuery from './queries/useFetchVideosQuery'

const useVideos = () => {
    const { data, error, isFetching } = useFetchVideosQuery()
    return {
        data,
        isFetching,
        error
    }
}
export default useVideos