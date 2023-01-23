import { SignupContainer, Content } from "./styles"
import logo from "../../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

import {api} from '../../utils/api'
import { object, string, ref } from "yup"


const Signup = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [contrasenha, setContrasenha] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        let usuario = {
            usu_nome: nome.trim(),
            usu_email: email.trim(),
            usu_senha: senha.trim(),
            usu_contrasenha: contrasenha.trim()
        };

        let usuarioSchema = object({
            usu_nome: string()
                .required("Entre com o nome")
                .min(7, "O nome tem que ter no mínimo 7 caracteres")
                .matches(/\s/, "O nome tem que ter pelo menos um espaço"),
            
            usu_email: string()
                .email("Entre com um e-mail válido")
                .required("Entre com um e-mail"),

            usu_senha: string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, "A senha deve ter 6 caracteres com pelo menos: 1 maiúsculo, 1 minúsculo, 1 número e um 1 caracter especial"),
            
            usu_contrasenha: string()
                .required("Entre com a contrasenha")
                .oneOf(
                    [ref("usu_senha"), null], 
                    "Senha e contrasenha devem ser iguais"
                )
        });

        try {
            await usuarioSchema.validate(usuario)
        } catch (error) {
            alert(error.message);
            return false
        }

        delete usuario.usu_contrasenha;

        const page = await api ( {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (parseInt(page.status, 10) !== 201){
            throw new Error (`Erro de servidor: ${(await page.json()).error}`)
        }

        const data = page.json();

        if (data.length === 0) throw new Error('Erro de servidor');

        setNome('')
        setEmail ('') 
        setSenha('')
        setContrasenha('')

        alert('Verifique seu e-mail');

        navigate('/')
    }

    return (<>
        <SignupContainer>
            <Content>
                <img src={logo} alt='logotipo'/>
                <div>
                    <h1>Cadastrar-se</h1>
                    <form>
                        <input 
                            placeholder='Nome Completo' 
                            value={nome} 
                            onChange={e=>setNome(e.target.value)} />

                        <input 
                            placeholder='E-mail' 
                            type='email' 
                            value={email} 
                            onChange={e=>setEmail(e.target.value)} />

                        <input 
                            placeholder='Senha' 
                            type='password'
                            value={senha} 
                            onChange={e=>setSenha(e.target.value)}/>

                        <input 
                            placeholder='Confirme sua senha' 
                            type='password'
                            value={contrasenha} 
                            onChange={e=>setContrasenha(e.target.value)} />

                        <button type="submit" onClick={handleSubmit} > Acessar </button>
                    </form>
                </div>
                <Link to='/signin'> Voltar </Link>
            </Content>
        </SignupContainer>
        </>
    )
}

export default Signup