import { styled } from "styled-components"
import { UsuarioContext } from "../contexts/UsuarioContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function PostFeed({avatar, nome, foto, descrição, id, postador, id_postador, hora}){
const body = {id: id, postador: postador}
const [curtidas, setCurtidas] = useState("carregando...")
const url = `http://localhost:5000`
const { sessao } = useContext(UsuarioContext)

const navigate = useNavigate()

function fazIsso(){
    console.log(body)
    const config = { headers: { Authorization: `Bearer ${sessao}` } }
const curte = axios.post(`${url}/curtir`, body, config)
curte.then((res) => console.log(res.data))
curte.catch((err)=> console.log(err.message))
}
useEffect(()=> {
const carregacurtidas = axios.get(`${url}/curtir/${id}`)
carregacurtidas.then((res) => setCurtidas(res.data.length))
carregacurtidas.catch((err)=> console.log(err.message))
}, [curtidas])

function irParaEsse(){
    navigate(`/perfil/${id_postador}`)
}
    return (
        <Post>
            <div className="avatar" key={id} onClick={irParaEsse}> 
              <Circulo > 
                <img src={avatar} alt="avatar"/> 
               </Circulo>
               <h1>{nome}</h1>
            </div>
            <div className="imagem" >
                <img src={foto}/>
            </div>
            <div className="detalhes">
                <p onClick={fazIsso}> <ion-icon name="heart"></ion-icon> {curtidas} pessoas custiram isso!</p>
                <p>{hora}</p>
            </div>
            <div className="descrição">
                <p>{descrição}</p>
            </div>
        </Post>
    )
}

const Post = styled.div`
width: 100%;
height: 40vh;
min-height: fit-content;
background-color: rgba(255,250,250, 0.5);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
border: 3px solid black;
box-sizing: border-box;
margin-bottom: 5%;
.avatar{
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
}
.imagem{
    width: 100%;
    height: 75%;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img{
    width: 70%;
}
}
.detalhes {
    min-height: fit-content;
    width: 80%;
    height: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.descrição{
    width: 75%;
    height: 11%;
    min-height: fit-content;
}
`


const Circulo = styled.div`
width: 80px;
margin-left: 2%;
margin-right: 2%;
margin-top: 3%;
height: 80px;
border-radius: 50%;
border: 3px solid black;
overflow: hidden;
box-sizing: border-box;
z-index: 1;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
img{
    height: 100%;
}
`