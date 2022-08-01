import { ContainerLeft } from "../ContainerLeft";
import { ContainerRightTop } from "../ContainerRightTop";
import { ContainerRightBottom } from "../ContainerRightBottom";

import { useEffect, useState } from "react";
import api from "../../routes/api";

import './styles.css'

export const ContainerGrid = ({ type }) => {
    const [inputs, setInputs] = useState([])

    useEffect(() => {
        if (type === 'peladas') {

            api.getMyPeladas().then(inputs => inputs.data).then((data) => { setInputs({ type: "peladas", datas: data }) })

        } else if (type === 'arenas') {

            api.getArenas().then(inputs => inputs.data).then((data) => { setInputs({ type: "arenas", datas: data }) })

        } else if (type === 'explorar') {

            api.getAllPeladas().then(inputs => inputs.data).then((data) => { setInputs({ type: "explorar", datas: data }) })

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