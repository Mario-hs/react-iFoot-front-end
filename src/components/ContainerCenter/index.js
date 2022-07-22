
import { Button } from '../Button'
import { ProfileOtherUser } from '../ProfileOtherUser'
import { ProfileUser } from '../ProfileUser'
import './styles.css'

export const ContainerCenter = (props) => {
    return (
        <main className="container_center">
            {props.user === 'otherUser' ? (
                < ProfileOtherUser />
            ) : (
                <ProfileUser />
            )}
            <section className='cc_relatorios'>
                <h1>Relatório</h1>
                <div className='cc_buttons'>
                    <Button tipo={3} msg={"Ranking"} />
                    <Button tipo={3} msg={"Peladas Batidas"} />
                </div>
            </section>
        </main>
    )
}