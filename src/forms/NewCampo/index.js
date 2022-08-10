import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { X } from "phosphor-react";

import { Button } from "../../components/Button";

import auth from "../../context/auth";
import api from "../../routes/api";
import history from "../../routes/history";

export const NewCampo = ({ parentCallback, data }) => {
    const [idEspaco, setIdEspaco] = useState({ "id": null })
    const [dataForm, setDataForm] = useState({
        "id": "",
        "espaco": idEspaco.id
    })

    const bindStateInput = (prop, value) => {
        dataForm[prop] = value
        setDataForm({ ...dataForm })
        console.log(dataForm)
    }

    const handleSubmitNew = async (event) => {
        event.preventDefault();
        try {
            await api.axios.post(`/campos`, dataForm)

            alert("[COMPLETE] - Campo criado com sucesso")

            history.push("/espaco");
            window.location.reload();
        } catch (error) {
            alert(error.response.data.message)
            console.error(error)
        }
    }

    const handleSubmitPut = async (event) => {
        event.preventDefault();

        bindStateInput("espaco", idEspaco);
        bindStateInput("id", dataForm.id);

        try {

            await api.axios.put(`/campos/${dataForm.id}`, dataForm)

            alert('[COMPLETE] - Campo alterado com sucesso')
            history.push('/espaco')
            window.location.reload()

        } catch (error) {

            alert(error.response.data.message)
            console.error(error)

        }
    }

    const CloseModal = (event) => {
        setDataForm(data)
        event.preventDefault();
        parentCallback();
    }

    useEffect(() => {
        let id = auth.getUser()
        setIdEspaco({ "id": id.id })

        if (data !== null) {
            setDataForm(data)
        }

    }, [data])

    return (
        <>
            {data !== undefined && data !== null
                ?
                <div className="relatorio_espaco">
                    <form className="container_form" onSubmit={(e) => { handleSubmitPut(e) }} >
                        <Link to='/' className="icon_close"
                            onClick={(e) => {
                                CloseModal(e)
                            }}
                        >
                            <X size={25} color="#dde3f0" weight="fill" />
                        </Link>
                        <h1>Editar Campo</h1>
                        <label htmlFor="nomeCampo" className="nome_span">Nome do campo:<span>max 50 caracteres</span></label>
                        <input type="text" name="nomeCampo" value={dataForm.nomeCampo} placeholder="exemplo"
                            onChange={(event) => {
                                bindStateInput("nomeCampo", event.target.value);
                            }}
                        />
                        <label htmlFor="tipo_campo">Tipo de campo:</label>
                        <div className="wrapper">
                            <label htmlFor="campo" className="group-option"><span>Campo</span>
                                <input type="radio" className="option" name="tipo_cadastro" id='campo' value="0"
                                    checked={dataForm.tipoCampo === 'CAMPO' || dataForm.tipoCampo === '0'}
                                    onChange={(e) => {
                                        bindStateInput('tipoCampo', e.target.value);
                                    }}
                                />
                            </label>
                            <label className="group-option" htmlFor="fustal"><span>Fustal</span>
                                <input type="radio" className="option" name="tipo_cadastro" id="fustal" value="1"
                                    checked={dataForm.tipoCampo === 'FUTSAL' || dataForm.tipoCampo === '1'}
                                    onChange={(e) => {
                                        bindStateInput('tipoCampo', e.target.value);
                                    }}
                                />
                            </label>
                            <label className="group-option" htmlFor="society"><span>Society</span>
                                <input type="radio" className="option" name="tipo_cadastro" id="society" value="2"
                                    checked={dataForm.tipoCampo === 'SOCIETY' || dataForm.tipoCampo === '2'}
                                    onChange={(e) => {
                                        bindStateInput('tipoCampo', e.target.value);
                                    }}
                                />
                            </label>
                        </div>

                        <label htmlFor="valor_uni">Valor unitário</label>
                        <input type="number" value={`${dataForm.valorUnit}.00`} name="valor_unit" placeholder="20.00"
                            onChange={(e) => {
                                bindStateInput('valorUnit', e.target.value);
                            }} />
                        <label htmlFor="valor_mes">Valor mensal</label>
                        <input type="number" value={`${dataForm.valorMes}.00`} name="valor_mes" placeholder="200.00"
                            onChange={(e) => {
                                bindStateInput('valorMes', e.target.value);
                            }} />
                        <label htmlFor="valor_ano">Valor anual</label>
                        <input type="number" value={`${dataForm.valorAno}.00`} name="valor_ano" placeholder="2000.00"
                            onChange={(e) => {
                                bindStateInput('valorAno', e.target.value);
                            }} />
                        <Button type={3} msg={"Salvar"} />
                    </form>
                </div>

                :
                <div className="relatorio_espaco">
                    <form className="container_form" onSubmit={(e) => { handleSubmitNew(e) }} >
                        <Link to='/' className="icon_close" onClick={(e) => {
                            CloseModal(e)
                        }}>
                            <X size={25} color="#dde3f0" weight="fill" />
                        </Link>
                        <h1>New Campo</h1>
                        <label htmlFor="nomeCampo" className="nome_span">Nome do campo:<span>max 50 caracteres</span></label>
                        <input type="text" name="nomeCampo" placeholder="exemplo" onChange={(event) => {
                            bindStateInput("nomeCampo", event.target.value);
                            bindStateInput("espaco", idEspaco);
                        }} />
                        <label htmlFor="tipo_campo">Tipo de campo:</label>
                        <div className="wrapper">
                            <label htmlFor="campo" className="group-option"><span>Campo</span>
                                <input type="radio" className="option" name="tipo_cadastro" id='campo' value="0"
                                    defaultChecked onChange={(e) => {
                                        bindStateInput('tipoCampo', e.target.value);
                                    }} />
                            </label>
                            <label className="group-option" htmlFor="fustal"><span>Fustal</span>
                                <input type="radio" className="option" name="tipo_cadastro" id="fustal" value="1"
                                    onChange={(e) => {
                                        bindStateInput('tipoCampo', e.target.value);
                                    }} />
                            </label>
                            <label className="group-option" htmlFor="society"><span>Society</span>
                                <input type="radio" className="option" name="tipo_cadastro" id="society" value="2"
                                    onChange={(e) => {
                                        bindStateInput('tipoCampo', e.target.value);
                                    }} />
                            </label>
                        </div>

                        <label htmlFor="valor_uni">Valor unitário</label>
                        <input type="number" name="valor_unit" placeholder="20.00" onChange={(e) => {
                            bindStateInput('valorUnit', e.target.value);
                        }} />
                        <label htmlFor="valor_mes">Valor mensal</label>
                        <input type="number" name="valor_mes" placeholder="200.00" onChange={(e) => {
                            bindStateInput('valorMes', e.target.value);
                        }} />
                        <label htmlFor="valor_ano">Valor anual</label>
                        <input type="number" name="valor_ano" placeholder="2000.00" onChange={(e) => {
                            bindStateInput('valorAno', e.target.value);
                        }} />
                        <Button type={3} msg={"Salvar"} />
                    </form>
                </div>
            }

        </>
    )
}