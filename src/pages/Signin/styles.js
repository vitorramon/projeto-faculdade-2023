import styled from "styled-components";

export const SigninContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 50%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 18px;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div h1 {
        padding-bottom: 25px;
        width: 100%;
        text-align: center;
        font-size: 20px;
        text-transform: uppercase;
    }

    img{ 
        width: 200px;
        padding: 25px 0px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 90%;
    }

    form input {
        margin: 10px;
        height: 35px;
        width: 100%;
    }

    form button {
        margin: auto;
        height: 35px;
        text-transform: uppercase;
    }

    a {
        padding: 20px;
    }
`