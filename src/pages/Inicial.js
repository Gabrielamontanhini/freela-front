import styled from "styled-components"
import UnidadePost from "../components/UnidadePost"
import { useContext, useEffect, useState } from "react"
import { UsuarioContext } from "../contexts/UsuarioContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Inicial() {
    const url = `http://localhost:5000`
    const { sessao } = useContext(UsuarioContext)
    const [infos, setInfos]=useState({nome: "Carregando", biografia:"Carregando", foto:"https://i.pinimg.com/originals/d2/4d/db/d24ddb8271b8ea9b4bbf4b67df8cbc01.gif"})
const [postagens, setPostagens]=useState([])

const navigate=useNavigate()
    useEffect(()=> {
        const config = { headers: { Authorization: `Bearer ${sessao}` } }
const carregai = axios.get(`${url}/me/posts`, config)
carregai.then((res)=> {
console.log(res.data)
setInfos(res.data[0])
console.log(res.data[0])
setPostagens(res.data[1])
console.log(res.data[1])
})
carregai.catch((err) => console.log(err.response.message))

    }, [])

function navegar(){
    navigate("/novo")
}
function verSeguidores(){
    navigate("/seguidores")
}
function verQuemSigo(){
    navigate("/seguindo")
}



    return (
        <PaginaInicial>
            <Detalhes>
                <Imagem>
                    <Circulo >
                        <img src={infos.foto} alt="foto"/>
                    </Circulo>
                </Imagem>

                <Informações>
                    <h1>
                        {infos.nome}
                    </h1>
                    <div className="descrição">
                    <p>
                       {infos.biografia}
                    </p>
                    </div>
                    <div>
                        <button onClick={verSeguidores}><p> Ver seguidores </p></button>        <button onClick={verQuemSigo}> <p>Ver quem segue</p></button>
                    </div>
                
                </Informações>
            </Detalhes>




            <PostsPerfil>
                {postagens.map((post, index)=> (
                    <UnidadePost
                    foto={post.foto_post}
                    descrição={post.descrição}
                    id={post.id}
                    hora={post.criação}
                    />
                ))}

            </PostsPerfil>
            <BotaoAdicionar onClick={navegar}><ion-icon name="add-circle-outline"></ion-icon></BotaoAdicionar>
        </PaginaInicial>
    )
}
const PaginaInicial = styled.main` 
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
h1{
    color: black;
}
position: relative;
`
const BotaoAdicionar = styled.div`
position: absolute;
bottom: 6%;
right: 10%;
width: 60px;
height: 60px;
border-radius: 50%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
ion-icon{
    font-size: 300px;
    color: white;
}
`

const Detalhes = styled.div`
display: flex;
width: 60%;
height: 25%;
border: 3px solid black;
background-color: rgba(255,250,250, 0.5);
box-sizing: border-box;
`
const Imagem = styled.div`
width: 30%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Circulo = styled.div`
width: 180px;
height: 180px;
border-radius: 50%;
border: 3px solid black;
overflow: hidden;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
img{
    height: 100%;
}
`
const Informações = styled.div`
padding: 2% 5%;
display: flex;
flex-direction: column;
justify-content: space-around;
div{
    width: 50%;
    margin-top: 4%;
    display: flex;
    justify-content: space-between;
}
button{
    width: 300px;
    height: max-content;
    margin-left: 5%;
}
p{
    color: black;
}
.descrição{
    width: 60%;
    height: fit-content;
}
`
const PostsPerfil = styled.div`
width: 60%;
height: 70%;
overflow-y: scroll;
`