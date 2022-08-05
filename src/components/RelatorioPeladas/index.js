import { useEffect, useState } from "react"

import { Binoculars, Lightning, SoccerBall, Warning, X } from "phosphor-react"

import icon from '../../assets/icon/apito.svg';
import { Link } from "react-router-dom";
import auth from "../../context/auth";
import api from "../../routes/api";

export const RelatorioPelada = ({ prop: { status }, parentCallback }) => {
    const [dataUser, setDataUser] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [databyMes, setDataByMes] = useState([])

    const CloseModal = (event) => {
        parentCallback();
        event.preventDefault();
    }

    const GetByMonth = async (mes) => {
        let res = await (await api.axios.get(`/jogadores/${dataUser.id}/dados/${mes}`)).data
        setDataByMes(res)
    }

    useEffect(() => {
        setDataUser(auth.getUser())
        setShowModal(status)
    }, [])

    return (
        <section id="peladas" className={showModal === true ? "active peladas" : "peladas"}>
            <ul className="modal">
                <Link to='' title="Close" className="Close" onClick={(e) => { { CloseModal(e) } }}>
                    <X size={20} color="#dde3f0" weight="fill" />
                </Link>
                <div className="ifoot">
                    <img src={icon} alt="iFoot" />
                    <h1>iFoot</h1>
                </div>
                <select name="" onChange={(event) => {
                    if (dataUser.id !== undefined) {
                        GetByMonth(event.target.value)
                    }
                }} >
                    <option value='1'>Janeiro</option>
                    <option value='2'>Fevereiro</option>
                    <option value='3'>Março</option>
                    <option value='4'>Abril</option>
                    <option value='5'>Maio</option>
                    <option value='6'>Junho</option>
                    <option value='7'>Julho</option>
                    <option value='8'>Agosto</option>
                    <option value='9'>Setembro</option>
                    <option value='10'>Outubro</option>
                    <option value='11'>Novembro</option>
                    <option value='12'>Dezembro</option>
                </select>
                {databyMes.map((e) => {
                    return (
                        <>
                            <li key="1">
                                <Lightning size={25} color="#dde3f0" weight="fill" />
                                <span>Partidas: {e[0] === null ? 0 : e[0]}</span>
                            </li>
                            <li key="2">
                                <SoccerBall size={25} color="#dde3f0" weight="fill" />
                                <span>Gols: {e[1] === null ? 0 : e[1]}</span>
                            </li>
                            <li key="3">
                                <Binoculars size={25} color="#dde3f0" weight="fill" />
                                <span>Assistências: {e[2] === null ? 0 : e[2]}</span>
                            </li>
                            <li key="4">
                                <Warning size={25} color="#dde3f0" weight="fill" />
                                <span>Advertências: {e[3] === null ? 0 : e[3]}</span>
                            </li>
                        </>
                    )
                })}

            </ul>
        </section>
    )
}