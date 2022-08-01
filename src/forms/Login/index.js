import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <form action="POST" id="singIn" className="signIn">
            <div className="modal">
                <a href="#close" title="Close" className="Close">
                    {/* <i className="ph-x"></i> */}
                </a>
                <div className="ifoot">
                    <img src="../assets/icon/apito.svg" alt="iFoot" />
                    <h1>iFoot</h1>
                </div>
                <div className="label_input">
                    <label htmlFor="user">Nome: </label>
                    <input type="text" name="user" id="user" placeholder="Digite o nome do seu usuário" />
                </div>
                <div className="label_input">
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" />
                </div>
                <div className="button">
                    <button className='red confirm' style={{ justifyContent: "center" }} title="Login">Entrar</button>
                    <Link to='/home' title="Close" className="Close">
                        <button className='blue close' style={{ justifyContent: "center" }} title="Close">Sair</button>
                    </Link>
                </div>
            </div>
        </form>
    )
}