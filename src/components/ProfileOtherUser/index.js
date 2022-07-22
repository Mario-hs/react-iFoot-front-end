import { User, At, SoccerBall, Binoculars } from 'phosphor-react'
import posicao from '../../assets/posicao.png'
import { Button } from '../Button'
import './styles.css'

export const ProfileOtherUser = () => {
    return (
        <section className='cc_data_other_user'>
            <div className='cc_top'>
                <div className='cc_data_other_user_photo'></div>
                <div className='cc_info_other_user'>
                    <Button tipo={2} msg={"Transferir Dinheiro"} />
                    <p style={{ marginBottom: "10px" }}>
                        <User size={25} color="#dde3f0" weight="fill" />
                        <span>Nome: Antonielly</span> - <span>24 anos</span>
                    </p>
                    <p>
                        {/* <EnvelopeSimple size={25} color="#dde3f0" /> */}
                        <At size={25} color="#dde3f0" weight="bold" />
                        <span>antonielly@hotmail.com</span>
                    </p>
                </div>
            </div>
            <div className='cc_bottom'>
                <div className='cc_line_top'>
                    <p>
                        <span className='cc_score'>
                            {"8,1"}
                        </span>
                        <span>Score</span>
                    </p>
                    <p>
                        <img src={posicao} alt="icone posição" />
                        <span>Posição: {"Volante"}</span>
                    </p>
                </div>
                <div className='cc_line_bottom'>
                    <p>
                        <SoccerBall size={30} color="#dde3f0" weight="fill" />
                        <span>Gols: {"41"}</span>
                    </p>
                    <p>
                        <Binoculars size={30} color="#dde3f0" weight="fill" />
                        <span>Assistências: {"18"}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}