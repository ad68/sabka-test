import { Metadata } from "next";
import LegalCase from '@/features/legalCase/components/LegalCase'
export const metadata: Metadata = {
    title: "ارای قطعی مراجع قضایی | صندوق بیمه کشاورزی",

};
export default function Index() {

    return <LegalCase />
}
