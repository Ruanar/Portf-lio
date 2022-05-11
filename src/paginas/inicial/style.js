import styled from 'styled-components'

export const CabecalhoPagina = styled.header`
display: flex;
flex-direction: row;
background-color: black;
width: 100%;
height: 50px;
align-items: center;
justify-content: flex-end;
font-family: 'Iceland', cursive;
`

export const InicialFundo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 55vh;
background-color: #792491;
background-image: repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,.2) 2px, rgba(0,0,0,.2) 3px, transparent 3px, transparent 5px, rgba(0,0,0,.2) 5px);
`
export const Links = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 50px;
width: fit-content;
gap: 25px;
color: white;
p{
    cursor: pointer;
    font-size: 24px;
    border: 1px dashed wheat;
    padding: 5px 8px;
    :hover{
        color: black;
        text-shadow: -1px 0 white, 0 1px white,
      1px 0 white, 0 -1px white;
    }
}
`
export const Conteudo = styled.div`
margin: 50px auto;

display: flex;
flex-direction: row;
justify-content: space-between;
`