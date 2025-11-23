"use client"
import Table from "@/components/kit/Table";
import CustomModal from "@/components/kit/CustomModal";
import CreateMediaModal from '@/features/admin/media/components/picture-promotional/components/CreatePicturePromotionalModal'
import UpdateMediaModal from '@/features/admin/media/components/picture-promotional/components/UpdatePicturePromotionalModal'
import usePicturePromotionalInfo from "@/features/admin/media/components/picture-promotional/hook/usePicturePromotionalInfo";
export default function Index() {
    const { tableConfig, tableContent, isAddModalOpen, setIsAddModalOpen, isUpdateModalOpen, setIsUpdateModalOpen, reloadTable, selectedRow, } = usePicturePromotionalInfo()
    return <section>
        <Table
            content={tableContent}
            config={tableConfig}
        />
        <CustomModal width={700} open={isAddModalOpen} onClose={() => { setIsAddModalOpen(false) }} >
            <CreateMediaModal reloadTable={reloadTable} onClose={() => { setIsAddModalOpen(false) }} />
        </CustomModal>
        <CustomModal width={700} open={isUpdateModalOpen} onClose={() => { setIsUpdateModalOpen(false) }} >
            <UpdateMediaModal selectedRow={selectedRow} reloadTable={reloadTable} onClose={() => { setIsUpdateModalOpen(false) }} />
        </CustomModal>

    </section>
}
