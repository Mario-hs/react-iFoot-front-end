import { CalendarBlank, Ticket } from "phosphor-react";

import icon from '../../assets/avaliacao.png';
import './styles.css'

export const ContainerRightBottom = () => {
    return (
        <>
            <div className='title'>
                <h1>
                    <img src={icon} alt="icone de avalicao" />
                    Avalie seus amigos!
                </h1>
                <p>É simples e rápido. Selecione um jogador e avalie ele com a nota correspondente com o futebol apresentado por ele.</p>
            </div>
            <span>Total 5</span>
            <div className="container_pelada">
                <div className='pelada'>
                    <Ticket size={35} color="#E51C44" weight="fill" style={{ marginRight: '10px', cursor: "pointer" }} />

                    <h2>Campo Hangar</h2>
                    <CalendarBlank size={20} color="#E51C44" weight="fill"
                        style={{ marginLeft: '10px', marginRight: '5px' }} />
                    <p>18-03</p>
                </div>
            </div>
        </>
    )
}