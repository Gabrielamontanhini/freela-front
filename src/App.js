import Header from "./components/Header";
import styled from "styled-components"
import Cadastro from "./pages/Cadastro";
import Entrar from "./pages/Entrar";
import NovoPost from "./pages/NovoPost";
import Inicial from "./pages/Inicial";
import Seguidores from "./pages/Seguidores";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UsuarioProvider from "./contexts/UsuarioContext";
import Perfil from "./pages/Perfil";
import Busca from "./pages/Busca";
import Seguindo from "./pages/Seguindo";
import Feed from "./pages/Feed";

export default function App() {

  const lsSessao = JSON.parse(localStorage.getItem("sessao"))

  return (
    <ContainerPrincipal>
      <BrowserRouter>
        <UsuarioProvider>
          <Header />
          <Routes>
            <Route path="/eu" element={<Inicial />} />
            <Route path="/entrar" element={<Entrar />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="/seguidores" element={<Seguidores />} />
            <Route path="/seguindo" element={<Seguindo />} />
            <Route path="/busca" element={<Busca />} />
            <Route path="/novo" element={<NovoPost />} />
            <Route path="/" element={<Feed />} />
          </Routes>
        </UsuarioProvider>
      </BrowserRouter>
    </ContainerPrincipal>
  )
}

const ContainerPrincipal = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
background-image: url(https://img.freepik.com/vetores-premium/fundo-rosa-vintage-de-damasco-com-elementos-florais-em-estilo-barroco-gotico-vetor-de-textura-real-eps-10_619989-925.jpg?w=2000);
background-size: auto;
`

