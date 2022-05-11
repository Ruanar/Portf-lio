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

export const ProjetosFundo = styled.div`
display: flex;
flex-direction: column;
min-height: 60vh;
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
padding: 50px;
width: 90vw;
display: flex;
flex-direction: row;
justify-content: space-between;
font-family: 'Roboto Mono', monospace;
`
export const MenuProjetos = styled.nav`
width: fit-content;
height: fit-content;
padding: 25px;
padding-left: 50px;
background-color: #00000075;
a{
  text-decoration: none;
  color: white;
  :hover{
        text-shadow: 0 0 0.3em #42f0a7;
    }
}
:hover{
  background-color: #000000dc;
}
`
export const VoltarAoTopo = styled.a`
position: fixed;
bottom: 75px;
font-size: 50px;
color: black;
`
export const ListaProjetos = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
`
export const CardProjeto = styled.div`
width: 750px;
background-color: #ffffff75;
padding: 50px;
height: fit-content;
display: flex;
flex-direction: column;
align-items: center;
gap: 25px;
p{
  text-align: justify;
}
h3{
  color: #792491;
  text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black;
      letter-spacing: 3px;
}
img{
  width: 90%;
}
div{
  display: flex;
  flex-direction: row;
  font-size: 50px;
  gap: 25px;
  align-items: center;
  button{
    background-color: black;
    color: white;
    align-items: center;
    width: 120px;
    height: 45px;
    padding: 5px;
    font-family: 'Roboto Mono', monospace;
    border-radius: 6px;
    :hover{
      background-color: #792491;
      cursor: pointer;
    }
  }
}
:hover{
  background-color: #ffffffdc;
}
`