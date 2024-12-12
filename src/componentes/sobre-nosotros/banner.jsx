import React from "react";

export default function BannerSobreNosotros(){
    return(
        <section className="banner-sobre-nosotros">
            <Titulo />
        </section>
    );
}

function Titulo(){
    return (
    <h1 className="titulo-sobre-nosotros">SOBRE<br/>NOSOTROS</h1>
    );
}