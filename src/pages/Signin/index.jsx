import { Content, SigninContainer } from './styles';
import { useAuth } from '../../context/Auth/index'
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Signin = () => {

    const {signIn} = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const acessarHandle = (evt) => {
        evt.preventDefault();

        try{
            signIn({user, password})
            navigate('/');
        } catch (error){
            console.log('Erro de Login');
            setUser('');
            setPassword('');
        }
    }

    return (<>
        <SigninContainer>
            <Content>
                <img src={logo} alt='logotipo'/>
                <div>
                    <h1>Acessar Site</h1>
                    <form>
                        <input value={user} onChange = {(evt) => setUser(evt.target.value)} placeholder='Usuário' />
                        <input value={password} onChange = {(evt) => setPassword(evt.target.value)} placeholder='Senha' type='password'/>
                        <button onClick={acessarHandle}> Acessar </button>
                        
                    </form>
                </div>
                <Link to='/signup'> Cadastrar-se </Link>
            </Content>
        </SigninContainer>
        </>
    )
}

export default Signin 