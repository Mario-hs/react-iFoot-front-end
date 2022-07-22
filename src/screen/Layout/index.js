import { ContainerLeft } from "../../components/ContainerLeft";
import { ContainerRightTop } from "../../components/ContainerRightTop";
import { ContainerRightBottom } from "../../components/ContainerRightBottom";
import { ContainerCenter } from "../../components/ContainerCenter";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import './styles.css'

export const Layout = (props) => {
    return (
        <div className="container-layout">
            <Header />
            <Menu />
            <div className="outlet">

                {props.type === 0 && (
                    <ContainerCenter user={'User'} />
                )} {props.type === 1 && (
                    <>
                        <ContainerLeft />
                        <ContainerRightTop />
                        <ContainerRightBottom />
                    </>
                )}
            </div>
        </div>
    )
}


{/* <Lightning size={32} color="#dde3f0" weight="fill" />
<Ticket size={32} color="#dde3f0" weight="fill" />
<Wallet size={32} color="#dde3f0" weight="fill" />
<Medal size={32} color="#dde3f0" weight="fill" />
<X size={32} color="#dde3f0" weight="fill" />
<MapPinLine size={32} color="#dde3f0" weight="fill" />
<Binoculars size={32} color="#dde3f0" weight="fill" />
<PencilLine size={32} color="#dde3f0" weight="fill" />
<Trash size={32} color="#dde3f0" weight="fill" />
<Lock size={32} color="#dde3f0" weight="fill" />
<LockOpen size={32} color="#dde3f0" weight="fill" />
<GearSix size={32} color="#dde3f0" weight="fill" />
<CalendarBlank size={32} color="#dde3f0" weight="fill" />
<User size={32} color="#dde3f0" weight="fill" /> */}