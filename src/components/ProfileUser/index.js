import { SoccerBall, Binoculars } from 'phosphor-react'
import posicao from '../../assets/posicao.png'
import { Button } from '../Button'
import './profileUser.css'

export const ProfileUser = () => {
    return (
        <section className='cc_data_user'>
            <div className='cc_left'>
                <div className='cc_data_user_photo'></div>
                <h1>Mario Henrique</h1>
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
                <p>
                    <SoccerBall size={30} color="#dde3f0" weight="fill" />
                    <span>Gols: {"41"}</span>
                </p>
                <p>
                    <Binoculars size={30} color="#dde3f0" weight="fill" />
                    <span>Assistências: {"18"}</span>
                </p>
                <Button tipo={2} msg={"Excluir conta"} />
            </div>
            <form className='cc_right'>
                <h1>Dados Pessoais</h1>
                <label htmlFor="nome">
                    <span>Nome:</span>
                    <input type="text" name="nome" defaultValue={"Mario Henrique"} />
                </label>
                <label htmlFor="email">
                    <span>Email:</span>
                    <input type="email" name="email" defaultValue={"mario-hp41@hotmail.com"} />
                </label>
                <label htmlFor="cpf">
                    <span>CPF:</span>
                    <input type="text" name="cpf" defaultValue={"111.111.111-11"} />
                </label>
                <div className='idade_posicao'>
                    <label htmlFor="idade">
                        <span>Idade:</span>
                        <input type="text" name="idade" defaultValue={"24"} className='idade' />
                    </label>
                    <label htmlFor="Posicao">
                        <span>Posição:</span>
                        <select name="Posicao">
                            <option value="Zagueiro">Zagueiro</option>
                        </select>
                    </label>
                </div>
                <label htmlFor="senha">
                    <span>Senha:</span>
                    <input type="password" name="senha" defaultValue={"1234"} />
                </label>
                <Button tipo={3} msg={"Salvar alteração"} />
            </form>
        </section>
    )
}