import { Content, SigninContainer } from './styles';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'


const Signin = () => {
    return (<>
        <SigninContainer>
            <Content>
                <img src={logo} alt='logotipo'/>
                <div>
                    <h1>Acessar Site</h1>
                    <form>
                        <input placeholder='Usuário' />
                        <input placeholder='Senha' type='password'/>
                        <button> Acessar </button>
                    </form>
                </div>
                <Link to='/signup'> Cadastrar-se </Link>
            </Content>
        </SigninContainer>
        </>
    )
}

export default Signin 