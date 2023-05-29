import styled from "styled-components"
import Seguidor from "../components/Seguidor"
import { UsuarioContext } from "../contexts/UsuarioContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"

export default function Seguindo() {
    const url = `http://localhost:5000`
    const { sessao } = useContext(UsuarioContext)
    const [seguidores, setSeguidores] = useState([{ foto: "a", nome: "a", biografia: "a" }])

    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${sessao}` } }
        const seguidores = axios.get(`${url}/seguindo`, config)
        seguidores.then((res) => {
            console.log(res.data)
            
           setSeguidores(res.data)
        })
        seguidores.catch((err) => console.log(err.response.message))
    }, [])


    function realizarTeste() {
        alert(seguidores[2].nome)
    }
    console.log(seguidores)
    return (
        <PaginaSeguidores>
            <div className="titulo">
                <h1 onClick={realizarTeste}>Quem eu sigo</h1>
            </div>
            <ContainerSeguidores>
                {seguidores.map((s) => (
                    <Seguidor
                        nome={s.nome}
                        foto={s.foto}
                        biografia={s.biografia}
                        id={s.seguido}
                    />
                ))}

            </ContainerSeguidores>
        </PaginaSeguidores>
    )
}

const PaginaSeguidores = styled.main`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
.titulo{
    height: 10%;
    display: flex;
    align-items: center;
}
h1{
    color: black;
}
`

const ContainerSeguidores = styled.div`
width: 60%;
height: 85%;
overflow-y: scroll;
`