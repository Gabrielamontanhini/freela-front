
import { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"


import axios from "axios"
import PostFeed from "../components/PostFeed"
import { UsuarioContext } from "../contexts/UsuarioContext"
import {  useNavigate } from "react-router-dom"

export default function Feed(){
    const url = `http://localhost:5000`
const [postagens, setPostagens]=useState([])
const { sessao } = useContext(UsuarioContext)
const navigate = useNavigate()
useEffect(()=> {
    if (!sessao){
    return navigate("/entrar")
    }
    const feedtotal = axios.get(`${url}/feed`)
    feedtotal.then((res)=> {
        console.log(res.data)
        setPostagens(res.data)
    })
    feedtotal.catch((err)=> console.log(err.response.data))
}, [])

    return <MeuFeedEstilizado>  
        
         <PostsPerfil>
    {postagens.map((post)=> (
        <PostFeed
        avatar={post.foto}
        nome={post.nome}
        foto={post.foto_post}
        descrição={post.descrição}
        id={post.id}
        id_postador={post.postador}
        hora={post.criação}
        />
    ))}

</PostsPerfil>
</MeuFeedEstilizado>
}



const MeuFeedEstilizado = styled.main` 
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
h1{
    color: black;
}
position: relative
`

const PostsPerfil = styled.div`
width: 60%;
height: 100%;
overflow-y: scroll;

`