import { useEffect, useRef, useState } from "react";
import "./style.css";
import { useAxiosWithToken } from "@/hooks";
import { Trash2Icon } from "lucide-react";
import { DeleteModalProps } from "../Table/customTable.types";
export default function Index({ children, open, onClose, onSuccess, width, buttonText, api, id }: DeleteModalProps) {
  const modalBox = useRef<HTMLInputElement>(null);
  const modalWrapper = useRef<HTMLInputElement>(null);
  const modalOverlay = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (modalWrapper.current && modalBox.current && modalOverlay.current) {
      if (open) {
        modalWrapper.current.style.display = "flex";
        setTimeout(() => {
          if (modalWrapper.current && modalBox.current && modalOverlay.current) {
            modalBox.current.style.transform = "scale(1)";
            modalOverlay.current.style.opacity = "1";
          }
        }, 10);
      } else {
        modalBox.current.style.transform = "scale(0)";
        modalOverlay.current.style.opacity = "0";
        setTimeout(() => {
          if (modalWrapper.current) {
            modalWrapper.current.style.display = "none";
          }
        }, 400);
      }
    }

  }, [open]);
  const success = () => {
    setLoading(true);
    useAxiosWithToken
      .delete(api + id)
      .then(() => {
        setLoading(false);
        if (onSuccess) {
          onSuccess();
        }
        onClose();
      })
      .catch(() => {
        setLoading(false);
        onClose();
      });
  };

  return (
    <div ref={modalWrapper} className="fixed h-full w-full top-0 left-0 hidden items-center justify-center z-[500]">
      <div ref={modalOverlay} onClick={onClose} className="absolute w-full h-full top-0 opacity-0 transition-all duration-300 left-0 backdrop-blur-sm z-[150] bg-[#4d4d4d7e]"></div>
      <div className="relative left-0 top-0 flex h-full w-full items-center justify-center">
        <div ref={modalBox} className="h-auto py-[30px] px-[30px] min-h-[100px] bg-white mx-auto z-[1000] rounded-[10px] scale-0 transition-all duration-300" style={{ width: width ? width : 399, transform: "scale(0)" }}>
          <div className=" flex w-[80px] h-[80px] m-auto bg-red-50 rounded-full items-center justify-center w">
            <Trash2Icon className="w-[50px] h-[50px] text-red-500" />
          </div>
          <div className="flex items-center justify-start mt-5">
            <span className={`block h-[12px] w-[12px] rounded-full bg-[#E14856]`}></span>
            <span className="mr-[12px]"> کاربر گرامی:</span>
          </div>
          <p className="mt-[10px]  w-[335px]">{children}</p>
          <div className="flex items-center justify-between">
            <button onClick={onClose} className={`m-auto mt-[32px] block h-[48px] w-[155px] max-w-[48%]  rounded-[8px] border-2 border-[#A6A9BD] text-[#A6A9BD]`}>
              بازگشت
            </button>
            <button onClick={success} className={`relative m-auto mt-[32px] block h-[48px] w-[155px] max-w-[48%] rounded-[8px] bg-[#E14856] text-white`}>
              {loading && <div className="deleteLoader"></div>}
              {buttonText ? buttonText : "حذف"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
