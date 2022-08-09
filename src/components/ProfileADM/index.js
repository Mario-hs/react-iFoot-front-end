import { useState } from "react";

import { Link } from "react-router-dom";

import { NewHorario } from "../../forms/NewHorario";
import { NewPosicao } from "../../forms/NewPosicao";

import { Clock, EyeClosed, PencilLine, Trash } from "phosphor-react";

import icon_posicao from '../../assets/posicao.png'
import './profileADM.css'
import { ViewADM } from "../ViewADM";

export const ProfileADM = () => {
    const [modal, setModal] = useState({ status: false, type: null, method: null })

    const handleCallback = () => {
        setModal({ status: false, type: null, method: null })
    }

    const handleAdd = (event, type) => {
        event.preventDefault();
        setModal({ status: true, type: type, method: 'CREATE' })
    }

    const handleView = (event, type) => {
        event.preventDefault();
        setModal({ status: true, type: type, method: 'VIEW' })
    }

    // const handleAlter = (event, type) => {
    //     event.preventDefault();
    //     if (type === 'POSICAO') {
    //         setModal({ status: true, type: type, method: 'UPDATE' })
    //     } else {
    //         setModal({ status: true, type: type, method: 'UPDATE' })
    //     }
    // }



    return (
        <>
            <section className='cc_data_user adm'>
                <div className="container_link">
                    <Link to='#newPosicao' onClick={(e) => { handleAdd(e, 'POSICAO') }}>
                        <img src={icon_posicao} alt="icone de posição" />
                        <p>Cadastrar Posição</p>
                    </Link>
                    <Link to='#viewHorario' onClick={(e) => { handleView(e, 'POSICAO') }}>
                        <EyeClosed size={25} color="#dde3f0" weight="fill" />
                        <p>Ver Posições</p>
                    </Link>

                </div>
                <div className="container_link">
                    <Link to='#newHorario' onClick={(e) => { handleAdd(e, 'HORARIO') }}>
                        <Clock size={25} color="#dde3f0" weight="fill" />
                        <p>Cadastrar Horário</p>
                    </Link>
                    <Link to='#viewHorario' onClick={(e) => { handleView(e, 'HORARIO') }}>
                        <EyeClosed size={25} color="#dde3f0" weight="fill" />
                        <p>Ver Horários</p>
                    </Link>
                </div>
            </section>

            {modal.status === true && modal.type === 'HORARIO' && modal.method === 'CREATE'
                ? <NewHorario parentCallback={handleCallback} type={'NEW'} data={null} />
                : (<></>)
            }
            {modal.status === true && modal.type === 'POSICAO' && modal.method === 'CREATE'
                ? <NewPosicao parentCallback={handleCallback} type={'NEW'} data={null} />
                : (<></>)
            }
            {modal.status === true && modal.type === 'HORARIO' && modal.method === 'VIEW'
                ? <ViewADM parentCallback={handleCallback} type={modal.type} data={null} />
                : (<></>)
            }
            {modal.status === true && modal.type === 'POSICAO' && modal.method === 'VIEW'
                ? <ViewADM parentCallback={handleCallback} type={modal.type} data={null} />
                : (<></>)
            }
        </>
    )
}