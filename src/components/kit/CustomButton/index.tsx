'use client'
import React, { forwardRef, ReactNode } from "react";
import './style.css'
import { cn } from "@/lib/utils";
type Variant = "default" | "outlined";
type Color = "default" | "danger" | "secondary";
type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "outlined";
    color?: "default" | "danger" | "secondary";
    size?: "small" | "normal";
    loading?: boolean
    round?: boolean,
    icon?: ReactNode,
    type?: "submit" | "reset" | "button" | undefined
};

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ onClick, children, className, type = "submit", icon, loading, color, round, size = "normal", variant = "default", disabled }, ref) => {
        const baseStyles =
            `relative shadow-md overflow-hidden w-auto ${size === "small" ? ` h-[32px]` : `h-[42px]`} min-w-[100px] flex ${round ? "rounded-full" : "rounded-[6px]"} justify-center items-center p-[5px]  border transition-all duration-300"`

        const buttonVariants: Record<Variant, Record<Color, string>> = {
            default: {
                default:
                    "bg-primary  shadow-primary hover:bg-primary-600  active:bg-primary-800 text-white border-primary",
                danger:
                    "bg-red-500  shadow-red-500 hover:bg-red-600 active:bg-red-700 text-white border-red-400",
                secondary:
                    "bg-blue-600  shadow-blue-900 hover:bg-blue-800 active:bg-blue-700 text-white border-blue-400",
            },
            outlined: {
                default:
                    "bg-white shadow-primary text-primary border-primary hover:bg-slate-200",
                danger:
                    "bg-white text-red-500 border-red-500 hover:bg-red-50",
                secondary:
                    "bg-white text-blue-500 border-blue-500 hover:bg-blue-50",
            },
        };
        const getButtonVariantClasses = (variant: Variant = "default", color: Color = "default") => {
            return buttonVariants[variant][color];
        };
        return (
            <button
                ref={ref}
                onClick={onClick}
                disabled={loading || disabled}
                type={type}
                className={cn("group active:scale-[0.98] disabled:opacity-70", baseStyles, getButtonVariantClasses(variant, color), className)}
                dir="rtl"
                style={{ textAlign: "right" }}
            >
                {loading ? <section className={size === "small" ? "btnLoaderTiny" : "btnLoader"}></section> : <div className="flex justify-center items-center gap-[5px] text-sm  z-10">
                    {icon && icon}
                    {children}</div>}
            </button>
        );
    }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
