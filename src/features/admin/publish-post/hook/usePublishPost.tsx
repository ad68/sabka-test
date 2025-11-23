"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";
import { useEffect, useMemo, useState } from "react";
import moment from "moment-jalaali";
import { ARTICLETYPEENUM } from "@/features/admin/article/types";
import usePublishPost from "./mutations/usePublishPost";
const usePostInfo = (articleType: ARTICLETYPEENUM) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isBulkPublishModalOpen, setIsBulkPublishModalOpen] = useState(false)
    const [reload, setReload] = useState(false)
    const [createdOn, setCreatedOn] = useState()
    const [persianTitle, setPersianTitle] = useState("")
    const [englishTitle, setEnglishTitle] = useState("")
    const [selectedIds, setSelectedIds] = useState([])
    const [statusArticleType, setStatusArticleType] = useState<string | null>(null);

    const { mutate: mutatePublishPost, isPending: publishIsPending, isSuccess: publishIsSuccess } = usePublishPost()
    const reloadTable = () => {
        setReload(!reload)
    }
    const search = () => {
        reloadTable()
    }
    const publishPost = () => {
        mutatePublishPost(selectedIds)
    }
    const cols: Array<col> = [
        { title: "عنوان فارسی", field: "persianTitle1", width: "200px" },
        { title: "موضوع فارسی", field: "persianTitle2", type: "description", width: "350px" },
        { title: "عنوان انگلیسی", field: "englishTitle1" },
        { title: "موضوع انگلیسی", field: "englishTitle2" },
        { title: "تاریخ", field: "createdOn", type: "date" },
        { title: "وضعیت", field: "statusArticleType", type: "condition", conditions: [{ value: "INITIALIZE", replacedValue: "ثبت اولیه" }, { value: "PUBLISH", replacedValue: "منتشر شده" }] },
    ];
    const queries = useMemo(() => ({
        persianTitle,
        articleTypeEnum: articleType,
        creatOnDate: createdOn ? moment(createdOn).format("YYYY-MM-DD") : undefined,
        statusArticleType: "INITIALIZE"
    }), [persianTitle, englishTitle, statusArticleType, createdOn]);
    const tableContent: TableContentProps = {
        cols: cols,
        queries: queries
    }
    const tableConfig: TableConfigProps = {
        apiUrl: {
            fetch: "/article/search-with-pageable",

        },
        reload: reload,


        bulkActions: [{ type: "publish", onClick: (value: any) => { setIsBulkPublishModalOpen(true); setSelectedIds(value) } }]
    }
    useEffect(() => {
        if (publishIsSuccess) {
            setIsBulkPublishModalOpen(false)
            reloadTable()
        }
    }, [publishIsSuccess])
    return {
        tableContent,
        tableConfig,
        isAddModalOpen,
        setIsAddModalOpen,
        isUpdateModalOpen,
        setIsUpdateModalOpen,
        reloadTable,

        persianTitle,
        englishTitle,
        statusArticleType,
        setStatusArticleType,
        setPersianTitle,
        setEnglishTitle,
        createdOn,
        setCreatedOn,
        search,
        isBulkPublishModalOpen,
        setIsBulkPublishModalOpen,
        publishPost,
        publishIsPending
    }
}
export default usePostInfo