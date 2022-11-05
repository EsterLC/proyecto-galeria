import React from "react";
import '../css/efectosBotones.css'

export default function SidebarOpciones({name, active, handleClick}){
    return(
        <button 
        className={`botones ${active ? 'active' : ''}`}
        onClick= {handleClick}
        >{name}</button>
    )
}