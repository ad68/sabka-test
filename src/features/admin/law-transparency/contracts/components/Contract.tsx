"use client"
import Table from "@/components/kit/Table";
import CustomModal from "@/components/kit/CustomModal";
import CreateContractModal from './CreateContractModal'
import UpdateContractModal from './UpdateContractModal'
/* import FormField from "@/components/kit/FormField";

import CustomButton from "@/components/kit/CustomButton";
import { Search } from "lucide-react";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
import CustomTextBox from "@/components/kit/CustomTextBox"; */
import useContractInfo from "@/features/admin/law-transparency/contracts/hook/useContractInfo";
export default function Index() {
    const { tableConfig, tableContent, isAddModalOpen, setIsAddModalOpen, isUpdateModalOpen, setIsUpdateModalOpen, reloadTable, selectedRow } = useContractInfo()
    return <section>
        {/*       <div className="pt-2 pb-3 px-5 grid xl:grid-cols-4 2xl:grid-cols-5 gap-4 bg-slate-50 border my-2 rounded-lg">

            <FormField title="شماره قرارداد">
                <CustomTextBox
                    onKeyUp={(e) => {
                        if (e.key === "Enter" || e.code === "NumpadEnter") {
                            search();
                        }
                    }}
                    value={contractNumber}
                    className="w-full"
                    onChange={(value) => setContractNumber(value)}
                />
            </FormField>
            <FormField title="تاریخ قرارداد">
                <CustomDatepicker value={createdOn} onChange={(val: any) => setCreatedOn(val)} />
            </FormField>
            <CustomButton className="mt-[25px] w-[110px] h-[35px]" size="small" onClick={search}>
                <Search />
                جستجو
            </CustomButton>
        </div> */}
        <Table
            content={tableContent}
            config={tableConfig}
        />
        <CustomModal width={700} open={isAddModalOpen} onClose={() => { setIsAddModalOpen(false) }} >
            <CreateContractModal reloadTable={reloadTable} onClose={() => { setIsAddModalOpen(false) }} />
        </CustomModal>
        <CustomModal width={700} open={isUpdateModalOpen} onClose={() => { setIsUpdateModalOpen(false) }} >
            <UpdateContractModal selectedRow={selectedRow} reloadTable={reloadTable} onClose={() => { setIsUpdateModalOpen(false) }} />
        </CustomModal>
    </section>
}
