"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";
import { useEffect, useMemo, useState } from "react";
import moment from "moment-jalaali";
import { DocumentTypeEnum, MediaTypeEnum } from "@/features/admin/media/types";
const useFilePromotionalInfo = () => {
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
    useEffect(() => {
        console.log('createdOn', createdOn)
    }, [createdOn])
    const cols: Array<col> = [
        { title: "عنوان فارسی", field: "persianTitle", width: "200px" },
        { title: "عنوان انگلیسی", field: "englishTitle" },
        { title: "نام نشریه فارسی", field: "persianPublicationName" },
        { title: "نام نشریه انگلیسی", field: "englishPublicationName" },
        { title: "شماره فصلنامه", field: "quarterlyIssue" },
        { title: "سال انتشار", field: "yearPublish" },
        { title: "تاریخ", field: "datePublish", type: "date", },
    ];
    const queries = useMemo(() => ({
        persianTitle,
        documentType: DocumentTypeEnum.FILE,
        mediaType: MediaTypeEnum.PROMOTIONAL_MEDIA,
        creatOnDate: createdOn ? moment(createdOn).format("YYYY-MM-DD") : undefined,
        statusArticleType
    }), [persianTitle, englishTitle, statusArticleType, createdOn]);
    const tableContent: TableContentProps = {
        cols: cols,
        queries: queries
    }
    const tableConfig: TableConfigProps = {
        apiUrl: {
            fetch: "/media/file/search-with-pageable",
            delete: "media/file/delete/",
        },
        reload: reload,
        actions: [
            { type: "delete" },
            { type: "edit", onClick: (value: any) => { setSelectedRow(value); setIsUpdateModalOpen(true) } },
        ],
        headerActions: [{ type: "add", onClick: () => { setIsAddModalOpen(true); setSelectedRow(undefined) } }]
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
        search
    }
}
export default useFilePromotionalInfo