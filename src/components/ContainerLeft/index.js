import { CalendarBlank, Lock, LockOpen, PencilLine, Trash, User } from "phosphor-react";

import './styles.css'

export const ContainerLeft = () => {
    return (
        <>
            <section className="top">
                <h1>Peladas</h1>
                <p>Grupo de peladas que você participa.</p>
            </section>
            <section className="bottom">
                <p>Suas peladas marcadas <span>Total 3</span></p>
                <div className="container_list_peladas">
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

                            <div className="info_row">
                                <div>
                                    <CalendarBlank size={20} color="#E51C44" weight="fill" />
                                    <span>Sex 18/06 às 19:30h</span>
                                </div>
                                <div><span>15 </span><User size={20} color="#E51C44" weight="fill" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}