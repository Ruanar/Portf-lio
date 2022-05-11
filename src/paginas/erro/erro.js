import { useHistory } from "react-router-dom"
import { irParaInicio, irParaProjetos, irParaSobre } from "../../router/cordinator"
import { CabecalhoPagina, Conteudo, ErroFundo, Links, TextoBranco, TextoPreto, VoltarAoTopo } from "./style"

export default function PaginaDeErro() {
    const history = useHistory()
    return (
        <ErroFundo>
            <CabecalhoPagina>
                <Links>
                    <p onClick={() => irParaInicio(history)}>Página Inicial</p>
                    <p onClick={() => irParaSobre(history)}>Quem sou eu</p>
                    <p onClick={() => irParaProjetos(history)} >Meus projetos</p>
                </Links>
            </CabecalhoPagina>
            <Conteudo>
                <h1>404<br />Página não encontrada!</h1>
                <h3>Mas, já que estamos aqui, não custa vermos umas informações totalmente aleatórias, né?</h3>
                <section>
                    <TextoPreto>
                        <p>A <b>Etiópia</b> é o único país africano que nunca foi colonizado por outras nações, o que
                            levou as cores de sua bandeira a se tornarem símbolos <b>pan-africanos</b>.</p>
                    </TextoPreto>
                    <TextoBranco>
                        <p>O <b>Sol</b> concentra mais de 99,85% da massa de todo o Sistema Solar.</p>
                    </TextoBranco>
                    <TextoPreto>
                        <p>A futebolista <b>Formiga</b> é a única pessoa, na história, a ter participado, como atleta, de sete Copas do Mundo e Jogos Olímpicos.</p>
                    </TextoPreto>
                    <TextoBranco>
                        <p>O gás de cozinha é naturalmente inodoro e, por isso, adiciona-se <b>mercaptano</b> para facilitar a detecção de vazamentos.</p>
                    </TextoBranco>
                    <TextoPreto>
                        <p>Além da <b>Terra</b>, já foi confirmada a ocorrência de <b>raios</b> em diversos outros planetas do Sistema Solar.</p>
                    </TextoPreto>
                    <TextoBranco>
                        <p><b>IC 1101</b> é a maior galáxia conhecida, com cerca de seis milhões de anos-luz de diâmetro. </p>
                    </TextoBranco>
                    <TextoPreto>
                        <p>Se emendássemos todos os vasos sanguíneos do corpo humano, teríamos uma linha de cerca de cem mil quilômetros, o suficiente para dar duas voltas e meia ao redor da Terra.</p>
                    </TextoPreto>
                    <TextoBranco>
                        <p>São necessárias de 1300 a 2000 azeitonas para produzir apenas 250 mililitros de azeite.</p>
                    </TextoBranco>
                    <TextoPreto>
                        <p>Desde que foi descoberto em 1930, <b>Plutão</b> ainda não completou uma volta ao redor do Sol, o que fará apenas em 2178.</p>
                    </TextoPreto>
                    <TextoBranco>
                        <p>O anfíbio <i>Mercurana myristicapalustris</i> e o inseto <i>Heteragrion freddiemercuryi</i> foram assim denominados em homenagem ao cantor e compositor <b>Freddie Mercury</b>.</p>
                    </TextoBranco>
                    <TextoPreto>
                        <p> <b>Porto Velho</b> é a única capital de um estado brasileiro que faz fronteira com outro país, no caso, com a <b>Bolívia</b>.</p>
                    </TextoPreto>
                    <TextoBranco>
                        <p>O planeta <b>Urano</b> foi descoberto 39 anos antes da <b>Antártida</b>.</p>
                    </TextoBranco>
                    <TextoPreto>
                        <p> Apesar de a <b>banana</b> conter pequeno teor de radioatividade, grandes carregamentos da fruta em navios podem disparar detectores de radiação.</p>
                    </TextoPreto>
                    <TextoBranco>
                        <p>Após a estrela <b>Betelgeuse</b> explodir numa <b>supernova</b>, é previsto que o brilho de sua explosão seja mais intenso que o da <b>Lua cheia</b> no céu terrestre, durando cerca de alguns meses.</p>
                    </TextoBranco>
                    <TextoPreto>
                        <p>O <b>Ponto Nemo</b> é tão distante de qualquer área habitada que os seres humanos mais próximos dali são, em geral, os astronautas presentes na <b>Estação Espacial Internacional</b>, que orbita a Terra a um máximo de 416 quilômetros de altitude.</p>
                    </TextoPreto>
                </section>
            </Conteudo>
            <VoltarAoTopo href="#"><ion-icon name="arrow-up-sharp"></ion-icon></VoltarAoTopo>
        </ErroFundo>
    )
}