"use client"
import Table from "@/components/kit/Table";
import CustomModal from "@/components/kit/CustomModal";
import CreatePublicationModal from './CreatePublicationModal'
import UpdatePublicationModal from './UpdatePublicationModal'
import FormField from "@/components/kit/FormField";
import CustomTextBox from "@/components/kit/CustomTextBox";

import CustomButton from "@/components/kit/CustomButton";
import { Search } from "lucide-react";
import CustomSelect from "@/components/kit/CustomSelect";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
import usePublicationInfo from "@/features/admin/publication/hook/usePublicationInfo";
export default function Index() {
    const { tableConfig, tableContent, isAddModalOpen, setIsAddModalOpen, isUpdateModalOpen, setIsUpdateModalOpen, reloadTable, persianTitle, setPersianTitle, setStatusArticleType, statusArticleType, selectedRow, search, createdOn, setCreatedOn } = usePublicationInfo('PUBLICATION')
    return <section>
        <div className="pt-2 pb-3 px-5 grid xl:grid-cols-4 2xl:grid-cols-5 gap-4 bg-slate-50 border my-2 rounded-lg">
            <FormField title="عنوان فارسی">
                <CustomTextBox
                    onKeyUp={(e) => {
                        if (e.key === "Enter" || e.code === "NumpadEnter") {

                            search();
                        }
                    }}
                    value={persianTitle}
                    className="w-full"
                    onChange={(value) => setPersianTitle(value)}
                />
            </FormField>

            <FormField title="تاریخ ثبت">
                <CustomDatepicker value={createdOn} onChange={(val: any) => setCreatedOn(val)} />
            </FormField>
            <FormField title="وضعیت">
                <CustomSelect instanceId="status-select" value={statusArticleType} onChange={(value) => setStatusArticleType(value)} options={[{ label: "ثبت اولیه", value: "INITIALIZE" }, { label: "منتشر شده", value: "PUBLISH" }]} />
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
            <CreatePublicationModal reloadTable={reloadTable} onClose={() => { setIsAddModalOpen(false) }} />
        </CustomModal>
        <CustomModal width={700} open={isUpdateModalOpen} onClose={() => { setIsUpdateModalOpen(false) }} >
            <UpdatePublicationModal selectedRow={selectedRow} reloadTable={reloadTable} onClose={() => { setIsUpdateModalOpen(false) }} />
        </CustomModal>
    </section>
}
