import { Metadata, NextPage } from 'next'
import Contracts from '@/features/contracts/components/Contracts'
export const metadata: Metadata = {
    title: "قراردادها | صندوق بیمه کشاورزی",
    description: "قراردادها | صندوق بیمه کشاورزی",
};
const Index: NextPage = () => {
    return <Contracts />
}
export default Index