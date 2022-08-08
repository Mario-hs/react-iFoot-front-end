import { useEffect, useState } from 'react'

import { X } from 'phosphor-react';

import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';

import icon from '../../assets/icon/apito.svg';

import history from '../../routes/history';
import api from '../../routes/api';
import axios from 'axios';
import './register.forms.css'

export const Register = () => {
    const [option, setOption] = useState({ "id": "" })
    const [options, setOptions] = useState([])
    const [formRegister, setFormRegister] = useState({ tipo_cadastro: '' })

    const [registerJogador, setRegisterJogador] = useState({
        "id": null,
        // "nome": "",
        // "cpf": "",
        // "emailJogador": "",
        // "dataNascimento": "",
        // "senhaJogador": "",
        "qtdAdvertencia": 0,
        // "bairro": "",
        "carteira": 50.00,
        "posicao": option.id,
    })

    const [registerCampo, setRegisterCampo] = useState({
        "id": null,
        // "nomeEspaco": "",
        // "emailEspaco": "",
        // "cnpj": "",
        // "bairro": "",
        // "senhaEspaco": "",
        "carteira": 300.0
    })


    const handleOnChange = (value) => {
        setFormRegister({ tipo_cadastro: value })
    }

    const bindStateInput = (prop, value) => {

        if (formRegister.tipo_cadastro === 'jogador') {
            if (prop === 'posicao') {
                registerJogador[prop] = { "id": value };
                setRegisterJogador({ ...registerJogador })
            }
            else {
                registerJogador[prop] = value;
                setRegisterJogador({ ...registerJogador })
            }
            // console.log(registerJogador)
        } else {
            registerCampo[prop] = value;
            setRegisterCampo({ ...registerCampo })
            // console.log(registerCampo)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let res

        try {
            formRegister.tipo_cadastro === 'campo'
                ?
                res = await axios.post('http://localhost:8080/espacos', registerCampo, { headers: { 'Content-Type': 'application/json' } })
                // res = await api.postEspaco(registerCampo)
                :
                res = await axios.post('http://localhost:8080/jogadores', registerJogador, { headers: { 'Content-Type': 'application/json' } })

            alert("[COMPLETE] - Usuário usuário cadastrado com sucesso")

            history.push("/home");
            window.location.reload();
        } catch (error) {
            alert(error.response.data.message)
            console.error(error)
        }
    }

    useEffect(() => {
        const res = api.getPosicoes().then((e) => {
            setOptions(options => [...e.data])
        })
    }, [])

    return (
        <section id="signUp" className="position">
            <div className={`${formRegister.tipo_cadastro !== '' ? 'modal grid' : 'modal'}`}>
                <section className='left'>
                    <Link to='/home' title="Close" className="Close">
                        <X size={20} color="#dde3f0" weight="fill" />
                    </Link>
                    <div className='options_register'>
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
                    </div>
                </section>
                {formRegister.tipo_cadastro === 'jogador' && (
                    <form className='form' onSubmit={(e) => { handleSubmit(e) }} method="POST">
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
                                bindStateInput("emailJogador", event.target.value);
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
                                    bindStateInput("dataNascimento", event.target.value);
                                }} />
                            </label>
                            <label htmlFor="posicao" className='posicao_jogador'>
                                <span>Posição:</span>
                                <select name="posicao" onChange={(event) => { bindStateInput("posicao", event.target.value); }}>
                                    <option disabled defaultValue>Selecione uma posição</option>
                                    {options !== [] && (
                                        options.map((value, index) => {
                                            return <option key={value.id} value={value.id}>{value.nomePosicao}</option>
                                        })
                                    )}
                                </select>
                            </label>
                        </div>
                        <label htmlFor="bairro">
                            <span>Bairro:</span>
                            <input type="text" name="bairro" placeholder='nome do bairro' onChange={(event) => {
                                bindStateInput("bairro", event.target.value);
                            }} />
                        </label>
                        <label htmlFor="senha">
                            <span>Senha:</span>
                            <input type="password" name="senha" placeholder='0000000' onChange={(event) => {
                                bindStateInput("senhaJogador", event.target.value);
                            }} />
                        </label>
                        <Button type={3} msg={"Confirmar cadastro"} />
                    </form>
                )}

                {formRegister.tipo_cadastro === 'campo' && (
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
                            <span>Bairro:</span>
                            <input type="text" name="bairro" placeholder='nome do bairro' onChange={(event) => {
                                bindStateInput("bairro", event.target.value);
                            }} />
                        </label>
                        <label htmlFor="senha">
                            <span>Senha:</span>
                            <input type="password" name="senha" placeholder='0000000' onChange={(event) => {
                                bindStateInput("senhaEspaco", event.target.value);
                            }} />
                        </label>
                        <Button type={3} msg={"Confirmar cadastro"} />
                    </form>
                )}

                {formRegister.tipo_cadastro !== '' && (
                    <></>
                )}
            </div>
        </section>
    )
}