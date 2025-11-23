'use client'

import Table from "@/components/kit/Table"
import useHomeSlider from "../hooks/useHomeSlider"
import CreateSliderItemModal from './AddSliderItemForm'
import CustomModal from "@/components/kit/CustomModal";
/* import QuestionModal from "@/components/kit/QuestionModal" */
export default function Index() {
    const { tableContent, tableConfig, isAddModalOpen, setIsAddModalOpen, reloadTable } = useHomeSlider()
    return <>
        <Table
            content={tableContent}
            config={tableConfig}
        />
        <CustomModal width={800} open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
            <CreateSliderItemModal reloadTable={reloadTable} onClose={() => setIsAddModalOpen(false)} />
        </CustomModal>
    </>
}
