import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { NewCampo } from '../../forms/NewCampo'

import icon_arenas from '../../assets/arenas.png'
import icon_peladas from '../../assets/peladas.png'
import icon_explorar from '../../assets/explorar.png'
import icon_home from '../../assets/home.png'
import icon_criar from '../../assets/criar_horario.png'

import './menu.component.css'

export const Menu = ({ type, open, close }) => {
    const [active, setActive] = useState(null)
    const [modal, setModal] = useState(false)


    const handleButtonActive = (e) => {
        setActive(e)
    }

    const handleCallback = () => {
        setModal({ status: false, modal: null })
    }

    useEffect(() => {
        if (type === 'espaco') {
            setActive(4)
        } else if (type === 'jogador') {
            setActive(1)
        } else {
            setActive(null)
        }
    }, [type])

    return (
        <nav className="container-nav">
            {type === 'espaco'
                ? <>
                    <Link to='/espaco' onClick={(e) => {
                        handleButtonActive(4)
                    }} className={`${active === 4 ? 'nav top active' : 'nav top'}`} >
                        <img src={icon_home} alt="Home" />
                        <p>Home</p>
                    </Link>
                    <Link to='#novo' onClick={(e) => {
                        handleButtonActive(5)
                        setModal(true)
                    }} className={`${active === 5 ? 'nav bottom active' : 'nav bottom'}`}>
                        <img src={icon_criar} alt="Mais campo" />
                        <p>Criar</p>
                    </Link>

                    {modal === true
                        ? <NewCampo parentCallback={handleCallback} />
                        : (<></>)
                    }
                </>
                : <></>
            }

            {type === 'jogador'
                ? <>
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
                </>
                : <></>
            }
        </nav>
    )
}