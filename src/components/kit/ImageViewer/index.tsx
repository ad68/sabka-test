'use client'
import CustomButton from "@/components/kit/CustomButton";
import CustomModal from "@/components/kit/CustomModal";
import { Download, Eye } from "lucide-react";
import { useState } from "react";
export default function ImageViewer({ imageBase64 }: { imageBase64: string }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = imageBase64;
        link.download = "image.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return <>
        <div className="w-[200px] h-[200px] border rounded-3xl overflow-hidden mt-7 relative">
            <img src={imageBase64} className="w-full h-full" alt="" />
            <button type="button" className="absolute bottom-3 left-3 z-30 w-[35px] h-[35px] bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-full flex justify-center items-center" onClick={handleDownload}>
                <Download className="w-[20px]" />
            </button>
            <button onClick={() => setModalIsOpen(true)} type="button" className="absolute bottom-3 left-[55px] z-30 w-[35px] h-[35px] bg-secondary-500 hover:bg-secondary-700 transition-all text-white rounded-full flex justify-center items-center" >
                <Eye className="w-[20px]" />
            </button>
        </div>
        <CustomModal width={800} onClose={() => setModalIsOpen(false)} open={modalIsOpen}>
            <img src={imageBase64} className="max-h-[700px] m-auto" alt="" />
            <CustomButton size="small" color="secondary" round onClick={handleDownload} type="button" className="flex justify-center items-center gap-2 absolute px-[20px] bottom-3 left-3 z-30 ">
                <Download className="w-[20px]" />
                <span>دانلود</span>
            </CustomButton>
        </CustomModal>
    </>
}
