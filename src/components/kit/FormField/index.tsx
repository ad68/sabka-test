import type { ReactNode } from "react";
type FormFieldProp = {
    title: string,
    children: ReactNode,
    isError?: any,
    icon?: ReactNode
    errorMessage?: string | undefined
}
export default function FormField({ title, isError, errorMessage, children, icon }: FormFieldProp) {
    return <div className="pb-3 relative">
        <span className="text-sm mb-[4px] flex items-center gap-1 font-bold text-primary">{icon ? icon : ""}{title}</span>
        {children}
        {!!isError && <p className="text-red-500 w-full absolute bottom-[-10px] left-0 text-xs mt-1">{errorMessage}</p>}
    </div>
}
