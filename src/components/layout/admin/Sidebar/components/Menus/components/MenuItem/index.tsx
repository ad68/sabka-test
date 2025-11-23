import Link from "next/link";

export default function MenuItem({ item }: any) {
    return (
        <Link
            href={item.href}
            className={`flex justify-between items-center w-full px-3 py-2 rounded-xl
        text-sm transition-all duration-200
        ${item.active
                    ? "bg-[rgb(53,102,58)] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[rgb(53,102,58)]"
                }`}
        >
            <div className="flex items-center gap-2">
                {item.icon && <span>{item.icon}</span>}
                <span className="font-medium">{item.name}</span>
            </div>
        </Link>
    );
}
