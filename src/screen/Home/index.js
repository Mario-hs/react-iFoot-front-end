import { Button } from '../../components/Button';

import './home.screen.css';
import icon from '../../assets/icon/apito.svg';
import illustration from '../../assets/illustration.png';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div className='container'>
            <header>
                <h1>iFoot</h1>
                <img src={icon} alt="icone ifoot" />
            </header>
            <section className='box-left'>
                <img src={illustration} alt="" />
                <p>Te ajudando a encontrar e organizar a sua pelada de todo dia.</p>
            </section>
            <section className='box-right'>
                <h1>
                    Conecte-se <br />
                    e organize sua <br />
                    pelada br
                </h1>
                <p>Crie grupo para jogar suas peladas <br />reserve o campo sem dificuldades.</p>
                <Link to='/login'>
                    <Button type={1} value='login' msg="Login - Já tenho conta" />
                </Link>
                <Link to='/register'>
                    <Button type={0} value='register' msg="Register - Criar conta" />
                </Link>
            </section>
        </div>
    )
}