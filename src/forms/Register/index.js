import { useState } from 'react'
// import '../../global/styles.css'
import { X } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import icon from '../../assets/icon/apito.svg';
import './register.forms.css'
import axios from 'axios';

export const Register = () => {
    const [formRegister, setFormRegister] = useState({ tipo_cadastro: 'campo' })
    const [registerJogador, setRegisterJogador] = useState({
        id: null,
        nome: "",
        email: "",
        cpf: "",
        data_nasc: "",
        posicao: "",
        senha: "",
    })
    const [registerCampo, setRegisterCampo] = useState({
        id: null,
        nomeEspaco: "",
        emailEspaco: "",
        cnpj: "",
        bairro: "",
        senhaEspaco: "",
    })
    const handleOnChange = (value) => {
        setFormRegister({ tipo_cadastro: value })
    }

    const bindStateInput = (prop, value) => {

        if (formRegister.tipo_cadastro === 'jogador') {
            registerJogador[prop] = value;
            setRegisterJogador({ ...registerJogador })
            console.log(registerJogador)
        } else {
            registerCampo[prop] = value;
            setRegisterCampo({ ...registerCampo })
            console.log(registerCampo)
        }
    }

    const trySubmit = async () => {
    }

    const handleSubmit = async (event) => {
        alert(JSON.stringify(registerCampo))
        // alert(req)
        if (formRegister.tipo_cadastro === 'campo') {
            alert('entrei')
            let res = await axios.post({
                'url': 'http://localhost:8080/espacos',
                '': registerCampo
            })
            alert(res.status)
            // if (res.status) {
            //     // history.push("/home");
            //     // window.location.reload();
            // } else {
            //     alert("[ERROR - Usuário ou senha invalido]")
            // }
        }
    }

    return (
        <section id="signUp" className="signUp">
            <div className="modal">
                <Link to='/home' title="Close" className="Close">
                    <X size={20} color="#dde3f0" weight="fill" />
                </Link>
                <div className="ifoot">
                    <img src={icon} alt="iFoot" />
                    <h1>iFoot</h1>
                </div>
                <p>Você é?</p>
                <div className="wrapper">
                    <label htmlFor="field" className="group-option"><span>Campo</span>
                        <input type="radio" className="option" name="tipo_cadastro" id='field' value="campo"
                            checked={formRegister.tipo_cadastro === "campo"}
                            onChange={(e) => { handleOnChange('campo') }} />
                    </label>

                    <label className="group-option" htmlFor="player"><span>Jogador</span>
                        <input type="radio" className="option" name="tipo_cadastro" id="player" value="jogador"
                            checked={formRegister.tipo_cadastro === "jogador"}
                            onChange={(e) => { handleOnChange('jogador') }} />
                    </label>
                </div>
                {formRegister.tipo_cadastro === 'jogador'
                    ? (
                        <form className='form' onSubmit={(e) => { handleSubmit(e) }}>
                            <h1>Dados Pessoais</h1>
                            <label htmlFor="nome">
                                <span>Nome:</span>
                                <input type="text" name="nome" placeholder='usuário' onChange={(event) => {
                                    bindStateInput("nome", event.target.value);
                                }} />
                            </label>
                            <label htmlFor="email">
                                <span>Email:</span>
                                <input type="email" name="email" placeholder='exemplo@gmail.com' onChange={(event) => {
                                    bindStateInput("email", event.target.value);
                                }} />
                            </label>
                            <label htmlFor="cpf">
                                <span>CPF:</span>
                                <input type="text" name="cpf" placeholder='111.111.111-11' onChange={(event) => {
                                    bindStateInput("cpf", event.target.value);
                                }} />
                            </label>
                            <div className='idade_posicao'>
                                <label htmlFor="idade">
                                    <span>Idade:</span>
                                    {/* <input type="text" name="idade" placeholder='24' className='idade' /> */}
                                    <input type="date" name="idade" id="idade" className='idade' onChange={(event) => {
                                        bindStateInput("data_nasc", event.target.value);
                                    }} />
                                </label>
                                <label htmlFor="posicao" className='posicao_jogador'>
                                    <span>Posição:</span>
                                    <select name="posicao">
                                        <option value="Zagueiro">Zagueiro</option>
                                    </select>
                                </label>
                            </div>
                            <label htmlFor="senha">
                                <span>Senha:</span>
                                <input type="password" name="senha" placeholder='0000000' onChange={(event) => {
                                    bindStateInput("senha", event.target.value);
                                }} />
                            </label>
                            <Button type={3} register={registerJogador} request={'registroJogador'} msg={"Confirmar cadastro"} />
                        </form>
                    )
                    : (
                        <form className='form' onSubmit={(e) => { handleSubmit(e) }}>
                            <h1>Dados Pessoais</h1>
                            <label htmlFor="nome">
                                <span>Nome:</span>
                                <input type="text" name="nome" placeholder='usuário' onChange={(event) => {
                                    bindStateInput("nomeEspaco", event.target.value);
                                }} />
                            </label>
                            <label htmlFor="email">
                                <span>Email:</span>
                                <input type="email" name="email" placeholder='exemplo@gmail.com' onChange={(event) => {
                                    bindStateInput("emailEspaco", event.target.value);
                                }} />
                            </label>
                            <label htmlFor="cnpj">
                                <span>CNPJ:</span>
                                <input type="text" name="cnpj" placeholder='111.111.111-11' onChange={(event) => {
                                    bindStateInput("cnpj", event.target.value);
                                }} />
                            </label>
                            <label htmlFor="bairro">
                                <span>CNPJ:</span>
                                <input type="text" name="bairro" placeholder='Exemplo' onChange={(event) => {
                                    bindStateInput("bairro", event.target.value);
                                }} />
                            </label>
                            <label htmlFor="senha">
                                <span>Senha:</span>
                                <input type="password" name="senha" placeholder='0000000' onChange={(event) => {
                                    bindStateInput("senhaEspaco", event.target.value);
                                }} />
                            </label>
                            <Button type={3} register={registerCampo} request={'registroCampo'} msg={"Confirmar cadastro"} />
                        </form>
                    )
                }
            </div>
        </section>
    )
}