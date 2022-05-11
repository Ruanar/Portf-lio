import { useHistory } from "react-router-dom";
import { irParaProjetos, irParaSobre } from "../../router/cordinator";
import { CabecalhoPagina, Links, InicialFundo, Contatos, Conteudo } from "./style";
import real108 from '../../video/Realeza108.mp4' 

export default function PaginaInicial() {
    const history = useHistory()
    return (
        <InicialFundo>
            <CabecalhoPagina>
                <Links>
                    <p onClick={() => irParaSobre(history)}>Quem sou eu</p>
                    <p onClick={() => irParaProjetos(history)} >Meus projetos</p>
                </Links>
            </CabecalhoPagina>
            <Conteudo>
                <video
                    autoplay muted
                    controls
                    loop
                >
                    <source src={real108} type="video/mp4"/>
                </video>
            </Conteudo>
        </InicialFundo>
    )
}