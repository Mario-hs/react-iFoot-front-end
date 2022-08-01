
import { Button } from '../../components/Button'
import { ProfileOtherUser } from '../../components/ProfileOtherUser'
import { ProfileUser } from '../../components/ProfileUser'
import './styles.css'

export const ContainerCenter = (props) => {
    return (
        <main className="container_center">
            {props.user === 'otherUser' ? (
                <ProfileOtherUser />
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