import React from "react";
import "../stylesheets/Boton.css"


export function Boton({text,condition,functionClick}){
    return(
        <button className={condition ? 'clic':'reinicio'} onClick={functionClick}>{text}</button> 
    )
}