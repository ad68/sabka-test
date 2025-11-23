
import { useEffect, useState } from 'react'
import useFetchSliderQuery from './queries/useFetchSliderQuery'
import useApplySliderSortMutation from './mutations/useApplySliderSortMutation'
import { toastSuccess } from '@/components/kit/toast'



const useHomeSliderSort = () => {
    const { data, isFetching, refetch } = useFetchSliderQuery()
    const { mutate: applySort, isPending: applyPending, isSuccess: applySuccess } = useApplySliderSortMutation()
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [sortedIdsList, setSortedIdsList] = useState<any[]>([])
    const [sortedIds, setSortedIds] = useState<Array<number>>([])
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
    const [draggingId, setDraggingId] = useState<number | null>(null)

    useEffect(() => {
        if (data) {
            setSortedIdsList(data)
        }
    }, [data])

    /* useEffect(() => {
        console.log('draggingId', draggingId)
    }, [draggingId])
    useEffect(() => {
        console.log('sortedIdsList', sortedIdsList)
    }, [sortedIdsList])
    useEffect(() => {
        console.log('sortedIds', sortedIds)
    }, [sortedIds]) */
    useEffect(() => {
        console.log('sortedIdsList', sortedIdsList)
    }, [sortedIdsList])
    useEffect(() => {
        console.log('sortedIds', sortedIds)
    }, [sortedIds])
    useEffect(() => {
        setSortedIds(sortedIdsList.map((item) => { return parseInt(item.id) }))
    }, [sortedIdsList])
    const saveSortOrder = () => {
        applySort({ sliderIds: sortedIds })
    }
    useEffect(() => {
        if (applySuccess) {
            toastSuccess("عملیات با موفقیت انجام شد")
            refetch()
        }
    }, [applySuccess])
    const deleteSliderItem = (id: any) => {
        let arr = [...sortedIdsList]
        arr = arr.filter((el: any) => el.id !== id)
        setSortedIdsList(arr)
    }

    return {
        data,
        isFetching,
        draggingId,
        setDraggingId,
        sortedIdsList,
        setSortedIdsList,
        sortedIds,
        saveSortOrder,
        applyPending,
        deleteSliderItem,
        isDeleteModalOpen,
        setIsDeleteModalOpen,

        isAddModalOpen,
        setIsAddModalOpen
    }
}
export default useHomeSliderSort