import { useState } from "react";

function MuObjVet(){

    const [jogos, setJogos] = useState([{nome: "GTA", /*genero: "Tiro", ano: 2015*/},
                                        {nome: "Arma3", /*genero: "Guerra", ano: 2010*/},
                                        {nome: "Dota2", /*genero: "Moba", ano: 2005*/},
                                        {nome: "Megabonk", /*genero: "Roguelike", ano: 2025*/},
    ])

    function adicionar(){

        const nomeJogo = document.getElementById("inputNome").value
        const generoJogo = document.getElementById("inputGenero").value
        const AnoJogo = document.getElementById("inputAno").value

        setJogos([...jogos, {nome: nomeJogo, genero: generoJogo, ano: AnoJogo}])

        document.getElementById("inputAno").value = ""
        document.getElementById("inputGenero").value = ""
        document.getElementById("inputNome").value = ""
    }

    function remover(index){

        setJogos(jogos.filter((_ , i) => i != index))

    }

    return(
        <div className="main">
            <h2>Lista de Jogos!</h2>

            <input type="text" id="inputNome"/>
            <button className="botao1" onClick={adicionar}>Enviar</button><br /><br />

            <div className="feed">
                {jogos.map((jogo, index) => 
                <div className="cards">
                    <span key={index}>{jogo.nome} &nbsp; {jogo.genero} &nbsp; {jogo.ano} &nbsp;</span>
                    <button onClick={() => remover(index)} className="botao">Remover</button>
                </div>)}
            </div>
            
            
            <input type="text" id="inputGenero"/><br /><br />
            <input type="text" id="inputAno"/><br /><br />
        </div>
    );
}

export default MuObjVet