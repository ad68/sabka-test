"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";
import { useEffect, useMemo, useState } from "react";
import moment from "moment-jalaali";
import { DocumentTypeEnum, MediaTypeEnum } from "@/features/admin/media/types";
const usePictureGalleryInfo = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [reload, setReload] = useState(false)
    const [createdOn, setCreatedOn] = useState()
    const [persianTitle, setPersianTitle] = useState("")
    const [englishTitle, setEnglishTitle] = useState("")
    // const [statusPictureGalleryType, setStatusPictureGalleryType] = useState<string | null>(null);
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
        { title: "موضوع انگلیسی", field: "englishTitle" },
        { title: "تاریخ", field: "createdOn", type: "date" },
        // { title: "وضعیت", field: "statusPictureGalleryType", type: "condition", conditions: [{ value: "INITIALIZE", replacedValue: "ثبت اولیه" }, { value: "PUBLISH", replacedValue: "منتشر شده" }] },
    ];
    const queries = useMemo(() => ({
        persianTitle,
        englishTitle,
        creatOnDate: createdOn ? moment(createdOn).format("YYYY-MM-DD") : undefined,
        documentType: DocumentTypeEnum.PICTURE,
        mediaType: MediaTypeEnum.VIDEO_GALLERY,
        // statusPictureGalleryType
    }), [persianTitle, createdOn]);
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
        // statusPictureGalleryType,
        // setStatusPictureGalleryType,
        setPersianTitle,
        setEnglishTitle,
        createdOn,
        setCreatedOn,
        search
    }
}
export default usePictureGalleryInfo