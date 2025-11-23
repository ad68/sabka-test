"use client"
import Table from "@/components/kit/Table";
import CustomModal from "@/components/kit/CustomModal";
import CreatePictureGalleryModal from './CreatePictureGalleryModal'
import UpdatePictureGalleryModal from './UpdatePictureGalleryModal'
import usePictureGalleryInfo from "@/features/admin/media/components/picture-gallery/hook/usePictureGalleryInfo";

export default function Index() {
    const { tableConfig, tableContent, isAddModalOpen, setIsAddModalOpen, isUpdateModalOpen, setIsUpdateModalOpen, reloadTable, selectedRow } = usePictureGalleryInfo()
    return <section>

        <Table
            content={tableContent}
            config={tableConfig}
        />
        <CustomModal width={700} open={isAddModalOpen} onClose={() => { setIsAddModalOpen(false) }} >
            <CreatePictureGalleryModal reloadTable={reloadTable} onClose={() => { setIsAddModalOpen(false) }} />
        </CustomModal>
        <CustomModal width={700} open={isUpdateModalOpen} onClose={() => { setIsUpdateModalOpen(false) }} >
            <UpdatePictureGalleryModal selectedRow={selectedRow} reloadTable={reloadTable} onClose={() => { setIsUpdateModalOpen(false) }} />
        </CustomModal>
    </section>
}
