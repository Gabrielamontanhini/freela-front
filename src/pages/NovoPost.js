import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import { UsuarioContext } from "../contexts/UsuarioContext"
import { useNavigate } from "react-router-dom"

export default function NovoPost() {
    const url = `http://localhost:5000`
    const [form, setForm] = useState({ foto_post: '', descrição: '', hora: '' })
    const { sessao } = useContext(UsuarioContext)
    const navigate = useNavigate()
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function fazerNovaPostagem(e){
        e.preventDefault()
        const body = form
        console.log(body)
        const config = { headers: { Authorization: `Bearer ${sessao}` } }
        const enviarPost = axios.post(`${url}/post`, body, config)
        enviarPost.then((res)=>{
           setForm({ foto_post: '', descrição: '' })
           navigate("/eu")
        })
        enviarPost.catch((err) => console.log(err.response.message))

    }

    return (
        <NovoPostPage>
            <div>
                <h1>
                    Novo Post
                </h1>
            </div>
            <NovoPostContainer>
                <form onSubmit={fazerNovaPostagem}>
                    <input
                        required
                        name="foto_post"
                        value={form.foto_post}
                        onChange={handleForm}
                        placeholder="Foto"
                    />
                    <input
                        type="Textarea"
                        name="descrição"
                        value={form.descrição}
                        onChange={handleForm}
                        placeholder="Descrição"
                    />
                    <button>Criar Post</button>
                </form>
            </NovoPostContainer>
        </NovoPostPage>
    )
}

const NovoPostPage = styled.main`
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

const NovoPostContainer = styled.div`
width: 70%;
height: 80%;
box-sizing: border-box;
border: 2px solid black;
display: flex;
flex-direction: column;
justify-content: space-evenly;
input {
    width: 80%;
}
`