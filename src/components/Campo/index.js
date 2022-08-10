import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { CalendarBlank, PencilLine, Plus, Trash } from "phosphor-react";

import api from "../../routes/api";
import { NewCampo } from "../../forms/NewCampo";


export const Campo = ({ campos, campohorario }) => {
    const [campoHorarios, setCampoHorarios] = useState([])
    const [modal, setModal] = useState({ open: false, type: null, data: null })

    const handleCallback = () => {
        setModal({ open: false, type: null })
        window.location.reload()
    }

    const handleDeleteField = async (event, id_field) => {
        event.preventDefault();

        try {

            await api.axios.delete(`/campos/${id_field}`)

            alert('[COMPLETE] - Campo excluido com sucesso')
            window.location.reload()

        } catch (error) {

            alert(error.response.data.message)
            console.error(error)

        }
    }

    const handlePutField = async (event, field) => {
        event.preventDefault();
        setModal({ open: true, type: 'CAMPO', data: field })
    }

    const handleClickHour = async (event, method, id_field_hour) => {
        event.preventDefault();

        if (method === 'DELETE') {
            try {

                await api.axios.delete(`/campo_horarios/${id_field_hour}`)
                alert('[COMPLETE] - Horário excluido com sucesso')
                window.location.reload()

            } catch (error) {

                alert(error.response.data.message)
                console.error(error)

            }
        } else {
            try {

                // api.axios.put(`/campo_horarios/${id_field}`, INFORMACAOAATUALIZAR)
                // alert('[COMPLETE] - Campo alterado com sucesso')
                // window.location.reload()

            } catch (error) {

                alert(error.response.data.message)
                console.error(error)

            }
        }
    }

    useEffect(() => {
        let formattedDataCampoHorario = []
        campos.forEach((item, indicator = 0) => {
            let equalField = []
            let horario = []
            let id_campo_horario = []

            equalField = campohorario.filter((element) => {
                return element.campo.id === item.id
            })

            equalField.forEach((item) => {
                horario.push(item.horario)
                id_campo_horario.push(item.id)
            })

            formattedDataCampoHorario.push({
                campo: item,
                horario: horario,
                id_campo_horario: id_campo_horario
            })
            setCampoHorarios([...formattedDataCampoHorario])
        });

    }, [campos, campohorario])

    return (
        <>
            <section className="container_list_campo">
                {campoHorarios.map((element, index) => {
                    return (
                        <ul className="container_campo" key={index} >
                            <div className="container_data_campo">
                                <div className="title_campo">
                                    <h1>Campo {element.campo.nomeCampo}</h1>
                                    <div className="icon_right">
                                        <Link to='#editarCampo' title="Editar campo"
                                            onClick={(e) => { handlePutField(e, element.campo) }}>
                                            <PencilLine size={20} color="#dde3f0" weight="fill" />
                                        </Link>
                                        <Link to='' title="Excluir campo"
                                            onClick={(e) => { handleDeleteField(e, element.campo.id) }}>
                                            <Trash size={20} color="#dde3f0" weight="fill" />
                                        </Link>
                                    </div>
                                </div>
                                <p className="type_campo">Tipo: {element.campo.tipoCampo}</p>
                                <div className="valor_campo">
                                    <p>U: {element.campo.valorUnit},00</p>
                                    <p>M: {element.campo.valorMes},00</p>
                                    <p>A: {element.campo.valorAno},00</p>
                                </div>
                            </div>

                            {element.horario.length > 0
                                ? <>
                                    {element.horario.map((item, key) => {
                                        return (
                                            <li key={key} value={item.id}>
                                                <Link to='#' title="Ver horario de campo" className="icon_left">
                                                    <CalendarBlank size={24} color="#E51C44" weight="fill" />
                                                    <span> {item.diaSemana} </span>
                                                </Link>
                                                <div className="icon_right">
                                                    <span> às {item.hora}h </span>
                                                    {/* <Link to='' title="Editar horario de campo">
                                                    <PencilLine size={24} color="#dde3f0" weight="fill"
                                                        onClick={(e) => { handleClickHour(e, 'PUT', element.campo.id, item.id) }} />
                                                </Link> */}
                                                    <Link to='#deleteHorario' title="Excluir horario de campo">
                                                        <Trash size={24} color="#dde3f0" weight="fill"
                                                            onClick={(e) => { handleClickHour(e, 'DELETE', element.id_campo_horario[key]) }} />
                                                    </Link>
                                                </div>
                                            </li>
                                        )
                                    })}</>
                                : <></>
                            }
                            <Link to="#addHorario" className="add_horario">
                                <Plus size={20} color="#dde3f0" weight="fill" />
                            </Link>
                        </ul>
                    )

                })}

            </section>

            {modal.open === true
                ? <NewCampo parentCallback={handleCallback} data={modal.data} />
                : (<></>)
            }
        </>
    )
}