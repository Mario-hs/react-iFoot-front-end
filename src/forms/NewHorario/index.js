import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import { Button } from "../../components/Button"

import { X } from "phosphor-react"

import api from "../../routes/api"

import './newHorario.form.css'

export const NewHorario = ({ parentCallback, type, data }) => {
    const [dataForm, setDataForm] = useState([])

    const bindStateInput = (prop, value) => {
        if (prop === 'status') {
            dataForm[prop] === value
                ? dataForm[prop] = true : dataForm[prop] = false
        } else {
            dataForm[prop] = value
        }

        setDataForm({ ...dataForm })
        console.log(dataForm)
    }

    const handleSubmitCreate = async (event) => {
        event.preventDefault();

        try {
            await api.axios.post(`/horarios`, dataForm)

            alert("[COMPLETE] - Campo criado com sucesso")
            parentCallback();

        } catch (error) {
            alert(error.response.data.message)
            console.error(error)
        }
    }

    const handleSubmitUpdate = async (event) => {
        event.preventDefault();

        try {
            await api.axios.put(`/horarios/${dataForm.id}`, dataForm)

            alert("[COMPLETE] - Horário alterado com sucesso")
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
                status: false
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
                        <h1>New Horário</h1>

                        <label htmlFor="hora" className="nome_span">Hora:</label>
                        <input type="time" name="hora" onChange={(event) => {
                            bindStateInput("hora", event.target.value);
                        }} />

                        <div className="input_status">
                            <label htmlFor="status" className="nome_span">Status - On:</label>
                            <input type="checkbox" name="status" onChange={() => {
                                bindStateInput("status", false);
                            }} />
                        </div>

                        <label htmlFor="diaSemana" className="nome_span">Dia da semana:</label>
                        <select name="diaSemana" onChange={(event) => { bindStateInput("diaSemana", event.target.value); }}>
                            <option disabled defaultValue>Selecione um dia da semana</option>
                            <option value='0'>segunda-feira</option>
                            <option value='1'>terça-feira</option>
                            <option value='2'>quarta-feira</option>
                            <option value='3'>quinta-feira</option>
                            <option value='4'>sexta-feira</option>
                            <option value='5'>sábado</option>
                            <option value='6'>domingo</option>
                        </select>

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
                : <div className="relatorio_espaco">
                    <form className="container_form form_adm" onSubmit={(e) => { handleSubmitUpdate(e) }} >
                        <Link to='#' className="icon_close" onClick={(e) => {
                            CloseModal(e)
                        }}>
                            <X size={25} color="#dde3f0" weight="fill" />
                        </Link>
                        <h1>New Horário</h1>

                        <label htmlFor="hora" className="nome_span">Hora:</label>
                        <input type="time" value={dataForm.hora} name="hora" onChange={(event) => {
                            bindStateInput("hora", event.target.value);
                        }} />

                        <div className="input_status">
                            <label htmlFor="status" className="nome_span">Status - On:</label>
                            <input type="checkbox" checked={dataForm.status} name="status" onChange={() => {
                                bindStateInput("status", false);
                            }} />
                        </div>

                        <label htmlFor="diaSemana" className="nome_span">Dia da semana:</label>
                        <select name="diaSemana" onChange={(event) => { bindStateInput("diaSemana", event.target.value); }}>
                            <option defaultValue>{dataForm.diaSemana}</option>
                            <option value='0'>segunda-feira</option>
                            <option value='1'>terça-feira</option>
                            <option value='2'>quarta-feira</option>
                            <option value='3'>quinta-feira</option>
                            <option value='4'>sexta-feira</option>
                            <option value='5'>sábado</option>
                            <option value='6'>domingo</option>
                        </select>

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