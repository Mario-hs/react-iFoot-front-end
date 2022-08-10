import { ContainerLeft } from "../ContainerLeft";
import { ContainerRightTop } from "../ContainerRightTop";
import { ContainerRightBottom } from "../ContainerRightBottom";

import { useEffect, useState } from "react";
import api from "../../routes/api";

import './grid.container.css'
import auth from "../../context/auth";

export const ContainerGrid = ({ type }) => {
    const [inputs, setInputs] = useState([])


    useEffect(() => {
        let user = auth.getUser()

        if (type === 'peladas') {

            api.axios.get(`/jogadores/${user.id}/reserva_em_grupo`)
                .then((data) => { setInputs({ type: "peladas", datas: data.data }) })

        } else if (type === 'arenas') {

            api.axios.get(`/campos/tipo_campo/0`).then((data) => { setInputs({ type: "arenas", datas: data.data }) })

        } else if (type === 'explorar') {

            api.axios.get(`/peladas`).then((data) => { setInputs({ type: "explorar", datas: data.data }) })

        } else if (type === 'espaco') {
            async function fetchData() {
                let campo_horario = (await api.axios.get(`/campo_horarios/espaco/${user.id}`)).data
                let campos = (await api.axios.get(`/campos/espaco/${user.id}`)).data
                setInputs({ type: "espaco", datas: { campos: campos, campo_horario: campo_horario } })
            }

            fetchData();
        }
    }, [type])

    // console.log(inputs)

    return (

        <main className="outlet">

            <section className='container_left'>
                <ContainerLeft props={inputs} />
            </section>

            <section className='container_right_top'>
                <ContainerRightTop />
            </section>

            <section className='container_right_bottom'>
                <ContainerRightBottom />
            </section>


        </main>
    )
}