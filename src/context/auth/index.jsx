import { createContext, useContext, useState } from "react"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const signIn = (user, password) => {
        setUser({id: 1, usu_nome: user});
    }   

    const signOut = () => {
        setUser({});
    }

    return (
    <>
        <AuthContext.Provider value={{user, signIn, signOut}}> 
        {/* {user?.id ? "logado" : "Não estou logado"}
        <button onClick={signIn} >Entrar</button>
        <button onClick={signOut} >Sair</button> */}
        {children} </AuthContext.Provider>
    </>
    )
}

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    if(!authContext) 
        throw new Error ("useAuth must by used within AuthProvider")
    return authContext;
}