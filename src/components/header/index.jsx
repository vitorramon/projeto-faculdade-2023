import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Nav } from './styles'

const Header = () => {
    return (
        <Nav>
            <div>
                <img src={logo} alt="logotipo" />
            </div>
            <span>Faculdade Martha Falcão</span>
            <div>
                <Link to='/'>Início</Link>
                <Link to='/about'>Sobre</Link>
            </div>
        </Nav>
    )
}

export default Header 