import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

import { X } from 'phosphor-react';

import icon from '../../assets/icon/apito.svg';
import './login.forms.css'
import { useState } from 'react';
import api from '../../routes/api';
import history from '../../routes/history';
import Auth from '../../context/auth';
import auth from '../../context/auth';

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        senha: ''
    })

    const bindStateInput = (prop, value) => {
        user[prop] = value
        setUser({ ...user })
        console.log(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(event)
        try {
            let login_jogador = await api.axios.get(`/jogadores/${user.email}/${user.senha}`)
            let login_espaco = await api.axios.get(`/espacos/login/${user.email}/${user.senha}`)

            if (login_jogador.data.length !== 0 || login_espaco.data.length !== 0) {

                if (login_jogador.data.length !== 0 && login_jogador.status) {

                    alert("[COMPLETE - Login com sucesso]")
                    auth.login(login_jogador.data, 'jogador')
                    history.push("/peladas");
                    window.location.reload();

                }

                if (login_espaco.data.length !== 0 && login_espaco.status) {
                    alert("[COMPLETE - Login com sucesso]")
                    auth.login(login_espaco.data, 'espaco')
                    history.push("/espaco");
                    window.location.reload();

                }

            } else {

                alert("[ERROR - Usuário ou senha invalido]")
                console.error(login_jogador)

            }

        } catch (error) {
            alert(error.response.data.message)
            console.error(error)
        }
    }
    return (
        <form id="singIn" className="position" onSubmit={(e) => { handleSubmit(e) }} method="POST">
            <div className="modal">
                <Link to='/home' title="Close" className="Close">
                    <X size={20} color="#dde3f0" weight="fill" />
                </Link>
                <div className="ifoot">
                    <img src={icon} alt="iFoot" />
                    <h1>iFoot</h1>
                </div>
                <div className="label_input">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Digite o nome do seu usuário"
                        onChange={(event) => {
                            bindStateInput('email', event.target.value)
                        }}

                    />
                </div>
                <div className="label_input">
                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(event) => {
                            bindStateInput('senha', event.target.value)
                        }}
                    />
                </div>
                <div className="button">
                    <Button type={3} msg={"Entrar"} />
                    <Link to='/home' title="Close" className="Close">
                        <Button type={2} msg={"Sair"} />
                    </Link>
                </div>
            </div>
        </form>
    )
}