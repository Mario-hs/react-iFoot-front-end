import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Rank } from '../../components/Rank'
import { ProfileOtherUser } from '../../components/ProfileOtherUser'
import { ProfileUser } from '../../components/ProfileUser'

import api from '../../routes/api'

import './center.container.css'
import { RelatorioPelada } from '../../components/RelatorioPeladas'
import { ProfileField } from '../../components/ProfileField'
import { ProfileADM } from '../../components/ProfileADM'

export const ContainerCenter = ({ user }) => {
    const [modal, setModal] = useState({ status: false, modal: null })
    const [rankGol, setRankGol] = useState([])
    const [rankAss, setRankAss] = useState([])

    const handleModal = async (type) => {
        if (type === 'RANK') {
            setModal({ status: true, modal: type })
        } else {
            setModal({ status: true, modal: type })
        }
    }

    const handleCallback = () => {
        setModal({ status: false, modal: null })
    }

    useEffect(() => {
        if (user !== 'admin') {
            api.getRankingGols().then(inputs => inputs.data).then((data) => { setRankGol(data) })
            api.getRankingAssistencias().then(inputs => inputs.data).then((data) => { setRankAss(data) })
        }
    }, [user])

    return (
        <main className="container_center">
            <>
                {user === 'admin'
                    ?
                    <ProfileADM />
                    :
                    <>
                        {user === 'espaco'
                            ?
                            <>
                                <ProfileField />
                            </>
                            :
                            <>
                                {user === 'otherUser' ? (
                                    <ProfileOtherUser />
                                ) : (
                                    <ProfileUser />
                                )}

                                <section className='cc_relatorios'>
                                    <h1>Relatório</h1>
                                    <div className='cc_buttons'>
                                        <Link to='#ranking' onClick={() => handleModal('RANK')}>
                                            <Button type={3} msg={"Ranking"} />
                                        </Link>
                                        <Link to='#peladas' onClick={() => handleModal('PELADAS')}>
                                            <Button type={3} msg={"Peladas Batidas"} />
                                        </Link>
                                    </div>
                                </section>

                                {modal.status === true && modal.modal === 'RANK'
                                    ? <Rank prop={{ status: true, rank_gol: rankGol, rank_ass: rankAss }} parentCallback={handleCallback} />
                                    : (<></>)
                                }

                                {modal.status === true && modal.modal === 'PELADAS'
                                    ? <RelatorioPelada prop={{ status: true }} parentCallback={handleCallback} />
                                    : (<></>)
                                }
                            </>
                        }
                    </>}

            </>



        </main>
    )
}

