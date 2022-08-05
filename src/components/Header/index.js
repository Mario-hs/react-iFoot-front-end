import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { CurrencyCircleDollar, SoccerBall, Binoculars } from "phosphor-react";

import icon from '../../assets/icon/apito.svg'
import icon_vermelho from '../../assets/cartao_vermelho.png'
import icon_amarelo from '../../assets/cartao_amarelo.png'
import user from '../../assets/user.png'

import auth from "../../context/auth";
import api from "../../routes/api";

import './header.component.css'

export const Header = ({ data, typeUser }) => {
    const [score, setScore] = useState([])
    const [amarelo, setAmarelo] = useState([])
    const [vermelho, setVermelho] = useState([])

    useEffect(() => {
        if (data.id !== undefined) {
            api.axios.get(`/jogadores/${data.id}/score`).then((e) => {
                setScore(e.data)
            })
            api.axios.get(`/jogadores/${data.id}/amarelo`).then((e) => {
                setAmarelo(e.data)
            })
        }
    }, [data])

    return (
        <>
            {typeUser === 'espaco'
                ?
                <div className="container-header">
                    <nav>
                        <div className='info'>
                            <img src={icon} alt="icone ifoot" />
                            <p><span>iFoot</span></p>
                        </div>
                        <ul className='dataset espaco'>
                            <li title={'Nome do campo'} className='nome_espaco'>
                                Campo Hangar
                            </li>
                            <li title={`R$${data.carteira},00 reais na sua carteira`}>
                                <CurrencyCircleDollar size={30} color="#dde3f0" weight="fill" />
                            </li>
                            <li className="submenu_container">
                                <Link to='../profile_espaco'>
                                    <img className="icon_user" src={user} alt="foto do usuário" title="Mario" />
                                </Link>
                                <ul className="submenu">
                                    <li>
                                        <Link to='../profile_espaco'>
                                            Perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='../home' onClick={() => { auth.logout() }}>
                                            Sair
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                :
                <div className="container-header">
                    <nav>
                        <div className='info'>
                            <img src={icon} alt="icone ifoot" />
                            <p><span>iFoot</span> | Todo dia é dia de bater uma bolinha.</p>
                        </div>
                        <ul className='dataset'>
                            <li>
                                {amarelo === 0 && vermelho === 0
                                    ? (<></>)
                                    : <img src={amarelo === 1 ? icon_amarelo : icon_vermelho}
                                        alt="icone de cartões"
                                        title={amarelo === 1 ? 'Você está amarelado' : 'Você tomou o segundo amarelo'} />}
                            </li>
                            <li title={`${data.carteira} Dinheiro`}>
                                <CurrencyCircleDollar size={30} color="#dde3f0" weight="fill" />
                            </li>
                            <li title="Score">
                                <p>{data.id !== undefined
                                    ? score
                                    : 0}</p>
                            </li>
                            <li title={`${data.gol} Gols`}>
                                <SoccerBall size={32} color="#dde3f0" weight="fill" />
                            </li>
                            <li style={{ display: "flex" }} title={`${data.assistencia} Assistências`}>
                                <Binoculars size={32} color="#dde3f0" weight="fill" />
                            </li>
                            <li className="submenu_container">
                                <Link to='../profile_user'>
                                    <img className="icon_user" src={user} alt="foto do usuário" title="Mario" />
                                </Link>
                                <ul className="submenu">
                                    <li>
                                        <Link to='../profile_user'>
                                            Perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='../home' onClick={() => { auth.logout() }}>
                                            Sair
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </>
    )
}