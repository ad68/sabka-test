"use client"
import Table from "@/components/kit/Table";
import CustomModal from "@/components/kit/CustomModal";
import CreateProvinceCompanyModal from './CreteProvinceCompanyModal'
import UpdateProvinceCompanyModal from './UpdateProvinceCompanyModal'
import FormField from "@/components/kit/FormField";

import CustomButton from "@/components/kit/CustomButton";
import { Search } from "lucide-react";

import useProvinceCompany from "../hook/useProvinceCompany";
import CustomSelect from "@/components/kit/CustomSelect";

export default function Index() {
    const { tableConfig, tableContent, isAddModalOpen, setIsAddModalOpen, isUpdateModalOpen, setIsUpdateModalOpen, reloadTable, selectedRow, search, provinces, provincesLoading, provinceId, setProvinceId } = useProvinceCompany()
    return <section>
        <div className="pt-2 pb-3 px-5 grid xl:grid-cols-4 2xl:grid-cols-5 gap-4 bg-slate-50 border my-2 rounded-lg">
            <FormField title="استان">
                <CustomSelect loading={provincesLoading} options={provinces ? provinces?.map((item: any) => ({ label: item.name, value: item.id })) : []} value={provinceId} onChange={(id) => setProvinceId(id)} className="w-full" />

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
            <CreateProvinceCompanyModal reloadTable={reloadTable} onClose={() => { setIsAddModalOpen(false) }} />
        </CustomModal>
        <CustomModal width={700} open={isUpdateModalOpen} onClose={() => { setIsUpdateModalOpen(false) }} >
            <UpdateProvinceCompanyModal selectedRow={selectedRow} reloadTable={reloadTable} onClose={() => { setIsUpdateModalOpen(false) }} />
        </CustomModal>
    </section>
}
