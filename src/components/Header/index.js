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
                <div className='dataset'>
                    <img src={cartoes} alt="icone de cartões" />
                    <CurrencyCircleDollar size={30} color="#E5E5E5" />
                    <SoccerBall size={30} color="#E5E5E5" style={{ marginLeft: 15 + 'px' }} />
                    <img src={assistencias} alt="icone de assistências" />
                    <img src={user} alt="foto do usuário" />
                </div>
            </nav>
        </div>
    )
}