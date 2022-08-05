import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { CurrencyCircleDollar } from 'phosphor-react'

import { Button } from '../Button'
import { RelatorioEspaco } from '../RelatorioEspaco'

import '../ProfileUser/profileUser.css'

import auth from '../../context/auth'
import history from '../../routes/history'
import api from '../../routes/api'

export const ProfileField = () => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState({ status: false, modal: null })


    const handleModal = (event, typeModal) => {
        event.preventDefault();
        if (typeModal === 'LUCRO') {
            setModal({ status: true, modal: typeModal })
        } else if (typeModal === 'PELADAS') {
            setModal({ status: true, modal: typeModal })
        }
    }

    const bindStateInput = (prop, value) => {
        if (prop === 'posicao') {
            data[prop] = { "id": value };
            setData({ ...data })
        } else {
            data[prop] = value;
            setData({ ...data })
        }
        console.log(data)
    }

    const handleCallback = () => {
        setModal({ status: false, modal: null })
    }

    useEffect(() => {
        setData(auth.getUser())
    }, [])

    const handleSubmit = async (event, method) => {
        event.preventDefault();

        if (method === 'DELETE') {
            console.log(method)

            try {

                await api.axios.delete(`/jogadores/${data.id}`)

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

                let res = await api.axios.put(`/espacos/${data.id}`, data)

                alert('[COMPLETE] - Cadastro alterado com sucesso')
                auth.updateUser(res.data)
                window.location.reload()


            } catch (error) {

                alert(error.response.data.message)
                console.error(error)

            }
        }
    }

    return (
        <>
            <section className='cc_data_user espaco'>
                <form className='cc_left' onSubmit={(e) => { handleSubmit(e, 'DELETE') }} >
                    <div className='cc_data_user_photo'></div>
                    <h1>{data.nomeEspaco}</h1>
                    <div className='carteira_espaco'>
                        <CurrencyCircleDollar size={25} color="#dde3f0" weight="fill" />
                        <p>Carteira: <span>R${data.carteira},00</span></p>
                    </div>

                    <Link to='#pelada' onClick={(e) => { handleModal(e, 'PELADAS') }}>
                        <Button type={0} msg={"Peladas ocorridas"} />
                    </Link>
                    <Link to='#lucro' onClick={(e) => { handleModal(e, 'LUCRO') }}>
                        <Button type={0} msg={"Valor recebido"} />
                    </Link>
                    <Link to='' onClick={(e) => { handleSubmit(e, 'DELETE') }}>
                        <Button type={1} msg={"Excluir conta"} />
                    </Link>
                </form>
                <form className='cc_right' onSubmit={(e) => { handleSubmit(e, 'PUT') }}>
                    <h1>Dados Pessoais</h1>
                    <label htmlFor="nomeEspaco">
                        <span>Nome:</span>
                        <input type="text" name="nomeEspaco" defaultValue={data.nomeEspaco} onChange={(event) => {
                            bindStateInput("nomeEspaco", event.target.value)
                        }} />
                    </label>
                    <label htmlFor="emailEspaco">
                        <span>Email:</span>
                        <input type="email" name="emailEspaco" defaultValue={data.emailEspaco} onChange={(event) => {
                            bindStateInput("emailEspaco", event.target.value)
                        }} />
                    </label>
                    <label htmlFor="cpf">
                        <span>CNPJ:</span>
                        <input type="text" name="cnpj" defaultValue={data.cnpj} onChange={(event) => {
                            bindStateInput("cnpj", event.target.value)
                        }} />
                    </label>
                    <label htmlFor="senhaEspaco">
                        <span>Senha:</span>
                        <input type="password" name="senhaEspaco" defaultValue={data.senhaEspaco} />
                    </label>
                    <Button type={3} msg={"Salvar alteração"} />
                </form>
            </section>
            {modal.status === true && modal.modal === 'LUCRO'
                ? <RelatorioEspaco prop={{ status: true }} parentCallback={handleCallback} type={modal.modal} idEspaco={data.id} />
                : (<></>)
            }

            {modal.status === true && modal.modal === 'PELADAS'
                ? <RelatorioEspaco prop={{ status: true }} parentCallback={handleCallback} type={modal.modal} idEspaco={data.id} />
                : (<></>)
            }
        </>
    )
}