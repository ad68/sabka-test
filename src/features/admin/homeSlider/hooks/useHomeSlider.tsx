
import { useState } from 'react'
import useDeleteSliderItemMutation from './mutations/useDeleteSliderItemMutation'
import { TableConfigProps, TableContentProps } from '@/components/kit/Table/customTable.types'
import { useRouter } from 'next/navigation'
const useHomeSliderSort = () => {
    const router = useRouter()
    const { mutate: deleteSliderItem, isPending: deleteSliderItemPending } = useDeleteSliderItemMutation()
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
    const [reload, setReload] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const cols: Array<any> = [
        { title: "عنوان فارسی", field: "persianTitle" },
        { title: "موضوع انگلیسی", field: "englishTitle" },
    ];
    const reloadTable = () => {
        setReload(!reload)
    }
    const tableContent: TableContentProps = {
        cols: cols,
    }
    const tableConfig: TableConfigProps = {
        apiUrl: {
            fetch: "/slider/search-with-pageable",
            delete: "slider/delete/",
        },
        reload: reload,
        actions: [
            { type: "delete" },
        ],
        headerActions: [{ type: "other", title: "مدیریت نمایش", onClick: () => { router.push("/admin/home-slider-sort") } }, { type: "add", onClick: () => { setIsAddModalOpen(true) } }]
    }
    return {
        tableConfig,
        tableContent,
        deleteSliderItem,
        deleteSliderItemPending,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        isAddModalOpen,
        setIsAddModalOpen,
        reloadTable
    }
}
export default useHomeSliderSort