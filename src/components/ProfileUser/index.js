import { useEffect, useState } from 'react'

import { SoccerBall, Binoculars } from 'phosphor-react'

import { Button } from '../Button'

import './profileUser.css'

import posicao from '../../assets/posicao.png'
import auth from '../../context/auth'
import history from '../../routes/history'
import api from '../../routes/api'

export const ProfileUser = () => {
    const [dataUser, setDataUser] = useState([])
    const [options, setOptions] = useState([])
    const [score, setScore] = useState([])

    const bindStateInput = (prop, value) => {
        if (prop === 'posicao') {
            dataUser[prop] = { "id": value };
            setDataUser({ ...dataUser })
        } else {
            dataUser[prop] = value;
            setDataUser({ ...dataUser })
        }
        console.log(dataUser)
    }

    const handleScore = () => {
        if (dataUser.id !== undefined) {
            api.axios.get(`/jogadores/${dataUser.id}/score`).then((e) => {
                setScore(e.data)
            })
        }
        return score
    }

    const handleSubmit = async (event, method) => {
        event.preventDefault();
        if (method === 'DELETE') {
            try {
                await api.axios.delete(`/jogadores/${dataUser.id}`)

                alert('[COMPLETE - Usuário excluido com sucesso]')
                auth.logout()
                history.push("/home");
                window.location.reload()
            } catch (error) {
                alert(error.response.data.message)
                console.error(error)
            }
        } else {
            try {
                await api.axios.put(`/jogadores/${dataUser.id}`, dataUser)
                alert('[COMPLETE - Cadastro alterado com sucesso]')
                window.location.reload()
            } catch (error) {
                alert(error.response.data.message)
                console.error(error)
            }
        }
    }

    useEffect(() => {
        setDataUser(auth.getUser())
        api.getPosicoes().then((e) => {
            setOptions(options => [...e.data])
        })
    }, [])



    return (
        <section className='cc_data_user'>
            <form className='cc_left' onSubmit={(e) => { handleSubmit(e, 'DELETE') }} >
                <div className='cc_data_user_photo'></div>
                <h1>{dataUser.nome}</h1>
                <Button type={1} msg={"Excluir conta"} />
            </form>
            <form className='cc_right' onSubmit={(e) => { handleSubmit(e, 'PUT') }}>
                <h1>Dados Pessoais</h1>
                <label htmlFor="nome">
                    <span>Nome:</span>
                    <input type="text" name="nome" defaultValue={dataUser.nome} onChange={(event) => {
                        bindStateInput("nome", event.target.value)
                    }} />
                </label>
                <label htmlFor="email">
                    <span>Email:</span>
                    <input type="email" name="email" defaultValue={dataUser.emailJogador} onChange={(event) => {
                        bindStateInput("emailJogador", event.target.value)
                    }} />
                </label>
                <label htmlFor="cpf">
                    <span>CPF:</span>
                    <input type="text" name="cpf" defaultValue={dataUser.cpf} onChange={(event) => {
                        bindStateInput("cpf", event.target.value)
                    }} />
                </label>
                <div className='idade_posicao'>
                    <label htmlFor="idade">
                        <span>Idade:</span>
                        <input type="date" name="idade" defaultValue={dataUser.dataNascimento} className='idade' onChange={(event) => {
                            bindStateInput("dataNascimento", event.target.value)
                        }} />
                    </label>
                    <label htmlFor="Posicao">
                        <span>Posição:</span>
                        <select name="posicao" onChange={(event) => { bindStateInput("posicao", event.target.value); }}>
                            {dataUser.posicao !== undefined
                                ? (<option key={dataUser.posicao.id} value={dataUser.posicao.id}>{dataUser.posicao.nomePosicao}</option>)
                                : (<option disabled defaultValue>Selecione uma posição</option>)}

                            {options !== [] && (
                                options.map((value, index) => {
                                    return <option key={value.id} value={value.id}>{value.nomePosicao}</option>
                                })
                            )}
                        </select>
                    </label>
                </div>
                <label htmlFor="senha">
                    <span>Senha:</span>
                    <input type="password" name="senha" defaultValue={dataUser.senhaJogador} />
                </label>
                <Button type={3} msg={"Salvar alteração"} />
            </form>
        </section>
    )
}