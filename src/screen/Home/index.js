import { Button } from '../../components/Button';

import './styles.css';
import icon from '../../assets/icon/apito.svg';
import illustration from '../../assets/illustration.png';


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
                <Button tipo={1} msg="Login - Já tenho conta" />
                <Button tipo={0} msg="Register - Criar conta" />
            </section>
        </div>
    )
}