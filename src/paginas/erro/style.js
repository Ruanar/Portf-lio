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
export const ErroFundo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 55vh;
background-color: #792491;
background-image:
repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),
linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));
background-size: 70px 120px;
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
flex-direction: column;
justify-content: space-evenly;
align-items: center;
font-family: 'Roboto Mono', monospace;
gap: 50px;
h1{
    text-align: center;
}
section{
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 25px;
}
`
export const TextoPreto = styled.div`
background-color: #00000075;
color: white;
padding: 10px;
text-align: justify;
:hover{
  background-color: #000000dc;
}
`
export const TextoBranco = styled.div`
background-color: #ffffff75;
color: black;
padding: 10px;
text-align: justify;
:hover{
  background-color: #ffffffdc;
}
`
export const VoltarAoTopo = styled.a`
position: fixed;
bottom: 75px;
left: 50px;
font-size: 50px;
color: black;
`