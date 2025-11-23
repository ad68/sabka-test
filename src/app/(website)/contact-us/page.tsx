import { Metadata, NextPage } from 'next'
import ContactUs from '@/features/contactUs/components/ContactUs'
export const metadata: Metadata = {
    title: "ارتباط با ما | صندوق بیمه کشاورزی",
    description: "در این صفحه می‌توانید با ما در ارتباط باشید.",
};
const Index: NextPage = () => {
    return <>
        <ContactUs />
    </>
}
export default Index