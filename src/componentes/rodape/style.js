import styled from 'styled-components'

export const BarraRodape = styled.footer`
width: 100%;
height: 50px;
background-color: black;
color: white;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
font-family: 'Roboto Mono', monospace;
div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    width: 125px;
    a{
        text-decoration: none;
        color: white;
        height: 25px;
        ion-icon{
            :hover{
                filter: drop-shadow( 0 0 0.3em #42f0a7);
   
    }
        }
    }
}
`