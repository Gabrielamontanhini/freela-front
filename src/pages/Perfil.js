import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import UnidadePost from "../components/UnidadePost"
import { UsuarioContext } from "../contexts/UsuarioContext"

export default function Perfil() {
    const url = `http://localhost:5000`
    const { id } = useParams()

    const [infos, setInfos] = useState({ nome: "Carregando", biografia: "Carregando", foto: "https://i.redd.it/7iyjin6f64561.jpg" })
    const [postagens, setPostagens] = useState([])
    const navigate = useNavigate()
    const { sessao } = useContext(UsuarioContext)
    const [seguir, setSeguir] = useState("Seguir!")

    useEffect(() => {

        const teste = axios.get(`${url}/perfil/${id}`)
        teste.then((res) => {

            setInfos(res.data[0])

            setPostagens(res.data[1])
            console.log(res.data[1])

        })
        teste.catch((err) => console.log("vsf"))
    })

    function seguirEste(id) {
        const config = { headers: { Authorization: `Bearer ${sessao}` } }
        const seguir = axios.post(`${url}/seguir/${id}`, id, config)
        seguir.then((res) => {
            console.log(res.data)
            setSeguir("Seguindo")
        })
        seguir.catch((err) => console.log(id))
    }


    return (
        <PaginaInicial>
            <Detalhes>
                <Imagem>
                    <Circulo >
                        <img src={infos.foto} alt="foto" />
                    </Circulo>
                </Imagem>

                <Informações>
                    <h1>{infos.nome}
                    </h1>
                    <p>
                        {infos.biografia}
                    </p>
                    <div>
                        <button onClick={() => seguirEste(id)}>{seguir}</button>
                    </div>
                </Informações>
            </Detalhes>
            <PostsPerfil>
                {postagens.map((post, index) => (
                    <UnidadePost
                        foto={post.foto_post}
                        descrição={post.descrição}
                        id={post.id}
                        postador={post.postador}
                        hora={post.criação}
                    />
                ))}

            </PostsPerfil>
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
background-color: rgba(255,250,250, 0.5);
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
background-color: rgba(255,250,250, 0.5);
div{
width: 50%;
margin-top: 4%;
display: flex;
justify-content: space-between;
}
`
const PostsPerfil = styled.div`
width: 60%;
height: 70%;
overflow-y: scroll;
`
