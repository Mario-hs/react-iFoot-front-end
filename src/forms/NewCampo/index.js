import { Link } from "react-router-dom";
import { X } from "phosphor-react";
import { Button } from "../../components/Button";
import history from "../../routes/history";
import auth from "../../context/auth";
import { useEffect, useState } from "react";
import api from "../../routes/api";

export const NewCampo = ({ parentCallback }) => {
    const [dataUser, setDataUser] = useState()
    const [idEspaco, setIdEspaco] = useState({ "id": null })
    const [dataForm, setDataForm] = useState({
        "id": "",
        // "nomeCampo": "",
        // "valorUnit": "",
        // "valorMes": "",
        // "valorAno": "",
        // "tipoCampo": "",
        "espaco": idEspaco.id
    })

    const bindStateInput = (prop, value) => {
        dataForm[prop] = value
        setDataForm({ ...dataForm })
        console.log(dataForm)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let res

        try {
            res = api.axios.post(`/campos`, dataForm)

            alert("[COMPLETE] - Campo criado com sucesso")

            // history.push("/espaco");
            // window.location.reload();
        } catch (error) {
            alert(error.response.data.message)
            console.error(error)
        }
    }

    const CloseModal = (event) => {
        parentCallback();
        event.preventDefault();
    }

    useEffect(() => {
        let id = auth.getUser()
        setIdEspaco({ "id": id.id })
    }, [])
    // console.log(idEspaco)

    return (
        <div className="relatorio_espaco">
            <form className="container_form" onSubmit={(e) => { handleSubmit(e) }} >
                <Link to='/' className="icon_close" onClick={(e) => {
                    CloseModal(e)
                }}>
                    <X size={25} color="#dde3f0" weight="fill" />
                </Link>
                <h1>Criar Horário</h1>
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
                        <input type="radio" className="option" name="tipo_cadastro" id="fustal" value="1" onChange={(e) => {
                            bindStateInput('tipoCampo', e.target.value);
                        }} />
                    </label>
                    <label className="group-option" htmlFor="society"><span>Society</span>
                        <input type="radio" className="option" name="tipo_cadastro" id="society" value="2" onChange={(e) => {
                            bindStateInput('tipoCampo', e.target.value);
                        }} />
                    </label>
                </div>

                {/* <div className="flex_itens">
                    <div className="item_semana">
                        <label htmlFor="dia_semana">Dia da semana:</label>
                        <select name="posicao" >
                            <option disabled defaultValue>Selecione uma posição</option>
                            <option value='1'>segunda-feira</option>
                            <option value='2'>terça-feira</option>
                            <option value='3'>quarta-feira</option>
                            <option value='4'>quinta-feira</option>
                            <option value='5'>sexta-feira</option>
                            <option value='6'>sábado</option>
                            <option value='0'>domingo</option>
                        </select>
                    </div>
                    <div className="item_horario">
                        <label htmlFor="hora">Horário:</label>
                        <input type="time" name="hora" />
                    </div>
                </div> */}
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
    )
}