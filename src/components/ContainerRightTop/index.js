import { Binoculars, CalendarBlank, GearSix, Lightning, Lock, LockOpen, MapPinLine, Medal, PencilLine, Ticket, Trash, User, Wallet, X } from "phosphor-react";

import './styles.css'

export const ContainerRightTop = () => {
    return (
        <section className='container_right_top'>
            <h1>Container RIGHT Top</h1>
            <Lightning size={32} color="#dde3f0" weight="fill" />
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
            <User size={32} color="#dde3f0" weight="fill" />
        </section>
    )
}