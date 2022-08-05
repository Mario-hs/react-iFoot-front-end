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
                .then(inputs => inputs.data)
                .then((data) => { setInputs({ type: "peladas", datas: data }) })

        } else if (type === 'arenas') {

            api.getArenas().then(inputs => inputs.data).then((data) => { setInputs({ type: "arenas", datas: data }) })

        } else if (type === 'explorar') {

            api.getAllPeladas().then(inputs => inputs.data).then((data) => { setInputs({ type: "explorar", datas: data }) })

        } else if (type === 'espaco') {

            api.axios.get(`/campo_horarios/espaco/${user.id}`)
                .then((data) => { setInputs({ type: "espaco", datas: data.data }) })
        }
    }, [type])

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