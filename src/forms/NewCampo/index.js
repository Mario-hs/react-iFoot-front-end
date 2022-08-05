import { Link } from "react-router-dom";
import { X } from "phosphor-react";
import { Button } from "../../components/Button";
import history from "../../routes/history";
import auth from "../../context/auth";
import { useEffect, useState } from "react";

export const NewCampo = ({ parentCallback }) => {
    const handleSubmit = () => {

    }

    const CloseModal = (event) => {
        parentCallback();
        event.preventDefault();
    }

    return (
        <div className="relatorio_espaco">
            <form action="" className="container_form">
                <Link to='/' className="icon_close" onClick={(e) => {
                    CloseModal(e)
                }}>
                    <X size={25} color="#dde3f0" weight="fill" />
                </Link>
                <h1>Criar Horário</h1>
                <label htmlFor="nome" className="nome_span">Nome do campo:<span>max 50 caracteres</span></label>
                <input type="text" name="nome" placeholder="exemplo" />
                <label htmlFor="tipo_campo">Tipo de campo:</label>
                <div className="wrapper">
                    <label htmlFor="campo" className="group-option"><span>Campo</span>
                        <input type="radio" className="option" name="tipo_cadastro" id='campo' value="campo"
                            defaultChecked />
                    </label>
                    <label className="group-option" htmlFor="fustal"><span>Fustal</span>
                        <input type="radio" className="option" name="tipo_cadastro" id="fustal" value="futsal" />
                    </label>
                    <label className="group-option" htmlFor="society"><span>Society</span>
                        <input type="radio" className="option" name="tipo_cadastro" id="society" value="society" />
                    </label>
                </div>

                <div className="flex_itens">
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
                </div>
                <label htmlFor="valor_uni">Valor unitário</label>
                <input type="number" name="valor_unit" placeholder="20.00" />
                <label htmlFor="valor_mes">Valor mensal</label>
                <input type="number" name="valor_mes" placeholder="200.00" />
                <label htmlFor="valor_ano">Valor anual</label>
                <input type="number" name="valor_ano" placeholder="2000.00" />
                <div className="buttons">
                    <Button type={3} msg={"Salvar"} />
                    <Button type={2} msg={"Fechar"} />
                </div>
            </form>
        </div>
    )
}