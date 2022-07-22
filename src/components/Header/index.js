import { CurrencyCircleDollar, SoccerBall, Binoculars } from "phosphor-react";

import icon from '../../assets/icon/apito.svg'
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
                    <li title={`${56} Dinheiro`}>
                        <CurrencyCircleDollar size={30} color="#dde3f0" weight="fill" />
                    </li>
                    <li title="Score">
                        <p>7,8</p>
                    </li>
                    <li title="Gols">
                        <SoccerBall size={32} color="#dde3f0" weight="fill" />
                    </li>
                    <li style={{ display: "flex" }} title="Assistências">
                        {/* <img src={assistencias} alt="icone de assistências" title="Assistências" /> */}
                        <Binoculars size={32} color="#dde3f0" weight="fill" />
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