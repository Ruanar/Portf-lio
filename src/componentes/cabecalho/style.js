import styled from 'styled-components'

export const FaixaCabecalho = styled.header`
width: 100%;
height: 250px;
background-color: black;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
font-family: 'Iceland', cursive;
`
export const Quadrado = styled.div`
width: 200px;
height: 200px;
margin-left: 50px;
margin-top: 50px;
display: flex;
text-align: center;
justify-content: center;
background-color: white;
p{
    margin: auto;
    font-size: 125px;
}
`
export const Saudacao = styled.div`
color: white;
font-size: 75px;
margin-left: 50px;
margin-top: 75px;
`
export const EuSou = styled.div`
color: white;
font-size: 75px;
margin-left: 50px;
text-align: right;
`

export const QuadradoEOi = styled.div`
display: flex;
flex-direction: row;
`
export const DevFull = styled.p`
color: #42f0a7;
font-family: 'Roboto Mono', monospace;
font-size: 24px;
align-self: flex-start;
margin-top: 50px;
margin-right: 50px;
span{
    color: grey;
}
`