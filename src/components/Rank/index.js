import { useEffect, useState } from "react"

import { FireSimple, X } from "phosphor-react"

import icon from '../../assets/icon/apito.svg';
import { Link } from "react-router-dom";

export const Rank = ({ prop: { status, rank_gol, rank_ass }, parentCallback }) => {
    const [showModal, setShowModal] = useState(false)
    const [typeModal, setTypeModal] = useState('gols')

    const CloseModal = (event) => {
        parentCallback();
        event.preventDefault();
    }

    useEffect(() => {
        setShowModal(status)
    }, [])

    return (
        <section id="ranking" className={showModal === true ? "active ranking" : "ranking"}>
            <div className="modal">
                <Link to='' title="Close" className="Close" onClick={(e) => { { CloseModal(e) } }}>
                    <X size={20} color="#dde3f0" weight="fill" />
                </Link>
                <div className="ifoot">
                    <img src={icon} alt="iFoot" />
                    <h1>iFoot</h1>
                </div>
                <select name="" onChange={(event) => { setTypeModal(event.target.value) }} >
                    <option value="gols">gols</option>
                    <option value="assistencias">assistencias</option>
                </select>
                <ul className='container_rank'>
                    {typeModal === 'gols'
                        ? rank_gol.map((jogador) => {
                            return (<li className="relatorio" key={jogador[3]} >
                                <FireSimple size={20} color="#dde3f0" weight="fill" />
                                <span htmlFor="jogador">{jogador[2]} - {jogador[1]} </span>
                            </li>)
                        })
                        : rank_ass.map((jogador) => {
                            return (<li className="relatorio" key={jogador[3]} >
                                <FireSimple size={20} color="#dde3f0" weight="fill" />
                                <span htmlFor="jogador">{jogador[2]} - {jogador[1]} </span>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </section>
    )
}