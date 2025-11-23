"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";
import { useMemo, useState } from "react";
import { MediaTypeEnum } from "@/features/admin/media/types";
const useFinancialInfo = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [reload, setReload] = useState(false)

    // const [statusFinancialInfoType, setStatusFinancialInfoType] = useState<string | null>(null);
    const [selectedRow, setSelectedRow] = useState()
    const reloadTable = () => {
        setReload(!reload)
    }
    const search = () => {
        reloadTable()
    }
    const cols: Array<col> = [
        { title: "عنوان فارسی", field: "persianTitle", width: "200px" },
        { title: "موضوع انگلیسی", field: "englishTitle" },
        { title: "تاریخ", field: "createdOn", type: "date" },
        // { title: "وضعیت", field: "statusFinancialInfoType", type: "condition", conditions: [{ value: "INITIALIZE", replacedValue: "ثبت اولیه" }, { value: "PUBLISH", replacedValue: "منتشر شده" }] },
    ];
    const queries = useMemo(() => ({
        mediaType: MediaTypeEnum.FINANCIAL_INFORMATION,
        documentType: "FILE"
    }), []);
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
        search
    }
}
export default useFinancialInfo