import { Metadata, NextPage } from 'next'
import News from '@/features/news/components/News'
export const metadata: Metadata = {
    title: "اخبار | صندوق بیمه کشاورزی",
    description: "اخبار | صندوق بیمه کشاورزی",
};
const Index: NextPage = () => {
    return <>
        <News />
    </>
}
export default Index