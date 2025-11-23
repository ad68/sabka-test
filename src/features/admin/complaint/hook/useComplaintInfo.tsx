"use client"
import { col, TableConfigProps, TableContentProps } from "@/components/kit/Table/customTable.types";
import { useEffect, useMemo, useState } from "react";
import moment from "moment-jalaali";
const useComplaintInfo = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [reload, setReload] = useState(false)
    const [createdOn, setCreatedOn] = useState()
    const [nationalCode, setNationalCode] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [selectedRow, setSelectedRow] = useState()
    const [statusComplaintType , setStatusComplaintType] = useState();

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
        { title: "کد ملی", field: "nationalCode", width: "200px" },
        { title: "نام شرکت", field: "companyName" },
        { title: "نام کاربری", field: "userName" },
        { title: "ایمیل", field: "email" },
        { title: "شماره تلفن", field: "phoneNumber" },
        { title: "شماره همراه", field: "mobileNumber" },
        { title: "نوع شکایت", field: "complaintType" },
        { title: "موضوع", field: "description", width: "350px" },
        // { title: "موضوع", field: "description", type: "description", width: "350px" },
        { title: "تاریخ", field: "date", type: "date" },
        { title: "وضعیت", field: "statusComplaintType", type: "condition", conditions: [{ value: "INITIALIZE", replacedValue: "ثبت اولیه" }, { value: "PUBLISH", replacedValue: "منتشر شده" }] },
    ];
    const queries = useMemo(() => ({
        nationalCode,
        companyName,
        creatOnDate: createdOn ? moment(createdOn).format("YYYY-MM-DD") : undefined,
        statusComplaintType
    }), [nationalCode, companyName, statusComplaintType, createdOn]);
    const tableContent: TableContentProps = {
        cols: cols,
        queries: queries
    }
    const tableConfig: TableConfigProps = {
        apiUrl: {
            fetch: "complaint/search-with-pageable",
            delete: "complaint/delete/",
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
        nationalCode,
        companyName,
        setCompanyName,
        statusComplaintType,
        setStatusComplaintType,
        setNationalCode,
        createdOn,
        setCreatedOn,
        search
    }
}
export default useComplaintInfo