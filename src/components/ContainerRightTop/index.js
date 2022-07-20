import { Button } from '../Button';
import { Star, Wallet } from "phosphor-react";

import './styles.css'

export const ContainerRightTop = () => {
    return (
        <section className='container_right_top'>
            <div className="pelada_top">
                <div className="filtro">
                    <h1>Pelada da Firma</h1>
                    <p>Pelada entre amigos que trabalham no google e alguns agregados.</p>
                    <p><span>Local:</span> Campo Hangar</p>
                    <p><span>Horário:</span> Sex 18/06 às 19:30h</p>
                </div>
            </div>
            <div className="pelada_bottom">
                <div className="title_list">
                    <h2>Lista Jogadores</h2>
                    <span>Total 15</span>
                </div>

                <div className="container_list">
                    <div className="jogador">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="photo_user"></div>
                            <div>
                                <h3>Mario Henrique</h3>
                                <div className="container_status">
                                    <div className="status"></div>
                                    <p>Confirmado</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: "75px", justifyContent: "space-between" }}>
                            <Wallet size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                            <span className="score">
                                <Star size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                                <p>7,8</p>
                            </span>
                        </div>
                    </div>

                    <div className="jogador">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="photo_user"></div>
                            <div>
                                <h3>Jorge Souza</h3>
                                <div className="container_status">
                                    <div className="status not"></div>
                                    <p>À confirmado</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: "75px", justifyContent: "space-between" }}>
                            <Wallet size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                            <span className="score">
                                <Star size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                                <p>8,2</p>
                            </span>
                        </div>
                    </div>

                    <div className="jogador">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="photo_user"></div>
                            <div>
                                <h3>Jorge Souza</h3>
                                <div className="container_status">
                                    <div className="status not"></div>
                                    <p>À confirmado</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: "75px", justifyContent: "space-between" }}>
                            <Wallet size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                            <span className="score">
                                <Star size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                                <p>8,2</p>
                            </span>
                        </div>
                    </div>

                    <div className="jogador">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="photo_user"></div>
                            <div>
                                <h3>Jorge Souza</h3>
                                <div className="container_status">
                                    <div className="status not"></div>
                                    <p>À confirmado</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: "75px", justifyContent: "space-between" }}>
                            <Wallet size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                            <span className="score">
                                <Star size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                                <p>8,2</p>
                            </span>
                        </div>
                    </div>

                    <div className="jogador">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="photo_user"></div>
                            <div>
                                <h3>Jorge Souza</h3>
                                <div className="container_status">
                                    <div className="status not"></div>
                                    <p>À confirmado</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: "75px", justifyContent: "space-between" }}>
                            <Wallet size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                            <span className="score">
                                <Star size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                                <p>8,2</p>
                            </span>
                        </div>
                    </div>

                    <div className="jogador">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="photo_user"></div>
                            <div>
                                <h3>Jorge Souza</h3>
                                <div className="container_status">
                                    <div className="status not"></div>
                                    <p>À confirmado</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: "75px", justifyContent: "space-between" }}>
                            <Wallet size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                            <span className="score">
                                <Star size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                                <p>8,2</p>
                            </span>
                        </div>
                    </div>

                    <div className="jogador">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="photo_user"></div>
                            <div>
                                <h3>Jorge Souza</h3>
                                <div className="container_status">
                                    <div className="status not"></div>
                                    <p>À confirmado</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: "75px", justifyContent: "space-between" }}>
                            <Wallet size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                            <span className="score">
                                <Star size={20} color="#dde3f0" weight="fill" style={{ cursor: "pointer" }} />
                                <p>8,2</p>
                            </span>
                        </div>
                    </div>
                    <div className='buttons_confirmes'>
                        <Button tipo={1} msg="Confirmar presença" />
                        <Button tipo={0} msg="Não confirmar" />
                    </div>
                </div>

            </div>

        </section>
    )
}