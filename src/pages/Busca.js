import styled from "styled-components"
import Seguidor from "../components/Seguidor"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Busca() {
    const url = `http://localhost:5000`
    const [search, setSearch] = useState("")
    const searchLowerCase = search.toLocaleLowerCase()
    const [usuarios, setUsuarios] = useState([{foto: "https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",nome: "Caralho", biografia: "QUero q vc se foda", id: "7"},
        {foto: "https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",nome: "Fodaase", biografia: "QUero q vc se foda", id: "7"},
        {foto: "https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",nome: "Babidi", biografia: "QUero q vc se foda", id: "7"}])

    const pesquisador = usuarios.filter((usuario) => usuario.nome.toLocaleLowerCase().includes(searchLowerCase));


    useEffect(()=> {
        const carregar = axios.get(`${url}/usuarios`)
        carregar.then((res) => {
            setUsuarios(res.data)
        })
        carregar.catch((err) => console.log(err.response.message))
    }, [])

    return (
        <PaginaSeguidores>
            <div className="titulo">
                <input type="search"
                    placeholder="Pesquise aqui usuarios"
                    name="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)} />
            </div>



            <ContainerSeguidores>
                {pesquisador.map((s) => (
                    <Seguidor
                        nome={s.nome}
                        foto={s.foto}
                        biografia={s.biografia}
                        id={s.id}
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
    width: 70%;
    display: flex;
    align-items: center;
}
h1{
    color: black;
}
input{
    border: 2px solid black;
}
`

const ContainerSeguidores = styled.div`
width: 60%;
height: 85%;
overflow-y: scroll;
`