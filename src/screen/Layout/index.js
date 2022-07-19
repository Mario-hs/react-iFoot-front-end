import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import './styles.css'

export const Layout = () => {
    return (
        <div className="container-layout">
            <Header />
            <Menu />
        </div>
    )
}