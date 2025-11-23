import { QuestionIcon } from "@/assets/icons/QuestionIcon";
import CustomButton from "@/components/kit/CustomButton";
import CustomModal from "../CustomModal";
type QuestionModalProp = {
    open: boolean,
    width?: any,
    action: () => void,
    onClose: () => void,
    actionLoading?: boolean,
    title: string
}
export default function QuestionModal({ open, width, action, onClose, actionLoading, title }: QuestionModalProp) {
    return <CustomModal open={open} width={width} onClose={onClose}>
        <div className="flex justify-center text-lg">
            <QuestionIcon className="text-primary text-lg w-[80px]" />
        </div>
        <h1 className="text-center mt-8">{title}</h1>
        <div className="flex justify-center gap-2 mt-5">
            <CustomButton onClick={onClose} variant="outlined" size="small">خیر</CustomButton>
            <CustomButton onClick={() => action()} loading={actionLoading} size="small">بله</CustomButton>
        </div>
    </CustomModal>
}
