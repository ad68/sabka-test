import useFetchGalleryQuery from './queries/useFetchGalleryQuery'

const useGallery = () => {
    const { data, error, isFetching } = useFetchGalleryQuery()
    return {
        data,
        isFetching,
        error
    }
}
export default useGallery