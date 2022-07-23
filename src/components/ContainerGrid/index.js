import { ContainerLeft } from "../ContainerLeft";
import { ContainerRightTop } from "../ContainerRightTop";
import { ContainerRightBottom } from "../ContainerRightBottom";
import './styles.css'

export const ContainerGrid = () => {
    return (
        <main className="outlet">
            <section className='container_left'>
                <ContainerLeft />
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