import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import styled from "styled-components"



export default function Cadastro() {
    const url = `http://localhost:5000`


    const [form, setForm] = useState({ nome: "", nickname: "", foto: "", biografia: "", senha: "", confirma: "" })

const navigate=useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }



    function cadastrarUsuario(e) {
        e.preventDefault()
        const body = form
        console.log(body)
        const cadastro = axios.post(`${url}/cadastro`, body)
        cadastro.then((res) => {
            console.log(res.data)
            setForm({ nome: "", nickname: "", foto: "", biografia: "", senha: "", confirma: "" })
            navigate("/entrar")
        })
        cadastro.catch((err) => console.log(err.response.message))
    }
function irEntrar(){
    navigate("/entrar")
}

    return (
        <CadastroPagina>
            <div>
                <h1>Cadastro</h1>
            </div>
            <CadastroContainer>
                <form onSubmit={cadastrarUsuario}>
                    <input
                        required
                        placeholder="Nome"
                        name="nome"
                        value={form.nome}
                        onChange={handleForm} />
                    <input
                        required
                        type="text"
                        placeholder="nickname"
                        name="nickname"
                        value={form.nickname}
                        onChange={handleForm} />
                    <input
                    required
                        type="text"
                        placeholder="Foto de Perfil"
                        name="foto"
                        value={form.foto}
                        onChange={handleForm}
                    />
                    <textarea
                    required
                        type="text"
                        name="biografia"
                        onChange={handleForm}
                        value={form.biografia}
                        placeholder="Biografia (até 200 caracteres)" />
                    <input
                    required
                        type="password"
                        name="senha"
                        onChange={handleForm}
                        value={form.senha}
                        placeholder="Senha" />
                    <input
                    required
                        type="password"
                        placeholder="Confirme sua senha" 
                        name="confirma"
                        onChange={handleForm}
                        value={form.confirma}/>

                    <button type="submit" ><h1>Cadastrar!</h1></button>
                </form>
                <p onClick={irEntrar}>Já possui conta? Entre aqui!</p>
            </CadastroContainer>
        </CadastroPagina>
    )
}

const CadastroPagina = styled.main`
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

const CadastroContainer = styled.div`
width: 70%;
height: 80%;
box-sizing: border-box;
border: 2px solid black;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
input {
    width: 80%;
}
textarea{
    height: 30%;
    width: 80%;
}
`