import {useState} from "react";

function ObjetoUpdate(){

    const [carro, setCarro] = useState({nome: "Ferrari", ano: 1997, montadora:"Ford"});
    
    function mudar(){
        const nomeCarro = document.getElementById("inputNome").value
        const anoCarro = document.getElementById("inputAno").value
        const montadoraCarro = document.getElementById("inputMont").value

        setCarro({nome: nomeCarro, ano: anoCarro, montadora: montadoraCarro})
    }

    return(
        <div>
            <p>Seu carro preferido é: {carro.nome}</p>
            <p>Ele foi feito em {carro.ano}</p>
            <p>Feito por {carro.montadora}</p>
            
            <input type="text" id="inputNome"/><br /><br />
            <input type="number" id="inputAno"/><br /><br />
            <input type="text" id="inputMont"/><br /><br />
            <button onClick={mudar}>Enviar</button>
        </div>
    )
}

export default ObjetoUpdate;