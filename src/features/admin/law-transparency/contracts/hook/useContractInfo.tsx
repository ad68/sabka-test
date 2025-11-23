"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";
import { useMemo, useState } from "react";
import moment from "moment-jalaali";
const useContractInfo = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [reload, setReload] = useState(false)
    const [createdOn, setCreatedOn] = useState()
    const [contractNumber, setContractNumber] = useState("")
    // const [statusContractType, setStatusContractType] = useState<string | null>(null);
    const [selectedRow, setSelectedRow] = useState()

    const reloadTable = () => {
        setReload(!reload)
    }
    const search = () => {
        reloadTable()
    }

    const cols: Array<col> = [
        { title: "نوع معامله", field: "dealType", type: "condition", conditions: [{ value: "BID", replacedValue: "مزایده" }, { value: "TENDER", replacedValue: "مناقصه" }] },
        { title: "تاریخ قرارداد", field: "dateOfHolding", type: "date" },
        { title: "سایر", field: "other", },
        { title: "طرف قرارداد", field: "contractingParty", },
        { title: "نتیجه", field: "resultDealType", type: "condition", conditions: [{ value: "ACCEPT", replacedValue: "قبول" }, { value: "FINISHED", replacedValue: "اتمام قرارداد" }] },

        { title: "مبلغ برآوردی (ریال)", field: "estimatedAmount", type: 'price' },
        { title: "مبلغ قرارداد (ریال)", field: "totalAmountContract", type: 'price' },
    ];
    const queries = useMemo(() => ({
        contractNumber,
        dateContract: createdOn ? moment(createdOn).format("YYYY-MM-DD") : undefined,
        // statusContractType
    }), [contractNumber, createdOn]);
    const tableContent: TableContentProps = {
        cols: cols,
        queries: queries
    }
    const tableConfig: TableConfigProps = {
        apiUrl: {
            fetch: "/contract/search-with-pageable",
            delete: "contract/delete/",
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
        contractNumber,
        setContractNumber,
        createdOn,
        setCreatedOn,
        search
    }
}
export default useContractInfo