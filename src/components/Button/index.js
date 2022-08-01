import './styles.css';

import icone_red from '../../assets/icon/apito-red.svg';
import icone_blue from '../../assets/icon/apito-blue.svg';
import axios from 'axios';


export const Button = (props) => {
    // const handleRequest = async (datas, req) => {
    //     // alert(JSON.stringify(datas))
    //     // alert(req)
    //     if (req === 'registroCampo') {
    //         let res = await axios.post({
    //             'method': 'POST',
    //             'url': 'http://localhost:8080/espacos',
    //             'user': datas
    //         })
    //         if (res.status) {
    //             alert(res.espacos)
    //             // history.push("/home");
    //             // window.location.reload();
    //         } else {
    //             alert("[ERROR - Usuário ou senha invalido]")
    //         }
    //     }
    // }


    return (
        <>
            {props.type === 1 && (
                <>
                    <button className='red'>
                        <img src={icone_red} alt="icone ifoot" />
                        {props.msg}
                    </button>
                </>
            )} {props.type === 0 && (
                <>
                    {/* <button className='blue' onClick={() => { handleRequest(props.register, props.request) }}> */}
                    <button className='blue'>
                        <img src={icone_blue} alt="icone ifoot" />
                        {props.msg}
                    </button>
                </>
            )} {props.type === 2 && (
                <>
                    {/* <button className='red' style={{ justifyContent: "center" }} onClick={() => { handleRequest(props.register, props.request) }}> */}
                    <button className='red' style={{ justifyContent: "center" }}>
                        {props.msg}
                    </button>
                </>
            )}{props.type === 3 && (
                <>
                    {/* <button className='blue' style={{ justifyContent: "center" }} onClick={() => { handleRequest(props.register, props.request) }}> */}
                    <button className='blue' style={{ justifyContent: "center" }}>
                        {props.msg}
                    </button>
                </>
            )}
        </>
    )
}