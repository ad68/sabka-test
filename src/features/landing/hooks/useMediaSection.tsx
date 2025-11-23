import { NewsIcon } from "@/assets/icons/NewsIcon";
import { ImageIcon } from "@/assets/icons/ImageIcon";
import { FilmIcon } from "@/assets/icons/FilmIcon";
import { MagazineIcon } from "@/assets/icons/MagazineIcon";
import { useState } from "react";
const tabs = [
    { key: 1, title: 'اخبار', icon: NewsIcon, },
    { key: 2, title: 'تصاویر', icon: ImageIcon, },
    { key: 3, title: 'فیلم ها', icon: FilmIcon, },
    { key: 4, title: 'نشریات خبری', icon: MagazineIcon, },
];
const useMediaSection = () => {

    const [activeTab, setActiveTab] = useState(0);
    return {
        activeTab,
        setActiveTab,
        tabs
    }
}
export default useMediaSection