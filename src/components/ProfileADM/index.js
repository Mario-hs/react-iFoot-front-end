import { Link } from "react-router-dom";

import { Clock, PencilLine, Trash } from "phosphor-react";

import icon_posicao from '../../assets/posicao.png'
import './profileADM.css'

export const ProfileADM = () => {
    return (
        <section className='cc_data_user adm'>
            <div className="container_link">
                <Link to=''>
                    <img src={icon_posicao} alt="icone de posição" />
                    <p>Cadastrar Posição</p>
                </Link>
                <Link to=''>
                    <PencilLine size={25} color="#dde3f0" weight="fill" />
                    <p>Editar Posição</p>
                </Link>
                <Link to=''>
                    <Trash size={25} color="#dde3f0" weight="fill" />
                    <p>Excluir Posição</p>
                </Link>
            </div>
            <div className="container_link">
                <Link to=''>
                    <Clock size={25} color="#dde3f0" weight="fill" />
                    <p>Cadastrar Horário</p>
                </Link>
                <Link to=''>
                    <PencilLine size={25} color="#dde3f0" weight="fill" />
                    <p>Editar Horário</p>
                </Link>
                <Link to=''>
                    <Trash size={25} color="#dde3f0" weight="fill" />
                    <p>Excluir Horário</p>
                </Link>
            </div>
        </section>
    )
}