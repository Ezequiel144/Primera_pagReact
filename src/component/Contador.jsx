import React from "react";
import "../stylesheets/Contador.css"

export function Contador({cont}){

    return(
    <div className="contentcont">
        <h1 className="title">Contador</h1>
        <div className="contaInput">
            {cont}
        </div>
    </div>
    )
}
