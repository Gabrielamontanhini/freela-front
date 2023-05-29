import { styled } from "styled-components"
import { UsuarioContext } from "../contexts/UsuarioContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"

export default function UnidadePost({foto, descrição, id, postador, hora}){
const body = {id: id, postador: postador}
const [curtidas, setCurtidas] = useState("carregando...")
const url = `http://localhost:5000`
const { sessao } = useContext(UsuarioContext)



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


    return (
        <Post>
            <div className="imagem" key={id}>
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
background-color: rgba(255,250,250, 0.5);
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
box-sizing: border-box;
margin-bottom: 5%;
.imagem{
    width: 80%;
    height: 65%;
    border: 3px solid black;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
img{
    height: 120%;
}
.detalhes {
    width: 80%;
    height: 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.descrição{
    width: 80%;
    height: 20%;
}
`