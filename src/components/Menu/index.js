import './styles.css'
import icon_arenas from '../../assets/arenas.png'
import icon_peladas from '../../assets/peladas.png'
import icon_explorar from '../../assets/explorar.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Menu = () => {
    const [active, setActive] = useState(1);

    const handleButtonActive = (e) => {
        setActive(e)
    }

    return (
        <nav className="container-nav">
            <Link to='/peladas' onClick={(e) => {
                handleButtonActive(1)
            }} className={`${active === 1 ? 'nav top active' : 'nav top'}`} >
                <img src={icon_peladas} alt="icone de peladas" />
                <p>Peladas</p>
            </Link>
            <Link to='/explorar' onClick={(e) => {
                handleButtonActive(2)
            }} className={`${active === 2 ? 'nav middle active' : 'nav middle'}`} >
                <img src={icon_explorar} alt="icone de explorar" />
                <p>Explorar</p>
            </Link>
            <Link to='/arenas' onClick={(e) => {
                handleButtonActive(3)
            }} className={`${active === 3 ? 'nav bottom active' : 'nav bottom'}`}>
                <img src={icon_arenas} alt="icone de arenas" />
                <p>Arenas</p>
            </Link>
        </nav>
    )
}