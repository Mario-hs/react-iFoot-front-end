import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import { Button } from "../../components/Button"

import { X } from "phosphor-react"

import api from "../../routes/api"

import './newPosicao.form.css'

export const NewPosicao = ({ parentCallback, type, data }) => {
    const [dataForm, setDataForm] = useState([])

    const bindStateInput = (prop, value) => {
        dataForm[prop] = value
        setDataForm({ ...dataForm })
        console.log(dataForm)
    }

    const handleSubmitCreate = async (event) => {
        event.preventDefault();

        try {
            await api.axios.post(`/posicoes`, dataForm)

            alert("[COMPLETE] - Posição alterado com sucesso")
            parentCallback();
        } catch (error) {
            alert(error.response.data.message)
            console.error(error)
        }
    }

    const handleSubmitUpdate = async (event) => {
        event.preventDefault();

        try {
            await api.axios.put(`/posicoes/${dataForm.id}`, dataForm)

            alert("[COMPLETE] - Posição alterado com sucesso")
            parentCallback();

        } catch (error) {
            alert(error.response.data.message)
            console.error(error)
        }
    }

    const CloseModal = (event) => {
        parentCallback();
        event.preventDefault();
    }

    useEffect(() => {
        if (data !== null) {
            setDataForm(data)
        } else {
            setDataForm({
                id: "",
            })
        }
    }, [data])


    return (
        <>
            {type === 'NEW'
                ?
                <div className="relatorio_espaco">
                    <form className="container_form form_adm" onSubmit={(e) => { handleSubmitCreate(e) }} >
                        <Link to='#' className="icon_close" onClick={(e) => {
                            CloseModal(e)
                        }}>
                            <X size={25} color="#dde3f0" weight="fill" />
                        </Link>
                        <h1>New Posição</h1>

                        <div className="inputs">
                            <div>
                                <label htmlFor="nomePosicao" className="nome_span">Nome:</label>
                                <input type="text" name="nomePosicao" onChange={(event) => {
                                    bindStateInput("nomePosicao", event.target.value);
                                }} />
                            </div>
                            <div>
                                <label htmlFor="sigla" className="nome_span">Sigla:</label>
                                <input type="text" name="sigla" onChange={(event) => {
                                    bindStateInput("sigla", event.target.value);
                                }} />
                            </div>
                        </div>

                        <label htmlFor="caracteristica" className="nome_span">Característica:</label>
                        <input type="text" name="caracteristica" onChange={(event) => {
                            bindStateInput("caracteristica", event.target.value);
                        }} />

                        <label htmlFor="descricao" className="nome_span">Descrição:</label>
                        <textarea name="descricao" cols="30" rows="7"
                            placeholder="Caso tenha alguma observação escreva aqui..."
                            onChange={(event) => {
                                bindStateInput("descricao", event.target.value);
                            }}
                        />

                        <Button type={3} msg={"Salvar"} />
                    </form>
                </div>
                :
                <div className="relatorio_espaco">
                    <form className="container_form form_adm" onSubmit={(e) => { handleSubmitUpdate(e) }} >
                        <Link to='/' className="icon_close" onClick={(e) => {
                            CloseModal(e)
                        }}>
                            <X size={25} color="#dde3f0" weight="fill" />
                        </Link>
                        <h1>New Posição</h1>

                        <div className="inputs">
                            <div>
                                <label htmlFor="nomePosicao" className="nome_span">Nome:</label>
                                <input type="text" value={dataForm.nomePosicao} name="nomePosicao" onChange={(event) => {
                                    bindStateInput("nomePosicao", event.target.value);
                                }} />
                            </div>
                            <div>
                                <label htmlFor="sigla" className="nome_span">Sigla:</label>
                                <input type="text" value={dataForm.sigla} name="sigla" onChange={(event) => {
                                    bindStateInput("sigla", event.target.value);
                                }} />
                            </div>
                        </div>

                        <label htmlFor="caracteristica" className="nome_span">Característica:</label>
                        <input type="text" value={dataForm.caracteristica} name="caracteristica" onChange={(event) => {
                            bindStateInput("caracteristica", event.target.value);
                        }} />

                        <label htmlFor="descricao" className="nome_span">Descrição:</label>
                        <textarea name="descricao" cols="30" rows="7"
                            value={dataForm.descricao !== undefined && dataForm.descricao !== null ? dataForm.descricao : null}
                            onChange={(event) => {
                                bindStateInput("descricao", event.target.value);
                            }}
                        />

                        <Button type={3} msg={"Salvar"} />
                    </form>
                </div>
            }
        </>
    )
}