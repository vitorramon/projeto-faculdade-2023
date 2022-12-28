import { SignupContainer, Content } from "./styles"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Signup = () => {
    return (<>
        <SignupContainer>
            <Content>
                <img src={logo} alt='logotipo'/>
                <div>
                    <h1>Cadastrar-se</h1>
                    <form>
                        <input placeholder='Nome Completo' />
                        <input placeholder='E-mail' type='email'/>
                        <input placeholder='Senha' type='password'/>
                        <input placeholder='Confirme sua senha' type='password'/>
                        <button> Acessar </button>
                    </form>
                </div>
                <Link to='/signin'> Voltar </Link>
            </Content>
        </SignupContainer>
        </>
    )
}

export default Signup