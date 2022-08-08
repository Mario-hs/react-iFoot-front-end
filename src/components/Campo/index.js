import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { CalendarBlank, PencilLine, Trash } from "phosphor-react";


export const Campo = ({ props }) => {
    const [data, setData] = useState([])
    const [test, setTest] = useState([])

    useEffect(() => {
        if (props !== []) {
            handleShowData()
        }
    }, [])

    const handleShowData = () => {
        let equalField = []
        let formattedData = []


        props.map((item, i = 0) => {

            equalField = props.filter((element) => {
                return element.campo.id === item.campo.id
            })

            let hora = []
            let campo = []
            let id_campo_horario

            equalField.forEach((item, index = 0) => {
                index++
                if (index === 1) {
                    id_campo_horario = item.id
                    campo.push(item.campo)
                    hora.push(item.horario)
                } else {
                    hora.push(item.horario)
                }

            })

            if (i === 0) {

                formattedData.push({
                    id: id_campo_horario,
                    campo: campo,
                    hora: hora
                })

            } else {
                if (formattedData.find(e => e.id === id_campo_horario)) {

                } else {
                    formattedData.push({
                        id: id_campo_horario,
                        campo: campo,
                        hora: hora
                    })
                }
            }
            setData({ ...formattedData })


            i++
        });

    }
    console.log(data)

    return (
        <ul className="container_list_campo">
            {/* {data.map((element, index) => {
                return (
                    <div className="container_campo" key={index}>

                        {element.map(item => {
                            return (
                                <>

                                    <div className="title_campo">
                                        <h1>{item.campo.nomeCampo}</h1>
                                        <div className="icon_right">
                                            <Link to='' title="Editar campo">
                                                <PencilLine size={20} color="#dde3f0" weight="fill" />
                                            </Link>
                                            <Link to='' title="Excluir campo">
                                                <Trash size={20} color="#dde3f0" weight="fill" />
                                            </Link>
                                        </div>
                                    </div>
                                     <li>
                                        <Link to='' title="Ver horario de campo" className="icon_left">
                                            <CalendarBlank size={24} color="#E51C44" weight="fill" />
                                            <span> {element.horario.diaSemana}</span>
                                        </Link>
                                        <div className="icon_right">
                                            <Link to='' title="Editar horario de campo">
                                                <PencilLine size={24} color="#dde3f0" weight="fill" />
                                            </Link>
                                            <Link to='' title="Excluir horario de campo">
                                                <Trash size={24} color="#dde3f0" weight="fill" />
                                            </Link>
                                        </div>
                                    </li> 
                                </>
                            )
                        })}
                    </div>
                )

            })} */}

        </ul>
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