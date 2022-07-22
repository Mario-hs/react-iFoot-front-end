import './styles.css'
import icon_arenas from '../../assets/arenas.png'
import icon_peladas from '../../assets/peladas.png'
import icon_explorar from '../../assets/explorar.png'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className="container-nav">
            <Link to='/peladas' className="nav top active" >
                <img src={icon_peladas} alt="icone de peladas" />
                <p>Peladas</p>
            </Link>
            <Link to='/peladas' replace={true} className="nav middle">
                <img src={icon_explorar} alt="icone de explorar" />
                <p>Explorar</p>
            </Link>
            <Link to='/peladas' className="nav bottom">
                <img src={icon_arenas} alt="icone de arenas" />
                <p>Arenas</p>
            </Link>
        </nav>
    )
}