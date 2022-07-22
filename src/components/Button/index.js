import './styles.css';

import icone_red from '../../assets/icon/apito-red.svg';
import icone_blue from '../../assets/icon/apito-blue.svg';


export const Button = (props) => {
    return (
        <>
            {props.tipo === 1 && (
                <>
                    <button className='red'>
                        <img src={icone_red} alt="icone ifoot" />
                        {props.msg}
                    </button>
                </>
            )} {props.tipo === 0 && (
                <>
                    <button className='blue'>
                        <img src={icone_blue} alt="icone ifoot" />
                        {props.msg}
                    </button>
                </>
            )} {props.tipo === 2 && (
                <>
                    <button className='red' style={{ justifyContent: "center" }}>
                        {props.msg}
                    </button>
                </>
            )}{props.tipo === 3 && (
                <>
                    <button className='blue' style={{ justifyContent: "center" }}>
                        {props.msg}
                    </button>
                </>
            )}
        </>
    )
}