import { Metadata, NextPage } from 'next'
import Notice from '@/features/notice/components/Notice'
export const metadata: Metadata = {
    title: "اطلاعیه ها | صندوق بیمه کشاورزی",
    description: "اطلاعیه ها | صندوق بیمه کشاورزی",
};
const Index: NextPage = () => {
    return <Notice />
}
export default Index