import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { UsuarioContext } from "../contexts/UsuarioContext"
import axios from "axios"

export default function Header(){
    const url = `http://localhost:5000`
    const { sessao } = useContext(UsuarioContext)

const [display, setDisplay]=useState("none")
const [hidden, setHidden]=useState("flex")

    const navigate = useNavigate()
    function paginaInicial(){
        navigate("/")
    }
function pesquisar(){
    navigate("/busca")
}

function verPerfil(){
    navigate("/eu")
}

function sair(){
    const config = { headers: { Authorization: `Bearer ${sessao}` } }
    const sair = axios.delete(`${url}/sair/sessoes`, config)
    sair.then((res)=> navigate("/entrar"))
    sair.catch((err)=> console.log(err.response.message))
    
}

function verFeed(){
    navigate("/")
}

function mostrarMenu(){
    console.log("mostraaaa")
    console.log({display})
    setDisplay("flex")
    setHidden("none")
    if (display == "flex") {
        setDisplay("none")
        setHidden("flex")}
}
function escondeMenu(){
    console.log("escondermenu")
    setHidden("flex")
    setDisplay("none")
}

    return (
        <HeaderEstilizado>
        <div onClick={paginaInicial}>
            <h1>Gatálogo</h1>
        </div>
        <MostraMenu hidden={hidden} onClick={mostrarMenu}>
        <ion-icon name="ice-cream-outline"></ion-icon>
        </MostraMenu >
        <Menu display={display}>
            <li className="icone" onClick={pesquisar}> 
            <p>Pesquisar</p>
            <ion-icon name="search-circle-outline"></ion-icon>
            </li>
            <li className="icone" onClick={verPerfil}>
                <p>Perfil</p>
                <ion-icon name="person-outline"></ion-icon>
            </li>
            <li onClick={verFeed}>
                <p>Feed</p>
                <ion-icon name="arrow-up-circle-outline"></ion-icon>
            </li>
            <li className="icone" onClick={sair}>
                <p>Sair</p>
                <ion-icon name="walk-outline"></ion-icon></li>
            </Menu>
            <EscondeMenu onClick={escondeMenu} display={display}>
            <ion-icon name="ice-cream-outline"></ion-icon>
            </EscondeMenu>
        </HeaderEstilizado>
    )
}

const HeaderEstilizado = styled.header`
width: 100%;
height: 10%;
background-color: lavenderblush;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid black;
box-sizing: border-box;
h1{
    margin-left: 10%;
    color: black;
}
`

const MostraMenu = styled.div`
position: absolute;
display: ${props => props.hidden};
top: 10%;
left: 0;
border: 2px solid black;
box-sizing: border-box;
width: fit-content;
height: fit-content;
background-color: aliceblue;
z-index: 2;
ion-icon{
    font-size: 40px;
}
`

const EscondeMenu = styled.div`
position: absolute;
top: 10%;
left: 8%;
border: 2px solid black;
box-sizing: border-box;
display: ${props => props.display};
background-color: darkslategrey;
ion-icon{
    font-size: 40px;
}
`

const Menu = styled.ul`
background-color: lavenderblush;
position: absolute;
display: ${props => props.display};
flex-direction: column;
align-items: center;
top: 10%;
left: 0;
width: 8%;
height: 30vh;
border: 2px solid black;
box-sizing: border-box;
z-index: 1;
li{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
}
ion-icon{
    font-size: 40px;
}
`