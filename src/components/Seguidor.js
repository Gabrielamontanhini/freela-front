import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Seguidor({foto, nome, biografia, id}) {

const navigate = useNavigate()
const esse = id

function verPerfil(){
    navigate(`/perfil/${id}`)
}
    return (
        <ContainerSeguidor onClick={verPerfil}>
            <div className="container">
                <FotoRedonda>
                    <img src={foto} alt="foto" />
                </FotoRedonda>
            </div>
            <div className="info">
                <h1>{nome}</h1>
                <p>{biografia}</p>
            </div>
        </ContainerSeguidor>
    )
}

const ContainerSeguidor = styled.div`
width: 100%;
height: 16vh;
box-sizing: border-box;
border: 3px solid black;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-bottom: 2%;
.container{
width: 15%;
display: flex;
align-items:center ;
justify-content: center;
}
.info{
    width: 80%;
    height: 70%;
}
h1{
    margin-bottom: 1%;
}
`

const FotoRedonda = styled.div`
width: 130px;
height: 130px;
border-radius: 50%;
background-color: red;
border: 2px solid black;
box-sizing: border-box;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 130%;
}
`