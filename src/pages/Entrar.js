import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { UsuarioContext } from "../contexts/UsuarioContext"


export default function Entrar() {
    const url = `http://localhost:5000`
    const [form, setForm] = useState({ nickname: "", senha: "" })
    const { setSessao } = useContext(UsuarioContext)
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()

    function entrarGatalogo(e) {
        e.preventDefault()
        const body = form
        console.log(body)
        const entrar = axios.post(`${url}/entrar`, body)
        entrar.then((res) => {
            const token = res.data
            setSessao(token)
            localStorage.setItem("sessao", JSON.stringify(token))
            navigate("/eu") })
        entrar.catch((err) => {
            alert(err.response.message)})
    }
    
    function irCadastrar(){
        navigate("/cadastro")
    }


    return (
        <CadastroPagina>
            <div>
                <h1>Login</h1>
            </div>
            <EntrarContainer>
                <form onSubmit={entrarGatalogo}>
                    <input
                        required
                        type="text"
                        placeholder="nickname"
                        name="nickname"
                        value={form.nickname}
                        onChange={handleForm} />
                    <input
                        type="password"
                        name="senha"
                        onChange={handleForm}
                        value={form.senha}
                        placeholder="Senha" />
                    <button type="submit"><h1>Entrar!</h1></button>
                </form>
                <p onClick={irCadastrar}>Não tem conta? Cadastre-se aqui!</p>
            </EntrarContainer>
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

const EntrarContainer = styled.div`
width: 70%;
height: 80%;
box-sizing: border-box;
border: 2px solid black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
form{
    height: 60%;
}
input {
    width: 80%;
    margin-bottom: 3%;
}
p{
    font-size: 20px;
}
`