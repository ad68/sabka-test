import { Metadata, NextPage } from 'next'
import Login from '@/features/login/components/Login'
export const metadata: Metadata = {
    title: "ورود | صندوق بیمه کشاورزی",
    description: "ورود | صندوق بیمه کشاورزی",
};
const Index: NextPage = () => {
    return <Login />
}
export default Index