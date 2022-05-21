import React from "react";

export default function Navbar() {
    return(
        <>
            <div className="App">
                <div className="topnav">
                    <a href=".">Home</a>
                    <a href="../games">Games</a>
                    <a href="../category">Categoria</a>
                    <a href="../games/register">Registrar Jogos</a>
                    <a href="../games/list">Listar jogos</a>
                </div>
            </div>
        </>
    )
}