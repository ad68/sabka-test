"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MenuItem from "@/components/layout/admin/Sidebar/components/Menus/components/MenuItem";

export default function Collapse({ item }: any) {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">
            <button
                onClick={() => setOpen(!open)}
                className={`flex justify-between items-center w-full px-3 py-2 rounded-xl
          text-sm transition-all duration-200 font-medium select-none
          ${open
                        ? "bg-[rgb(53,102,58)] text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[rgb(53,102,58)]"
                    }`}
            >
                <div className="flex items-center gap-2">
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.name}</span>
                </div>
                {open ? (
                    <ChevronUp size={18} className="text-white" />
                ) : (
                    <ChevronDown size={18} className="text-gray-400" />
                )}
            </button>

            <AnimatePresence initial={false}>
                {open && item.children && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden mt-1 ml-3 bg-gray-50 border border-gray-100 rounded-xl"
                    >
                        {item.children.map((child: any, i: number) => (
                            <MenuItem key={i} item={child} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
