import React, { useState, useEffect } from "react"
import { Wrapper, CountDown, Tittle } from "./styled"

export default function Contador() {

    const [day, setDay] = useState(0);
    const [hrs, setHrs] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    function StartTime() {

        //Data Final do contador!!
        const countDate = new Date("Dec 31, 2022 23:59:59").getTime();

        // Tempo Inicial do contador!!
        const now = new Date().getTime();

        // Diferença de tempo entre o inicial e o final!!
        const distance = countDate - now;

        // calculando quantos dias faltam !!!
        const D = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDay(D);

        // calculando quantas horas faltam !!!
        const H = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        setHrs(H);

        // calculando quantos minutos faltam!!!
        const M = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        setMin(M);

        // calculando quantos segundos faltam!!!
        const S = Math.floor(distance % (1000 * 60) / 1000);
        setSec(S);

    }
    // Rodando o codigo!!!
    useEffect(() => {
        setInterval(() => {
            StartTime();
        });
    });

    return (
        <Wrapper>
            <Tittle>Happy New Year</Tittle>
            <CountDown>{day}:{hrs}:{min}:{sec}</CountDown>
        </Wrapper>
    );
}