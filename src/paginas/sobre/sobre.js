import { useHistory } from "react-router-dom"
import { irParaInicio, irParaProjetos } from "../../router/cordinator"
import { CabecalhoPagina, Conteudo, Links, MenuSobre, SobreCard, SobreFundo, ListaSobre, VoltarAoTopo } from "./style"

export default function PaginaInformacoes() {
    const history = useHistory()
    function QuemSouEu() {
        return (
            <SobreCard id="QuemSouEu">
                <h3>Quem sou eu</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Me chamo Ruana Piber da Rosa, tenho 34 anos, nasci no município de Jaguari, no Rio Grande do Sul, e há 10 anos
                    moro em Florianópolis, em Santa Catarina. <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Vivo com minha amiga canina Lila Maria, minhas duas gerbils Helena e Sarah Manning e muitas, muitas plantas
                    (não tantas quanto eu gostaria). <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Amo música, até toco alguns intrumentos - mal, mas tudo bem :)  Mas amo igualmente o silêncio. <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Adoro aprender coisas e sou apaixonada por conhecimento aleatório (botânica, astronomia, geologia, idiomas,
                    história, política, música, gramática, Latim... aleatório mesmo!).
                </p>
            </SobreCard>
        )
    }
    function Educacao() {
        return (
            <SobreCard id='Educacao'>
                <h3>Educação</h3>
                <h4>Labenu - Web Full Stack</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Entre setembro de 2021 e abril de 2022, cursei o BootCamp Web Full Stack
                    na Labenu. Foram mais de 1000 horas de atividades, incluindo aulas síncronas e assíncronas,
                    exercícios sobre os conteúdos de cada dia, projetos de fixação a cada semana (alguns individuais, outros em grupo),
                    e sessões semanais com a equipe de psicologia e pedagogia para desenvolvimento de soft skills, entre outras atividades
                    proporcionadas pela escola.   </p>
                <h4>Lucca Cafés Especiais - SCA<br />
                    - Introdução aos Cafés Especiais <br />
                    - Roasting Foundation<br />
                    - Sensory Skills Foundation</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Em outubro de 2018, realizei, na cidade de Curitiba, no Paraná, esses três cursos, que fazem parte
                    do "Coffee Skills Program" da Specialty Coffee Association (SCA). <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; O primeiro é, como o nome diz, um curso introdutório aos conceitos de Cafés Especiais, totalmente teórico.
                    O segundo é um curso teórico-prático, que traz os fundamentos da torra de cafés especiais. Já o terceiro, também teórico-prático, traz conceitos importantes sobre a análise sensorial
                    e avaliação de cafés especiais. </p>
                <h4>Lighthouse Cafés Especiais - Barista Junior</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Em maio de 2015, realizei, em Florianópolis, o curso profissionalizante "Barista Júnior - Da Origem do Grão ao Espresso Perfeito"
                    que conta com uma parte teórica, incluindo a história do café no mundo e no Brasil, os tipos e variedades de café, e os conceitos de cafés especiais. A parte prática
                    foca em formar um barista para atuar em uma cafeteria de terceira onda, com diversos métodos de extração, como Espresso, Hario V60, AeroPress, French Press, Chemex (entre outros), bem como a vaporização de leite e montagem de bebidas a base de espresso e leite.     </p>
                <h4>UDESC - Bacharelado em Artes Visuais </h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;De fevereiro de 2012 a meados de 2013, cursei Artes Visuais na Universidade do Estado de
                    Santa Catarina, campus de Florianópolis. Nesta graduação, estudei História da Arte, Escultura, Fotografia, Gravura, Curadoria,
                    Pintura, Desenho, entre outras coisas. <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; Tive a oportunidade de trabalhar como monitora do Ateliê de Gravura, o que considero uma
                    experiência muito rica, onde tinha contato com diversas técnicas modernas e clássicas de gravura, como Xilogravura, Água-forte, Estêncil,
                    Linoleogravura e Serigrafia.
                </p>
                <h4>UFSM - Bacharelado em Artes Visuais</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;No primeiro semestre de 2011, cursei a disciplina Fundamentos de Desenho e Plástica I no curso de Artes Visuais da
                    Universidade Federal de Santa Maria, no Rio Grande do Sul. Esta disciplina reunia os conteúdos de Introdução à História da Arte, Volume, Cor,
                    Desenho de Observação, Desenho de Interpretação e  Desenho de Criação.
                </p>
                <h4>UFSM - Letras - Português e Literaturas de Lingua Portuguesa</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Em 2007, ingressei no curso de Licenciatura em Letras na Universidade Federal de Santa Maria. Lá cursei diversas disciplinas,
                    como Morfologia, Sintaxe, Literatura Greco-latina, Latim Básico, Clássico e Vulgar, Gêneros Textuais e Linguística Básica. <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Neste período, fui bolsista do Laboratório de Informática do Centro de Educação, onde pude trabalhar com sistemas operacionais Linux
                    (Ubuntu e Debian). <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Em 2009, mudei para o recém criado curso de Bacharelado em Letras, onde cursei Fonética e Fonologia do Português,
                    Produção Textual, Estudos Literários, entre outros.
                </p>
            </SobreCard>
        )
    }
    function Experiencia() {
        return (
            <SobreCard id="Experiencia">
                <h3>Experiência Profissional</h3>
                <h4>AH! Cucaria Floripa | 2018 - 2021<br />
                    SUBGERENTE / BARISTA</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Nas duas unidades da AH! Cucaria em Florianópolis, exerci atividades
                    relacionadas ao controle de qualidade de produtos, controle de
                    estoque, treinamento de pessoal, elaboração de carta de cafés, controle
                    da oferta diária de produtos, além das funções de barista, atendimento
                    ao público e operadora de caixa.</p>

                <h4>Lighthouse Cafés Especiais | 2015 - 2018<br />
                    CHEFE DE LOJA / BARISTA</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Atuei como barista de cafés especiais, auxiliar de torra, auxiliar de
                    cursos, era responsável por receber, catalogar e classificar amostras de
                    cafés crus, controle de estoque, treinamento de pessoal, vendas,
                    controle de e-commerce, controle financeiro, operadora de caixa e
                    atendimento ao público.</p>
                <h4>CPQV Comércio de Alimentos | 2014<br />
                    ATENDENTE/ OPERADORA DE CAIXA</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Minha primeira experiência de trabalho formal também foi onde conheci e me apaixonei pelo ofício de Barista.
                    Era responsável pela abertura, fechamento e operação do caixa, atendimento ao público, preparação de cafés, sucos e alguns lanches, bem como limpeza e organização da loja.
                </p>
            </SobreCard>
        )
    }
    return (
        <SobreFundo>
            <CabecalhoPagina>
                <Links>
                    <p onClick={() => irParaInicio(history)}>Página Inicial</p>
                    <p onClick={() => irParaProjetos(history)}>Meus projetos</p>
                </Links>
            </CabecalhoPagina>
            <Conteudo>
                <MenuSobre>
                    <ul>
                        <a href='#QuemSouEu'>
                            <li>Quem sou eu</li>
                        </a>
                        <a href='#Educacao'>
                            <li>Educação</li>
                        </a>
                        <a href='#Experiencia'>
                            <li>Experiência profissional</li>
                        </a>
                    </ul>
                </MenuSobre>
                <VoltarAoTopo href="#"><ion-icon name="arrow-up-sharp"></ion-icon></VoltarAoTopo>
                <ListaSobre>
                    {QuemSouEu()}
                    {Educacao()}
                    {Experiencia()}
                </ListaSobre>

            </Conteudo>
        </SobreFundo>
    )
}