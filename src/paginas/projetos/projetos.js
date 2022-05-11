import { useHistory } from "react-router-dom";
import { irParaInicio, irParaSobre } from "../../router/cordinator";
import { CabecalhoPagina, CardProjeto, Conteudo, Links, ListaProjetos, MenuProjetos, ProjetosFundo, VoltarAoTopo } from "./style";
import Cubo01 from '../../img/cubo01.png'
import Pizzeria01 from '../../img/pizzeria01.png'
import Filmes01 from '../../img/filmes01.png'
import Filmes02 from '../../img/filmes02.png'
import Labekut01 from '../../img/labekut01.png'
import Labekut02 from '../../img/labekut02.png'
import Labekut03 from '../../img/labekut03.png'

export default function PaginaDeProjetos() {
    const history = useHistory()
    function CuboData() {
        return (
            <CardProjeto id="Cubo">
                <h3>Cubo Data - Full Stack</h3>
                <img src={Cubo01} />
                <div>
                    <ion-icon name="logo-javascript"></ion-icon>
                    <ion-icon name="logo-react"></ion-icon>
                    <ion-icon name="logo-html5"></ion-icon>
                    <ion-icon name="logo-nodejs"></ion-icon>
                    <ion-icon name="logo-css3"></ion-icon>
                </div>
                <h4>Sobre o projeto</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Este é um projeto Full-Stack, desenvolvido na parte final do curso Web Full-Stack da Labenu.
                    A proposta era criar uma aplicação que recebesse nome, sobrenome e participação e devolvesse uma tabela com esses dados
                    e o quanto esta participação reflete na porcentagem total.</p>
                <h4>Back end</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;O back end foi desenvolvido em TypesCript com NodeJS, usando as bibliotecas Express, Cors,
                    UUID, Knex e Dotenv. O banco de dados utilizado foi o MySQL. </p>
                <h4>Front end</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;O front end foi desenvolvido em ReactJS, com uso das bibliotecas Axios, React-Google-Chart
                    e Styled-components. </p>
                <div>
                    <a href='https://cubo-back-ruana.herokuapp.com' target='_blank'><button >Back End</button></a>
                    <a href="https://documenter.getpostman.com/view/18388041/UVysxbdE" target='_blank'><button>Documentação</button></a>
                    <a href="https://github.com/Ruanar/Cubo-data" target='_blank'><button>GitHub</button></a>
                    <a href="https://cubo-ruana.surge.sh" target='_blank'><button>Cubo Data</button></a>
                </div>
            </CardProjeto>
        )
    }
    function Pizzeria() {
        return (
            <CardProjeto id="Pizzeria">
                <h3>Pizzeria - Full Stack</h3>
                <img src={Pizzeria01} />
                <div>
                    <ion-icon name="logo-javascript"></ion-icon>
                    <ion-icon name="logo-react"></ion-icon>
                    <ion-icon name="logo-html5"></ion-icon>
                    <ion-icon name="logo-nodejs"></ion-icon>
                    <ion-icon name="logo-css3"></ion-icon>
                </div>
                <h4>Sobre o projeto</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Este é um projeto Full Stack, desenvolvido na etapa final do BootCamp Web Full Stack da Labenu.
                    A proposta era criar uma aplicação para pedir pizza.</p>
                <h4>Back end</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;O Back End foi desenvolvido em NodeJS com Typescript, usando o banco de dados MySQL e as Libs
                    Express, Cors, UUID, Knex e Dotenv. </p>
                <h4>Front end</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;O Front End foi desenvolvido em React, com Styled-components, Axios e React-router-dom.</p>
                <div>
                    <a href='https://ruana-pizzeria.herokuapp.com' target='_blank'><button >Back End</button></a>
                    <a href="https://documenter.getpostman.com/view/18388041/UyrDBuoE" target='_blank'><button>Documentação</button></a>
                    <a href="https://github.com/Ruanar/Pizzeria" target='_blank'><button>GitHub</button></a>
                    <a href="https://pizzerialilamaria.surge.sh/" target='_blank'><button>Pizzeria</button></a>
                </div>
            </CardProjeto>
        )
    }
    function Filmes() {
        return (
            <CardProjeto id="Filmes">
                <h3>Filmes Populares - Front end</h3>
                <img src={Filmes01} />
                <img src={Filmes02} />
                <div>
                    <ion-icon name="logo-javascript"></ion-icon>
                    <ion-icon name="logo-react"></ion-icon>
                    <ion-icon name="logo-html5"></ion-icon>
                    <ion-icon name="logo-css3"></ion-icon>
                </div>
                <h4>Sobre o projeto</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Este projeto foi criado com React, com as bibliotecas Axios, Styled-Components e
                    React Router Dom, e consumindo dados da API pública The Movie Database API. <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;A proposta era criar uma listagem dos filmes mais populares do dia, exibidos em uma
                    lista paginada. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido é exibida,
                    contendo o elenco original e equipe técnica, além de uma lista de recomendações de filmes semelhantes.</p>

                <div>
                    <a href="https://github.com/Ruanar/filmes-populares" target='_blank'><button>GitHub</button></a>
                    <a href="https://ruana-filmes.surge.sh/" target='_blank'><button>Filmes Populares</button></a>
                </div>
            </CardProjeto>
        )
    }
    function Labekut() {
        return (
            <CardProjeto id="Labekut">
                <h3>Labekut - Front end</h3>
                <img src={Labekut01} />
                <img src={Labekut02} />
                <img src={Labekut03} />
                <div>
                    <ion-icon name="logo-javascript"></ion-icon>
                    <ion-icon name="logo-react"></ion-icon>
                    <ion-icon name="logo-html5"></ion-icon>
                    <ion-icon name="logo-css3"></ion-icon>
                </div>
                <h4>Sobre o projeto</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;O Labekut foi desenvolvido em React , com as bibliotecas Axios, React Router Dom
                    e Styled Components e a API LabEddit, desenvolvida pela Labenu. <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Este foi o último projeto individual de Front End do curso Web Full Stack da
                    Labenu. A proposta era criar uma rede social funcional com cadastro, login, postagens, votos e comentários.
                    O mecanismo das postagens e dos votos é baseado na rede social Reddit. Por não ter familiaridade com o Reddit,
                    e também por escolha estética, optei por reproduzir parcialmente o leiaute da extinta rede social Orkut.</p>
                <div>
                    <a href="https://github.com/Ruanar/Labekut" target='_blank'><button>GitHub</button></a>
                    <a href="https://labekut.surge.sh/" target='_blank'><button>Labekut</button></a>
                </div>
            </CardProjeto>
        )
    }
    return (
        <ProjetosFundo>
            <CabecalhoPagina>
                <Links>
                    <p onClick={() => irParaInicio(history)}>Página Inicial</p>
                    <p onClick={() => irParaSobre(history)}>Quem sou eu</p>
                </Links>
            </CabecalhoPagina>
            <Conteudo>
                <MenuProjetos>
                    <ul>
                        <a href='#Cubo'>
                            <li>Cubo Data - Full Stack</li>
                        </a>
                        <a href='#Pizzeria'>
                            <li>Pizzeria - Full Stack</li>
                        </a>
                        <a href='#Filmes'>
                            <li>Filmes Populares - Front End</li>
                        </a>
                        <a href='#Labekut'>
                            <li>Labekut - Front End</li>
                        </a>
                    </ul>
                </MenuProjetos>
                <VoltarAoTopo href="#"><ion-icon name="arrow-up-sharp"></ion-icon></VoltarAoTopo>
                <ListaProjetos>
                    {CuboData()}
                    {Pizzeria()}
                    {Filmes()}
                    {Labekut()}
                </ListaProjetos>
            </Conteudo>
        </ProjetosFundo>
    )
}