"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";
import { useState } from "react";

const useFinalJudgementInfo = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [reload, setReload] = useState(false)


    // const [statusFinalJudgementType, setStatusFinalJudgementType] = useState<string | null>(null);
    const [selectedRow, setSelectedRow] = useState()

    const reloadTable = () => {
        setReload(!reload)
    }
    const search = () => {
        reloadTable()
    }

    const cols: Array<col> = [
        { title: "استان", field: "province", width: "200px" },
        { title: "موضوع", field: "title", },
        { title: "تاریخ", field: "date", type: "date" },
        { title: "توضیحات", type: 'description', field: "description", },
        { title: "شعبه رسیدگی", field: "jurisdictionBranch", },
        { title: "له/علیه", field: "forAgainst", },
        // { title: "وضعیت", field: "statusFinalJudgementType", type: "condition", conditions: [{ value: "INITIALIZE", replacedValue: "ثبت اولیه" }, { value: "PUBLISH", replacedValue: "منتشر شده" }] },
    ];

    const tableContent: TableContentProps = {
        cols: cols,

    }
    const tableConfig: TableConfigProps = {
        apiUrl: {
            fetch: "/judgment/search-with-pageable",
            delete: "judgment/delete/",
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
export default useFinalJudgementInfo