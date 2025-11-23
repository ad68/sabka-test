"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";
import { useMemo, useState } from "react";
import useFetchProvincesQuery from "./queries/useFetchProvincesQuery";
const useProvinceCompany = () => {
    const { data: provinces, isFetching: provincesLoading } = useFetchProvincesQuery()
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [reload, setReload] = useState(false)
    const [provinceId, setProvinceId] = useState<any>()
    // const [statusManagerType, setStatusManagerType] = useState<string | null>(null);
    const [selectedRow, setSelectedRow] = useState()

    const reloadTable = () => {
        setReload(!reload)
    }
    const search = () => {
        reloadTable()
    }

    const cols: Array<col> = [
        { title: "عنوان", field: "companyName", width: "200px" },
        { title: "استان", field: "provinceName", width: "200px" },
        { title: "تاریخ", field: "createdOn", type: "date" },

        // { title: "وضعیت", field: "statusManagerType", type: "condition", conditions: [{ value: "INITIALIZE", replacedValue: "ثبت اولیه" }, { value: "PUBLISH", replacedValue: "منتشر شده" }] },
    ];
    const queries = useMemo(() => ({
        provinceId: provinceId,
    }), [provinceId]);
    const tableContent: TableContentProps = {
        cols: cols,
        queries: queries
    }
    const tableConfig: TableConfigProps = {
        apiUrl: {
            fetch: "/companyInfo/search-With-pageable",
            delete: "companyInfo/delete/",
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
        provinceId,
        setProvinceId,
        provinces,
        provincesLoading,
        search
    }
}
export default useProvinceCompany