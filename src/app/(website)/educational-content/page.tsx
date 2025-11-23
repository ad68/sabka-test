import { Metadata, NextPage } from 'next'
import EducationalContent from '@/features/educationalContent/components/EducationalContent'
export const metadata: Metadata = {
    title: "محتوای آموزشی | صندوق بیمه کشاورزی",
    description: "محتوای آموزشی | صندوق بیمه کشاورزی",
};
const Index: NextPage = () => {
    return <EducationalContent />
}
export default Index