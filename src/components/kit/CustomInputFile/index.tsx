"use client";
import { UploadCloudIcon } from "lucide-react";
import { useRef } from "react";

type CustomInputFileProps<T extends boolean> = {
    value?: T extends true ? File[] : File | null;
    onChange?: (value: T extends true ? File[] : File | null) => void;
    className?: string;
    accept?: string;
    multiple?: T;
};

export default function CustomInputFile<T extends boolean = false>({
    value,
    onChange,
    className,
    accept,
    multiple,
}: CustomInputFileProps<T>) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => inputRef.current?.click();

    const fileHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files ? Array.from(e.target.files) : [];

        if (multiple) {
            onChange?.(files as any);
        } else {
            onChange?.((files[0] ?? null) as any);
        }
    };

    const displayValue =
        multiple && Array.isArray(value)
            ? value.map((f) => f.name).join(", ")
            : (value as File | null)?.name ?? "";

    return (
        <section
            className={`overflow-hidden h-[38px] relative flex bg-slate-50 cursor-pointer items-center rounded-1xl border-[1px] rounded-[8px] border-silver ${className}`}
        >
            <input
                onChange={fileHandleChange}
                ref={inputRef}
                type="file"
                className="hidden"
                multiple={multiple}
                accept={accept}
            />
            <button
                onClick={handleClick}
                type="button"
                className="h-full flex justify-center rounded-e-lg items-center gap-2 px-2 flex-shrink-0 bg-secondary text-center text-white text-sm"
            >
                <UploadCloudIcon />
                انتخاب فایل
            </button>
            <input
                type="text"
                readOnly
                value={displayValue}
                placeholder="هیچ فایلی انتخاب نشده"
                className="flex-1 px-2 text-sm outline-none bg-transparent"
            />
        </section>
    );
}
