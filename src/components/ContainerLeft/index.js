import { Binoculars, CalendarBlank, GearSix, Lightning, Lock, LockOpen, MapPinLine, Medal, PencilLine, Ticket, Trash, User, Wallet, X } from "phosphor-react";

import './styles.css'

export const ContainerLeft = () => {
    return (
        <main className='container_left'>
            <section className="top">
                <h1>Peladas</h1>
                <p>Grupo de peladas que você participa.</p>
            </section>
            <section className="bottom">
                <p>Suas peladas marcadas <span>Total 3</span></p>
                <div className="container_pelada">
                    <div className="photo_pelada"></div>
                    <div className="info_pelada">
                        <h2>
                            Campo Hangar
                            <span>
                                <PencilLine size={20} color="#dde3f0" weight="fill" />
                                <Trash size={20} color="#dde3f0" weight="fill" />
                                <Lock size={20} color="#dde3f0" weight="fill" />
                                <LockOpen size={20} color="#dde3f0" weight="fill" />
                            </span>
                        </h2>

                        <p>Bairro Linha Vermelha</p>

                        <p>
                            <span>
                                <CalendarBlank size={20} color="#E51C44" weight="fill" />
                                Sex 18/06 às 19:30h
                            </span>
                            <span>15 <User size={20} color="#E51C44" weight="fill" /></span>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}