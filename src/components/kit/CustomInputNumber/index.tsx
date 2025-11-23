import { forwardRef, InputHTMLAttributes, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type CustomInputNumberProps = {
    value?: string | number;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    boxSize?: "normal" | "large";
    thousandSeparator?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "type">;

const formatNumber = (val: string): string => {
    if (!val) return "";
    const numeric = val.replace(/\D/g, "");
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CustomInputNumber = forwardRef<HTMLInputElement, CustomInputNumberProps>(
    (
        {
            value,
            onChange,
            placeholder,
            boxSize = "normal",
            className,
            thousandSeparator = false,
            ...rest
        },
        ref
    ) => {
        const handleChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const raw = e.target.value.replace(/\D/g, "");
                onChange(raw);
            },
            [onChange]
        );

        const displayValue =
            thousandSeparator && value !== undefined && value !== null
                ? formatNumber(String(value))
                : String(value ?? "");

        return (
            <Input
                ref={ref}
                value={displayValue}
                type="text"
                inputMode="numeric"
                onChange={handleChange}
                placeholder={placeholder || "عدد وارد کنید"}
                dir="rtl"
                className={cn(
                    "w-full bg-white  text-black",
                    boxSize === "large" && "h-12",
                    className
                )}
                {...rest}
            />
        );
    }
);

CustomInputNumber.displayName = "CustomInputNumber";

export default CustomInputNumber;
