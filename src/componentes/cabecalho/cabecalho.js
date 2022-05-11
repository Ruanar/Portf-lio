import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { irParaInicio, irParaProjetos, irParaSobre } from "../../router/cordinator";
import { DevFull, FaixaCabecalho,Quadrado, QuadradoEOi, Saudacao } from "./style";

export default function Cabecalho() {

    let saudacao = ''
    let hoje = new Date
    let agora = hoje.getHours()
    if (agora >= 5 && agora <= 12) {
        saudacao = 'bom dia'
    } else if (agora > 12 && agora < 18) {
        saudacao = 'boa tarde'
    } else {
        saudacao = 'boa noite'
    }


    return (
        <FaixaCabecalho>
            <QuadradoEOi>
                <Quadrado>
                    <p>R</p>
                </Quadrado>
                <Saudacao><p>Olá, {saudacao}! <br /> Eu sou a Ruana.</p> </Saudacao>
            </QuadradoEOi>
            <DevFull> <span> &lt;</span>DevFullStack <span>/&gt;</span></DevFull>
        </FaixaCabecalho>
    )
}