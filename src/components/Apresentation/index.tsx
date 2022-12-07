import { ApresentationStyled } from "./styles"
import profile from "../../assets/img/foto-perfil.jpg"
import { ScrollIndication } from "./ScrollIndication"



export const Apresentation = () =>{

    return(
        <ApresentationStyled>
            <div className="infoArea">
            <div className="infoArea__textArea">
                <h1>Olá, me chamo Ismael</h1>
                <p>Sou desenvolvedor front-end e esse é meu Road-Map.
                    <br/>
                    Caso ainda não tenha visto meu portifólio
                    <br/>
                    fique a vontade para navegar pelas minhas mídias no cabeçalho.
                </p>
            </div>

            <div className="infoArea__imageArea">
                <img src={profile} alt="imagem de ismael em frente ao espelho" />
            </div>
            </div>
            <ScrollIndication/>
        </ApresentationStyled>
    )
}