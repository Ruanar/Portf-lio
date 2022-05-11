import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Rodape from '../componentes/rodape/rodape';
import GlobalStyle from '../GlobalStyle';
import PaginaDeErro from '../paginas/erro/erro';
import PaginaInicial from '../paginas/inicial/inicial';
import PaginaDeProjetos from '../paginas/projetos/projetos';
import PaginaInformacoes from '../paginas/sobre/sobre';

export const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Cabecalho />
            <Switch>
                <Route exact path={'/'}>
                    <PaginaInicial />
                </Route>
                <Route exact path={'/projetos'}>
                    <PaginaDeProjetos />
                </Route>
                <Route exact path={'/sobre'}>
                    <PaginaInformacoes />
                </Route>
                <Route>
                    <PaginaDeErro />
                </Route>
            </Switch>
            <Rodape />
        </BrowserRouter>
    )
}