import { ContainerLeft } from "../../components/ContainerLeft";
import { ContainerRightTop } from "../../components/ContainerRightTop";
import { ContainerRightBottom } from "../../components/ContainerRightBottom";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import './styles.css'

export const Layout = () => {
    return (
        <div className="container-layout">
            <Header />
            <Menu />
            <div className="outlet">
                <ContainerLeft />
                <ContainerRightTop />
                <ContainerRightBottom />
            </div>
        </div>
    )
}