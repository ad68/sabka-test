"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";

import { useEffect, useState } from "react";
const useManagerInfo = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [reload, setReload] = useState(false)
    const [createdOn, setCreatedOn] = useState()

    // const [statusManagerType, setStatusManagerType] = useState<string | null>(null);
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
        { title: "نام", field: "firstName", width: "200px" },
        { title: "نام خانوادگی", field: "lastName", },
        { title: "مدرک تحصیلی", field: "educational", },
        { title: "سابقه کار", field: "jobExperience", },
        { title: "نحوه به کارگیری", field: 'methodOfEmployment', },
        { title: "فرآیند اداری", field: "administrativeProcess", },
        { title: "میزان دریافتی(ریال)", field: "salary", type: 'price' },
        // { title: "وضعیت", field: "statusManagerType", type: "condition", conditions: [{ value: "INITIALIZE", replacedValue: "ثبت اولیه" }, { value: "PUBLISH", replacedValue: "منتشر شده" }] },
    ];

    const tableContent: TableContentProps = {
        cols: cols,

    }
    const tableConfig: TableConfigProps = {
        apiUrl: {
            fetch: "/managerInfo/search-with-pageable",
            delete: "managerInfo/delete/",
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

        createdOn,
        setCreatedOn,
        search
    }
}
export default useManagerInfo