// components/ui/CustomTextBox.tsx
import { forwardRef, InputHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type CustomTextBoxProps = {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    boxSize?: "normal" | "large";

} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

const CustomTextBox = forwardRef<HTMLInputElement, CustomTextBoxProps>(
    ({ value, onChange, placeholder, boxSize = "normal", className, type, ...rest }, ref) => {
        return (
            <Input
                ref={ref}
                value={value}
                type={type}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder || "متن خود را وارد کنید"}
                dir="rtl"
                className={cn("w-full bg-white h-[38px]  focus:shadow-lg focus:shadow-blue-200 focus:border-blue-400 ring-black text-black", boxSize === "large" && "h-12", className)}
                {...rest}
            />

        );
    }
);

CustomTextBox.displayName = "CustomTextBox";

export default CustomTextBox;
