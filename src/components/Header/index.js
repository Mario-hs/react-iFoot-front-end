import { CurrencyCircleDollar, SoccerBall } from "phosphor-react";

import icon from '../../assets/icon/apito.svg'
import assistencias from '../../assets/assistencias.png'
import cartoes from '../../assets/cartoes.png'
import user from '../../assets/user.png'

import './styles.css'

export const Header = () => {
    return (
        <div className="container-header">
            <nav>
                <div className='info'>
                    <img src={icon} alt="icone ifoot" />
                    <p><span>iFoot</span> | Todo dia é dia de bater uma bolinha.</p>
                </div>
                <ul className='dataset'>
                    <li>
                        <img src={cartoes} alt="icone de cartões" title="Cartão vermelho" />
                    </li>
                    <li>
                        <CurrencyCircleDollar size={30} color="#E5E5E5" title="Dinheiro" />
                    </li>
                    <li>
                        <SoccerBall size={30} color="#E5E5E5" title="Gols" />
                    </li>
                    <li style={{ display: "flex" }}>
                        <img src={assistencias} alt="icone de assistências" title="Assistências" />
                    </li>
                    <li className="submenu_container">
                        <img className="icon_user" src={user} alt="foto do usuário" title="Mario" />
                        <ul className="submenu">
                            <li><span>Perfil</span></li>
                            <li><span>Sair</span></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}