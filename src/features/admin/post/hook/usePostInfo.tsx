"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";
import { useMemo, useState } from "react";
import moment from "moment-jalaali";
import { ARTICLETYPEENUM } from "@/features/admin/article/types";

const usePostInfo = (articleType: ARTICLETYPEENUM) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)

    const [reload, setReload] = useState(false)
    const [createdOn, setCreatedOn] = useState()
    const [persianTitle, setPersianTitle] = useState("")
    const [englishTitle, setEnglishTitle] = useState("")

    const [statusArticleType, setStatusArticleType] = useState<string | null>(null);
    const [selectedRow, setSelectedRow] = useState()

    const reloadTable = () => {
        setReload(!reload)
    }
    const search = () => {
        reloadTable()
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
        statusArticleType
    }), [persianTitle, englishTitle, statusArticleType, createdOn]);
    const tableContent: TableContentProps = {
        cols: cols,
        queries: queries
    }
    const tableConfig: TableConfigProps = {
        apiUrl: {
            fetch: "/article/search-with-pageable",
            delete: "article/delete/",
        },
        reload: reload,
        actions: [
            { type: "delete" },
            { type: "edit", onClick: (value: any) => { setSelectedRow(value); setIsUpdateModalOpen(true) } },
        ],
        headerActions: [{ type: "add", onClick: () => { setIsAddModalOpen(true); setSelectedRow(undefined) } }],

    }

    return {
        tableContent,
        tableConfig,
        isAddModalOpen,
        setIsAddModalOpen,
        isUpdateModalOpen,
        setIsUpdateModalOpen,
        reloadTable,
        selectedRow,
        persianTitle,
        englishTitle,
        statusArticleType,
        setStatusArticleType,
        setPersianTitle,
        setEnglishTitle,
        createdOn,
        setCreatedOn,
        search,



    }
}
export default usePostInfo