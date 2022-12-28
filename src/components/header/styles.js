import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    background-color: rgb(100, 100, 100);
    width: 80%;
    margin: auto auto;
    height: 100px;
    align-items: center; 
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    min-width: 700px;

    div {
        align-items: center;
        display: flex;
    }

    div img {
        width: 150px;
        margin-right: 15px;
    }

    span {
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
    }

    div a {
        text-decoration: none;
        text-transform: uppercase;
        margin-left: 10px;
        color: black;
    }

    div a:hover {
        font-weight: bold;
        cursor: pointer;
        color: white;
    }
  
`