import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth/index'
import logo from '../../assets/logo.png'
import { Nav } from './styles'

const Header = () => {
    const {user, signIn, signOut } = useAuth()
    const navigate = useNavigate();

    return (
        <Nav>
            <div>
                <img src={logo} alt="logotipo" />
                <span>Faculdade Martha Falcão</span>
            </div>
           
            <div>
                <Link to='/'>Início</Link>
                <Link to='/about'>Sobre</Link>
            </div>

            <div>

                {
                    user?.id ? <> 
                        Olá, {user.usu_nome}
                        <button onClick={signOut}>Sair</button>
                    </> : 
                        <button onClick={()=> navigate('/signin')}> Entrar </button>
                     
                }
            </div>
        </Nav>
    )
}

export default Header 