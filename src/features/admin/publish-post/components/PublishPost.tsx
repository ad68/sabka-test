"use client"
import Table from "@/components/kit/Table";


import FormField from "@/components/kit/FormField";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomButton from "@/components/kit/CustomButton";
import { Search } from "lucide-react";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
import usePostInfo from "@/features/admin/publish-post/hook/usePublishPost";
import QuestionModal from "@/components/kit/QuestionModal";
export default function Index() {
    const { publishPost, publishIsPending, tableConfig, tableContent, persianTitle, setPersianTitle, search, createdOn, setCreatedOn, isBulkPublishModalOpen, setIsBulkPublishModalOpen } = usePostInfo('POST')
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

            <CustomButton className="mt-[25px] w-[110px] h-[35px]" size="small" onClick={search}>
                <Search />
                جستجو
            </CustomButton>
        </div>
        <Table
            content={tableContent}
            config={tableConfig}
        />

        <QuestionModal actionLoading={publishIsPending} action={publishPost} title="آیا مایلید موارد مورد نظر پابلیش شود؟" width={500} open={isBulkPublishModalOpen} onClose={() => { setIsBulkPublishModalOpen(false) }} />
    </section>
}
