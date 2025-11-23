import { Metadata, NextPage } from 'next'
import About from '@/features/aboutUs/components/AboutUs'
export const metadata: Metadata = {
    title: "درباره ما | صندوق بیمه کشاورزی",
    description: "در این صفحه می‌توانید درباره صندوق بیمه کشاورزی بیشتر بدانید.",
};
const Index: NextPage = () => {
    return <>
        <About />
    </>
}
export default Index