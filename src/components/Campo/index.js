import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { CalendarBlank, PencilLine, Trash } from "phosphor-react";
// import api from "../../routes/api";


export const Campo = ({ props }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        let equalField = []
        let formattedData = []

        props.forEach((item, indicator = 0) => {
            let hora = []
            let campo = []
            let id_campo_horario

            equalField = props.filter((element) => {
                return element.campo.id === item.campo.id
            })

            equalField.forEach((item, index = 0) => {

                index++

                if (index === 1) {
                    id_campo_horario = item.id
                    // campo.push(item.campo)
                    campo.push({ campo: item.campo })
                    hora.push(item.horario)
                } else {
                    hora.push(item.horario)
                }

            })

            if (indicator === 0) {

                formattedData.push({
                    id: id_campo_horario,
                    campo: campo[0].campo,
                    hora: hora
                })

            } else {

                if (formattedData.find(e => e.id === id_campo_horario)) {

                } else {
                    formattedData.push({
                        id: id_campo_horario,
                        // campo: campo,
                        campo: campo[0].campo,
                        hora: hora
                    })
                }
            }

            setData([...formattedData])

            indicator++
        });

    }, [props])


    const handleClickField = (event, method, id_field) => {
        event.preventDefault();
        if (method === 'DELETE') {

            try {

                // api.axios.delete(`/campos/${id_field}`)

                alert('[COMPLETE] - Campo excluido com sucesso')
                // window.location.reload()

            } catch (error) {

                alert(error.response.data.message)
                console.error(error)

            }
        } else {
            try {

                // api.axios.put(`/campos/${id_field}`, INFORMACAOAATUALIZAR)

                alert('[COMPLETE] - Campo alterado com sucesso')
                // window.location.reload()

            } catch (error) {

                alert(error.response.data.message)
                console.error(error)

            }
        }
        console.log(method)
        console.log(id_field)
        console.log('------')
    }

    const handleClickHour = (event, method, id_field, id_hour) => {
        event.preventDefault();

        if (method === 'DELETE') {
            try {

                // api.axios.delete(`/campo_horarios/${id_hour}`)
                // alert('[COMPLETE] - Horário excluido com sucesso')
                // window.location.reload()

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
        console.log(method)
        console.log(id_field)
        console.log(id_hour)
        console.log('------')
    }

    return (
        <section className="container_list_campo">
            {data.map((element, index) => {
                return (
                    <ul className="container_campo" key={index} >
                        <div className="title_campo">
                            <h1>Campo {element.campo.nomeCampo}</h1>
                            <div className="icon_right">
                                <Link to='' title="Editar campo"
                                    onClick={(e) => { handleClickField(e, 'PUT', element.campo.id) }}>
                                    <PencilLine size={20} color="#dde3f0" weight="fill" />
                                </Link>
                                <Link to='' title="Excluir campo"
                                    onClick={(e) => { handleClickField(e, 'DELETE', element.campo.id) }}>
                                    <Trash size={20} color="#dde3f0" weight="fill" />
                                </Link>
                            </div>
                        </div>
                        {element.hora.map((item, key) => {
                            return (
                                <li key={key} value={item.id}>
                                    <Link to='' title="Ver horario de campo" className="icon_left">
                                        <CalendarBlank size={24} color="#E51C44" weight="fill" />
                                        <span> {item.diaSemana} </span>
                                    </Link>
                                    <div className="icon_right">
                                        <span> às {item.hora}h </span>
                                        <Link to='' title="Editar horario de campo">
                                            <PencilLine size={24} color="#dde3f0" weight="fill"
                                                onClick={(e) => { handleClickHour(e, 'PUT', element.campo.id, item.id) }} />
                                        </Link>
                                        <Link to='' title="Excluir horario de campo">
                                            <Trash size={24} color="#dde3f0" weight="fill"
                                                onClick={(e) => { handleClickHour(e, 'DELETE', element.campo.id, item.id) }} />
                                        </Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                )

            })}

        </section>
    )
}

// {/* <div className="container_campo">
// <div className="title_campo">
//     <h1>Campo B</h1>
//     <div className="icon_right">
//         <Link to='' title="Editar campo">
//             <PencilLine size={20} color="#dde3f0" weight="fill" />
//         </Link>
//         <Link to='' title="Excluir campo">
//             <Trash size={20} color="#dde3f0" weight="fill" />
//         </Link>
//     </div>
// </div>
// <li>
//     <Link to='' title="Ver horario de campo" className="icon_left">
//         <CalendarBlank size={24} color="#E51C44" weight="fill" />
//         <span>Segunda-feira</span>
//     </Link>
//     <div className="icon_right">
//         <Link to='' title="Editar horario de campo">
//             <PencilLine size={24} color="#dde3f0" weight="fill" />
//         </Link>
//         <Link to='' title="Excluir horario de campo">
//             <Trash size={24} color="#dde3f0" weight="fill" />
//         </Link>
//     </div>
// </li>
// </div> */}


// const handleShowData = () => {
//     let equalField = []
//     let aux = []
//     let formattedData = []

//     props.map(item => {

//         equalField = props.filter((element) => {
//             if (element.campo.id === item.campo.id) {
//                 return element
//             }
//         })

//         if (aux !== []) {
//             aux.forEach((item) => {

//                 if (equalField.length === item.length) {
//                     for (let i = 0; i < equalField.length; i++) {
//                         if (equalField[i].campo.id !== item[i].campo.id) {
//                             formattedData.push(equalField)
//                         }

//                     }


//                 } else {

//                     for (let i = 0; i < equalField.length; i++) {
//                         if (equalField[i].campo.id !== item[i].campo.id) {
//                             formattedData.push(equalField)
//                         }

//                     }

//                 }

//             })
//         }
//         if (aux.length === 0) {
//             aux.push(equalField)
//             formattedData.push(equalField)
//         }

//     });

//     setData(formattedData)
//     // console.log(data)
// }