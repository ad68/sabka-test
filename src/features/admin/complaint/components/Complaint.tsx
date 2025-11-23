"use client"
import Table from "@/components/kit/Table";
import CustomModal from "@/components/kit/CustomModal";
import CreateComplaintModal from './CreateComplaintModal'
import UpdateComplaintModal from './UpdateComplaintModal'
import FormField from "@/components/kit/FormField";

import CustomButton from "@/components/kit/CustomButton";
import { Search } from "lucide-react";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
import CustomTextBox from "@/components/kit/CustomTextBox";
import useComplaintInfo from "@/features/admin/complaint/hook/useComplaintInfo";
export default function Index() {
    const { tableConfig, tableContent, isAddModalOpen, setIsAddModalOpen, isUpdateModalOpen, setIsUpdateModalOpen, reloadTable, nationalCode, setNationalCode,companyName ,setCompanyName, selectedRow, search, createdOn, setCreatedOn } = useComplaintInfo()
    return <section>
        <div className="pt-2 pb-3 px-5 grid xl:grid-cols-4 2xl:grid-cols-5 gap-4 bg-slate-50 border my-2 rounded-lg">

            <FormField title="کد ملی">
                <CustomTextBox
                    onKeyUp={(e) => {
                        if (e.key === "Enter" || e.code === "NumpadEnter") {
                            search();
                        }
                    }}
                    value={nationalCode}
                    className="w-full"
                    onChange={(value) => setNationalCode(value)}
                />
            </FormField>
            <FormField title="نام شرکت">
                <CustomTextBox
                    onKeyUp={(e) => {
                        if (e.key === "Enter" || e.code === "NumpadEnter") {
                            search();
                        }
                    }}
                    value={companyName}
                    className="w-full"
                    onChange={(value) => setCompanyName(value)}
                />
            </FormField>
            <FormField title="تاریخ">
                <CustomDatepicker value={createdOn} onChange={(val: any) => setCreatedOn(val)} />
            </FormField>
            <CustomButton className="mt-[25px] w-[110px] h-[35px]" size="small" onClick={search}>
                <Search />
                جستجو
            </CustomButton>
        </div>
        <Table
            content={tableContent}
            config={tableConfig}
        />
        <CustomModal width={700} open={isAddModalOpen} onClose={() => { setIsAddModalOpen(false) }} >
            <CreateComplaintModal reloadTable={reloadTable} onClose={() => { setIsAddModalOpen(false) }} />
        </CustomModal>
        <CustomModal width={700} open={isUpdateModalOpen} onClose={() => { setIsUpdateModalOpen(false) }} >
            <UpdateComplaintModal selectedRow={selectedRow} reloadTable={reloadTable} onClose={() => { setIsUpdateModalOpen(false) }} />
        </CustomModal>
    </section>
}
