import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Outlet } from "react-router-dom";

import './layout.screen.css'

export const Layout = () => {

    return (

        <div className="container-layout" >
            <Header />
            <Menu />
            <Outlet />
        </div>
    )
}


// {/* <Lightning size={32} color="#dde3f0" weight="fill" />
// <Ticket size={32} color="#dde3f0" weight="fill" />
// <Wallet size={32} color="#dde3f0" weight="fill" />
// <Medal size={32} color="#dde3f0" weight="fill" />
// <X size={32} color="#dde3f0" weight="fill" />
// <MapPinLine size={32} color="#dde3f0" weight="fill" />
// <Binoculars size={32} color="#dde3f0" weight="fill" />
// <PencilLine size={32} color="#dde3f0" weight="fill" />
// <Trash size={32} color="#dde3f0" weight="fill" />
// <Lock size={32} color="#dde3f0" weight="fill" />
// <LockOpen size={32} color="#dde3f0" weight="fill" />
// <GearSix size={32} color="#dde3f0" weight="fill" />
// <CalendarBlank size={32} color="#dde3f0" weight="fill" />
// <User size={32} color="#dde3f0" weight="fill" /> */}