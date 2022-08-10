import { useEffect, useState } from "react";

import { CalendarBlank, Lock, LockOpen, PencilLine, Trash, User } from "phosphor-react";
import { Campo } from "../../components/Campo/index";

import auth from "../../context/auth";
import api from "../../routes/api";

import icone_red from '../../assets/icon/apito-red.svg';
import './left.container.css'

export const ContainerLeft = ({ props }) => {
    const [search, setSearch] = useState(null)
    const [dataContainer, setDataContainer] = useState([])
    const [campoHorario, setCampoHorario] = useState([])
    const [userLogin, setUserLogin] = useState([])

    const handleDatasPeladas = (data, meses) => {
        let getTipo
        data.forEach(element => {
            let date = new Date(element[6])
            let dateFormatada = ((date.getDate() + " " + meses[(date.getMonth())] + " " + date.getFullYear()));

            if (element[2] === 0 || element[2] === 'CAMPO') {
                getTipo = 'Futsal'
            } else if (element[2] === 1 || element[2] === 'FUTSAL') {
                getTipo = 'Society'
            } else {
                getTipo = 'Campo'
            }

            setDataContainer(dataContainer => [...dataContainer, {
                nome_espaco: element[0],
                nome_campo: element[1],
                tipo_campo: getTipo,
                dia_semana: element[3],
                status: element[4],
                bairro: element[5],
                data: dateFormatada,
                horario: element[7]
            }])
        });
    }

    const handleDatasExplorar = (data, meses) => {
        data.forEach(element => {
            let date = new Date(element.dataPelada)
            let dateFormatada = ((date.getDate() + " " + meses[(date.getMonth())] + " " + date.getFullYear()));

            let tipo = element.reservaGrupo.campoHorario.campo.tipoCampo.toLowerCase()
            let formateTipo = tipo[0].toUpperCase() + tipo.substring(1);

            setDataContainer(dataContainer => [...dataContainer, {
                nome_espaco: element.reservaGrupo.campoHorario.campo.espaco.nomeEspaco,
                nome_campo: element.reservaGrupo.campoHorario.campo.nomeCampo,
                tipo_campo: formateTipo,
                status: element.reservaGrupo.campoHorario.horario.status,
                bairro: element.reservaGrupo.campoHorario.campo.espaco.bairro,
                valor: element.reservaGrupo.campoHorario.campo.valorUnit,
                data: dateFormatada,
                horario: element.reservaGrupo.campoHorario.horario.hora,
                qtd_jogadores: element.reservaGrupo.jogador.length
            }])
        });
    }

    const handleDatasArenas = (data) => {
        setDataContainer([])

        data.forEach(element => {
            let nomeCampo = element.tipoCampo.toLowerCase()
            let formateNomeCampo = nomeCampo[0].toUpperCase() + nomeCampo.substring(1);
            setDataContainer(dataContainer => [...dataContainer, {
                nome_espaco: element.espaco.nomeEspaco,
                nome_campo: element.nomeCampo,
                tipo_campo: formateNomeCampo,
                bairro: element.espaco.bairro,
                valor_uni: element.valorUnit,
                valor_mes: element.valorMes,
                valor_ano: element.valorAno,
            }])
        });
        console.log(data)
    }

    const handleDatasEspaco = (data) => {
        data.campos.forEach(element => {
            setDataContainer(dataContainer => [...dataContainer, element])
        });

        data.campo_horario.forEach(element => {
            setCampoHorario(campoHorario => [...campoHorario, element])
        });
        setUserLogin(auth.getUser())
    }

    const fetchData = async (value) => {
        const res = await api.axios.get(`/campos/tipo_campo/${value}`)
        handleDatasArenas(res.data)
    }

    useEffect(() => {
        setSearch(props.type)
        setDataContainer([])

        if (props.datas !== undefined) {
            if (props.type !== 'espaco') {

                let type = props.type
                const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

                if (type === 'peladas') {

                    handleDatasPeladas(props.datas, meses)

                } else if (type === 'explorar') {
                    handleDatasExplorar(props.datas, meses)

                } else {
                    handleDatasArenas(props.datas)
                }

            } else {
                setCampoHorario([])
                handleDatasEspaco(props.datas)
            }
        }

    }, [props])


    return (

        <>
            {
                search !== null && search !== 'espaco' && search !== undefined
                    ? <>
                        <section className="top">
                            <h1>{search === 'pelada' ? 'Pelada' : 'Tem vaga'}</h1>
                            <p>Grupo de peladas que você participa.</p>
                        </section>

                        <section className="bottom">
                            <p>Suas peladas marcadas <span>Total {dataContainer.length}</span></p>
                            {props.type === 'arenas'
                                ? <select name="tipo de campo" className="tipo_campo" onChange={(event) => { fetchData(event.target.value); }}>
                                    <option disabled defaultValue>Selecione um dia da semana</option>
                                    <option value='1'>Campo</option>
                                    <option value='2'>Futsal</option>
                                    <option value='3'>Society</option>
                                    <option value='0'>Todos</option>
                                </select>
                                : <></>
                            }

                            {props.type === 'explorar' && dataContainer && (
                                <ul className="container_list_peladas">
                                    {dataContainer.map((item, index) => {
                                        return (
                                            <li className="container_pelada" key={index}>
                                                <div className="photo_pelada"></div>
                                                <div className="info_pelada">
                                                    <h2>
                                                        {item.nome_espaco} - {item.nome_campo}
                                                        <span>
                                                            <PencilLine size={20} color="#dde3f0" weight="fill" />
                                                            <Trash size={20} color="#dde3f0" weight="fill" />
                                                            {item.status === true
                                                                ? <Lock size={20} color="#dde3f0" weight="fill" />
                                                                : <LockOpen size={20} color="#dde3f0" weight="fill" />
                                                            }
                                                        </span>
                                                    </h2>

                                                    <p>Tipo: {item.tipo_campo} - Valor: R${item.valor},00</p>
                                                    <p>Bairro: {item.bairro}</p>

                                                    <div className="info_row">
                                                        <div>
                                                            <CalendarBlank size={20} color="#E51C44" weight="fill" />
                                                            <span>{item.data} às {item.horario}h</span>
                                                        </div>
                                                        <div>
                                                            <span>{item.qtd_jogadores} </span>
                                                            <User size={20} color="#E51C44" weight="fill" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                        )
                                    })}
                                </ul>
                            )}

                            {props.type === 'arenas' && dataContainer && (
                                <ul className="container_list_peladas arenas">

                                    {dataContainer.map((item, index) => {
                                        return (
                                            <li className="container_pelada" key={index}>
                                                <div className="photo_pelada"></div>
                                                <div className="info_pelada">
                                                    <h2>Arena {item.nome_espaco} - {item.nome_campo}</h2>

                                                    <p>Bairro {item.bairro} - {item.tipo_campo}</p>
                                                    <p>Valores: Unit - R${item.valor_uni},00 </p>
                                                    <p>Mês - R${item.valor_mes},00 | Ano - R${item.valor_ano},00</p>

                                                    <div className="info_row">

                                                        <div>
                                                            <CalendarBlank size={20} color="#E51C44" weight="fill" />
                                                            <span>Aberto de segunda a sexta</span>
                                                        </div>
                                                        <span>
                                                            {item.status === true
                                                                ? <Lock size={20} color="#E51C44" weight="fill" />
                                                                : <LockOpen size={20} color="#E51C44" weight="fill" />
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}

                            {props.type === 'peladas' && dataContainer && (
                                <ul className="container_list_peladas">

                                    {dataContainer.map((item, index) => {
                                        return (
                                            <li className="container_pelada" key={index}>
                                                <div className="photo_pelada"></div>
                                                <div className="info_pelada">
                                                    <h2>
                                                        {item.nome_espaco} - {item.nome_campo}
                                                        <span>
                                                            <PencilLine size={20} color="#dde3f0" weight="fill" />
                                                            <Trash size={20} color="#dde3f0" weight="fill" />
                                                            {item.status === true
                                                                ? <Lock size={20} color="#dde3f0" weight="fill" />
                                                                : <LockOpen size={20} color="#dde3f0" weight="fill" />
                                                            }
                                                        </span>
                                                    </h2>
                                                    <p>Tipo: {item.tipo_campo}</p>
                                                    <p>Bairro {item.bairro}</p>

                                                    <div className="info_row">
                                                        <div>
                                                            <CalendarBlank size={20} color="#E51C44" weight="fill" />
                                                            <span>{item.data} às {item.horario}h</span>
                                                        </div>
                                                        <div><span>15 </span><User size={20} color="#E51C44" weight="fill" /></div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}

                        </section>
                    </>
                    : <></>
            }

            {
                search !== null && search === 'espaco' && search !== undefined
                    ? <>
                        <section className="top">
                            <h1>Bem vindo, {userLogin.nomeEspaco}!</h1>
                            <p>Seus horários em que o campo está disponível para os peladeiros.</p>
                        </section>

                        <section className="bottom espaco">

                            <h2>Tipo de espaço</h2>
                            <div className="select_tipo_campo">
                                <img src={icone_red} alt="icone ifoot" /><span>Buscar</span>
                                <select name="tipo_campo" onChange={(event) => { fetchData("tipo_campo", event.target.value); }}>
                                    <option disabled defaultValue>Selecione uma posição</option>
                                    <option value={0}>Campo</option>
                                    <option value={1}>Futsal</option>
                                    <option value={2}>Society</option>
                                </select>
                            </div>
                            <Campo campos={dataContainer} campohorario={campoHorario} />

                        </section>
                    </>
                    : <></>

            }

        </>


    )
}
