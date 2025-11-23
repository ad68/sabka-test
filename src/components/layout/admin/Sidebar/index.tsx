import Menus from './components/Menus'
import Header from './components/Header'
export default function Index() {
    return <aside className="w-[330px] relative shadow-xl rounded-b-xl min-h-[400px] h-auto">
        <Header />
        <Menus />
    </aside>
}
