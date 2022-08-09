import { useEffect, useState } from "react";

import { Link } from "react-router-dom"

import { PencilLine, Trash, X } from "phosphor-react"

import api from "../../routes/api";

import './viewADM.css'
import { NewHorario } from "../../forms/NewHorario";
import { NewPosicao } from "../../forms/NewPosicao";

export const ViewADM = ({ parentCallback, type }) => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState({ status: false, type: null, id: null })

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            // api.axios.post(`/horarios`, dataForm)

            alert("[COMPLETE] - Campo criado com sucesso")
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

    const handleDelete = async (event, type, id) => {
        event.preventDefault();

        if (type === 'HORARIO') {
            try {

                await api.axios.delete(`/horarios/${id}`)

                alert("[COMPLETE] - Horário excluido com sucesso")
                window.location.reload()

            } catch (error) {
                alert(error.response.data.message)
                console.error(error)
            }

        } else {
            try {

                await api.axios.delete(`/posicoes/${id}`)

                alert("[COMPLETE] - Posição excluido com sucesso")
                window.location.reload()

            } catch (error) {
                alert(error.response.data.message)
                console.error(error)
            }
        }
    }

    const handleAlter = (event, type, element) => {
        event.preventDefault();
        if (type === 'HORARIO') {
            setModal({ status: true, type: type, data: element })
        } else {
            setModal({ status: true, type: type, data: element })
        }
    }

    useEffect(() => {
        if (type === 'POSICAO') {
            api.axios.get('/posicoes').then(data => setData(data.data))
        } else if (type === 'HORARIO') {
            api.axios.get('/horarios').then(data => setData(data.data))
        }
    }, [type])

    console.log(data)

    return (
        <>
            <div className="relatorio_espaco">
                <form className="container_form form_adm" onSubmit={(e) => { handleSubmit(e) }} >
                    <Link to='/' className="icon_close" onClick={(e) => {
                        CloseModal(e)
                    }}>
                        <X size={25} color="#dde3f0" weight="fill" />
                    </Link>
                    <h1>{type === 'POSICAO' ? 'Todas as posições' : 'Todos os horários'}</h1>
                    <ul className="container_list_data">
                        {type === 'POSICAO'
                            ?
                            data.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <div className="group">
                                            <div>
                                                <p>ID: <span>{element.id}</span></p>
                                                <p>Sigla: <span>{element.sigla}</span></p>
                                                <p> Nome: <span>{element.nomePosicao}</span></p>
                                            </div>
                                            <div>
                                                <Link to='#alterPosicao' title="Editar posição"
                                                    onClick={(e) => handleAlter(e, 'POSICAO', element)}
                                                >
                                                    <PencilLine size={17} color="#dde3f0" weight="fill" />
                                                </Link>
                                                <Link to='#deletePosicao' title="Excluir posição"
                                                    onClick={(e) => { handleDelete(e, 'POSICAO', element.id) }}
                                                >
                                                    <Trash size={17} color="#dde3f0" weight="fill" />
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="completed">Característica: <span>{element.caracteristica !== null ? element.caracteristica : '-'}</span></p>
                                        <p className="completed">Descrição: <span>{element.descricao !== null ? element.descricao : '-'}</span> </p>
                                    </li>
                                )
                            })
                            :
                            data.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <div className="group">
                                            <div>
                                                <p>ID: <span>{element.id}</span></p>
                                                <p>Hora: <span>{element.hora}</span></p>
                                                <p>Status: <span>{element.status === 'true' ? 'Ativo' : 'Desativado'}</span></p>
                                            </div>
                                            <div>
                                                <Link to='#alterHorário' title="Editar horário"
                                                    onClick={(e) => handleAlter(e, 'HORARIO', element)}
                                                >
                                                    <PencilLine size={17} color="#dde3f0" weight="fill" />
                                                </Link>
                                                <Link to='#deleteHorário' title="Excluir horário"
                                                    onClick={(e) => { handleDelete(e, 'HORARIO', element.id) }}
                                                >
                                                    <Trash size={17} color="#dde3f0" weight="fill" />
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="completed">Característica: <span>{element.diaSemana !== null ? element.diaSemana : '-'}</span></p>
                                        <p className="completed">Descrição: <span>{element.descricao !== null ? element.descricao : '-'}</span> </p>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </form>
            </div>
            {modal.status === true && modal.type === 'HORARIO'
                ? <NewHorario parentCallback={CloseModal} type={'UP'} data={modal.data} />
                : (<></>)
            }
            {modal.status === true && modal.type === 'POSICAO'
                ? <NewPosicao parentCallback={CloseModal} type={'UP'} data={modal.data} />
                : (<></>)
            }
        </>

    )
}