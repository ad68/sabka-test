"use client"
import Table from "@/components/kit/Table";
import CustomModal from "@/components/kit/CustomModal";
import CreateFilmGalleryModal from './CreateFilmGalleryModal'
import UpdateFilmGalleryModal from './UpdateFilmGalleryModal'

import useFilmGalleryInfo from "@/features/admin/media/components/film-gallery/hook/useFilmGalleryInfo";
export default function Index() {
    const { tableConfig, tableContent, isAddModalOpen, setIsAddModalOpen, isUpdateModalOpen, setIsUpdateModalOpen, reloadTable, selectedRow, } = useFilmGalleryInfo()
    return <section>

        <Table
            content={tableContent}
            config={tableConfig}
        />
        <CustomModal width={700} open={isAddModalOpen} onClose={() => { setIsAddModalOpen(false) }} >
            <CreateFilmGalleryModal reloadTable={reloadTable} onClose={() => { setIsAddModalOpen(false) }} />
        </CustomModal>
        <CustomModal width={700} open={isUpdateModalOpen} onClose={() => { setIsUpdateModalOpen(false) }} >
            <UpdateFilmGalleryModal selectedRow={selectedRow} reloadTable={reloadTable} onClose={() => { setIsUpdateModalOpen(false) }} />
        </CustomModal>
    </section>
}
