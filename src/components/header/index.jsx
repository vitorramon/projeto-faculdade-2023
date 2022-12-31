import { Link ,useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth/index'
import logo from '../../assets/logo.png'
// import { Nav } from './styles'
import { Container, Navbar, Nav } from 'react-bootstrap'


const Header = () => {
    const {user, signIn, signOut } = useAuth()
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to = '/' >
                    <img src={logo} alt="logotipo" width={150} className = 'me-3' />
                    Faculdade Martha Falcão
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Nav.Link as={Link} to="/">Início</Nav.Link>
                    <Nav.Link as={Link} to ='/about'>Sobre</Nav.Link>
                    </Nav>
                    <Nav>
                        {user?.id ? (
                            <> 
                               <Navbar.Brand> Olá, {user.usu_nome} </Navbar.Brand>
                                <button onClick={signOut}>Sair</button>
                            </>
                            ) : (
                                <button onClick={()=> navigate('/signin')}> Entrar </button>
                            )}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header 