import {
    BookText,
    Gavel,
    ImageIcon,
    FilmIcon,
    FileIcon,
    NewspaperIcon,
    BellIcon,
    Megaphone,
    CheckCheck,
    EarthIcon,
    HomeIcon,
} from "lucide-react";
import MenuItem from "./components/MenuItem";
import Collapse from "./components/Collapse";
import { usePathname } from "next/navigation";

interface MenuItemType {
    name: string;
    href: string;
    icon?: React.ReactNode;
    children?: MenuItemType[];
    active?: boolean;
}

export default function Index() {
    const pathname = usePathname();
    const links: MenuItemType[] = [
        {
            name: "صفحه نخست",
            href: "#",
            icon: <HomeIcon size={18} />,
            children: [
                {
                    name: "اسلایدر اصلی", href: "/admin/home-slider",
                    active: pathname.startsWith("/admin/home-slider"),
                },
            ],
        },
        {
            name: "آیین نامه و دستورالعمل",
            href: "/admin/article",
            active: pathname.startsWith("/admin/article"),
            icon: <BookText size={18} />,
        },
        {
            name: "اخبار", href: "/admin/post", icon: <Megaphone size={18} />,
            active: pathname.startsWith("/admin/post"),
        },
        {
            name: "اطلاعیه",
            href: "/admin/notice",
            icon: <BellIcon size={18} />,
            active: pathname.startsWith("/admin/notice"),
        },
        {
            name: "نشریات", href: "/admin/publication", icon: <NewspaperIcon size={18} />,
            active: pathname.startsWith("/admin/publication"),
        },
        {
            name: "تصاویر-گالری", href: "/admin/media/picture-gallery", icon: <ImageIcon size={18} />,
            active: pathname.startsWith("/admin/media/picture-gallery"),
        },
        {
            name: "فیلم-گالری", href: "/admin/media/film-gallery", icon: <FilmIcon size={18} />,
            active: pathname.startsWith("/admin/media/film-gallery"),
        },
        {
            name: "تصاویر-رسانه ترویجی", href: "/admin/media/picture-promotional", icon: <ImageIcon size={18} />,
            active: pathname.startsWith("/admin/media/picture-promotional"),
        },
        {
            name: "فیلم-رسانه ترویجی", href: "/admin/media/film-promotional", icon: <FilmIcon size={18} />,
            active: pathname.startsWith("/admin/media/film-promotional"),
        },
        {
            name: "فایل-رسانه ترویجی", href: "/admin/media/file-promotional", icon: <FileIcon size={18} />,
            active: pathname.startsWith("/admin/media/file-promotional"),
        },
        {
            name: "قانون شفافیت قوای سه‌گانه",
            href: "#",
            icon: <Gavel size={18} />,
            children: [
                {
                    name: "اطلاعات و صورت‌های مالی", href: "/admin/media/financial-info",
                    active: pathname.startsWith("/admin/media/financial-info"),
                },
                {
                    name: "اطلاعات مدیران", href: "/admin/law-transparency/managers-info",
                    active: pathname.startsWith("/admin/law-transparency/managers-info"),
                },

                {
                    name: "آرای قطعی مراجع قضایی", href: "/admin/law-transparency/final-judgement",
                    active: pathname.startsWith("/admin/law-transparency/final-judgement"),
                },
                {
                    name: "قراردادها", href: "/admin/law-transparency/contracts",
                    active: pathname.startsWith("/admin/law-transparency/contracts"),
                },
                {
                    name: "شرکت‌های هر استان", href: "/admin/law-transparency/province-company",
                    active: pathname.startsWith("/admin/law-transparency/province-company"),
                },

            ],
        },
        {
            name: "انتشار مطالب",
            href: "#",
            icon: <CheckCheck size={18} />,
            children: [

                {
                    name: "تایید انتشار اخبار", href: "/admin/publish-post",
                    active: pathname.startsWith("/admin/publish-post"),
                },
            ],
        },
        {
            name: "بازگشت به سایت",
            href: "/",
            icon: <EarthIcon size={18} />,
            active: pathname.startsWith("/admin/complaint") || pathname.startsWith("/admin/complaint")

        },
    ];

    return (
        <section className="w-full h-[calc(100vh-100px)] rounded-b-xl bg-white px-[15px] py-[15px] space-y-2 overflow-y-auto">
            {links.map((item, index) => (
                <div key={index} className="cursor-pointer">
                    {item.children ? <Collapse item={item} /> : <MenuItem item={item} />}
                </div>
            ))}
        </section>
    );
}
