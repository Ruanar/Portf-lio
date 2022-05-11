import { useHistory } from "react-router-dom";
import { irParaProjetos, irParaSobre } from "../../router/cordinator";
import { CabecalhoPagina, Links, InicialFundo, Contatos, Conteudo } from "./style";
import real108 from '../../video/Realeza108.mp4'
import minhaFoto from '../../img/eu.JPG'

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
                <img src={minhaFoto} alt='Foto da Ruana, que é uma mulher branca, de cabelo curto, castanho claro. 
                Ela usa óculos, uma camisa roxa e uma gravata florida. O fundo é uma parede de madeira, e se pode ver algumas plantas.'/>
                <video
                    autoPlay muted
                    controls
                    loop
                >
                    <source src={real108} type="video/mp4" />
                </video>
            </Conteudo>
        </InicialFundo>
    )
}