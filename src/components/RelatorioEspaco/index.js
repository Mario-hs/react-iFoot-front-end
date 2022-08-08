import { useEffect, useState } from "react"

import { X } from "phosphor-react"

import icon from '../../assets/icon/apito.svg';
import { Link } from "react-router-dom";
import api from "../../routes/api";
import icon_campo from '../../assets/icon_campo.svg'
import './relatorioEspaco.css'

export const RelatorioEspaco = ({ prop: { status }, parentCallback, type, idEspaco }) => {
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(status)
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(2021)
    const [typeCampo, setTypeCampo] = useState({ id: 1, nome: 'Campo' })

    const CloseModal = (event) => {
        parentCallback();
        event.preventDefault();
    }

    // useEffect(() => {
    //     setShowModal(status)
    //     console.log(type)
    // }, [])

    const GetByTypeFieldMoney = async (value) => {

        let res = await (await api.axios.get(`/espacos/${idEspaco}/lucro/${value}/${year}`)).data

        if (value === 1) {
            setTypeCampo({ id: value, nome: 'Campo' })
        } else if (value === 2) {
            setTypeCampo({ id: value, nome: 'Futsal' })
        } else if (value === 3) {
            setTypeCampo({ id: value, nome: 'Society' })
        }

        setData(res)
    }

    const GetByYearMoney = async (value) => {

        let res = await (await api.axios.get(`/espacos/${idEspaco}/lucro/${typeCampo.id}/${value}`)).data

        setYear(value)
        setData(res)
    }

    const GetByMonth = async (value) => {
        let res = await (await api.axios.get(`/espacos/${year}/${value}`)).data
        console.log(res)
        setMonth(value)
        setData(res)
    }

    const GetByYear = async (value) => {
        let res = await (await api.axios.get(`/espacos/${value}/${month}`)).data
        setYear(value)
        setData(res)
    }

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
                {type === 'LUCRO'
                    ? <h2 className="title_filter">Valor:</h2>
                    : <h2 className="title_filter">Peladas ocorridas:</h2>
                }
                <div className="filter">
                    {type === 'LUCRO'
                        ?
                        <>
                            <select name="" onChange={(event) => {
                                GetByTypeFieldMoney(event.target.value)
                            }} >
                                <option value='1'>Campo</option>
                                <option value='2'>Futsal</option>
                                <option value='3'>Society</option>
                            </select>
                            <select name="" onChange={(event) => {
                                GetByYearMoney(event.target.value)
                            }} >
                                <option value='2021'>2021</option>
                                <option value='2022'>2022</option>
                            </select>

                        </>

                        :

                        <>
                            <select name="" onChange={(event) => {
                                GetByMonth(event.target.value)
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
                            <select name="" onChange={(event) => {
                                GetByYear(event.target.value)
                            }} >
                                <option value='2021'>2021</option>
                                <option value='2022'>2022</option>
                            </select>

                        </>
                    }

                </div>
                {type === 'LUCRO'
                    ? data.map((e) => {
                        return (
                            <>
                                <li key="4">
                                    <img src={icon_campo} alt="icone" />
                                    <span>Recebido: R${e === null ? 0 : e},00</span>
                                </li>
                            </>
                        )
                    })
                    :
                    data.map((e) => {
                        return (
                            <>
                                <li key="5">
                                    <img src={icon_campo} alt="icone" />
                                    <span>Futsal: {e[0] === null ? 0 : e[0]}</span>
                                </li>
                                <li key="6">
                                    <img src={icon_campo} alt="icone" />
                                    <span>Campo: {e[1] === null ? 0 : e[1]}</span>
                                </li>
                                <li key="7">
                                    <img src={icon_campo} alt="icone" />
                                    <span>Society: {e[2] === null ? 0 : e[2]}</span>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </section>
    )
}