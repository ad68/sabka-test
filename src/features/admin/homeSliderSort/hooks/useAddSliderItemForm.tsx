
import { useEffect, useState } from "react"
import useFetchSliderPageableQuery from "./queries/useFetchSliderPageableQuery"


const useAddSliderItemForm = ({ sortedIdsList, setSortedIdsList, onClose }: any) => {
    const { data, isFetching } = useFetchSliderPageableQuery()
    const [currentSortedList, setCurrentSortedList] = useState<any>()
    const checkboxHandelChange = (value: any, item: any) => {
        let arr = [...currentSortedList]
        if (value) {
            arr.push(item)
        }
        else {
            arr = arr.filter(el => el.id !== item.id)
        }
        setCurrentSortedList(arr)

    }
    useEffect(() => {
        setCurrentSortedList(sortedIdsList)
    }, [sortedIdsList])
    useEffect(() => {
        console.log('currentSortedList', currentSortedList)
    }, [currentSortedList])
    const changeSortedIdsList = () => {
        setSortedIdsList(currentSortedList)
        onClose()
    }
    return {
        data,
        isFetching,
        checkboxHandelChange, currentSortedList,
        changeSortedIdsList
    }
}
export default useAddSliderItemForm