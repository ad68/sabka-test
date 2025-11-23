import { Metadata } from "next";
import Employees from '@/features/employees/components/Employees'
export const metadata: Metadata = {
    title: "اطلاعات کارکنان و مدیران | صندوق بیمه کشاورزی",

};
export default function Index() {

    return <Employees />

}
