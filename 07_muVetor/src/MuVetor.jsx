import { useState } from "react";

function MuVetor(){

    const [comidas, setComida] = useState(["Banana","Pizza","Hamburguer"])

    function adicionar(){
        const input = document.getElementById("input").value;
        if(input.trim() !== ""){
            setComida([...comidas, input])
        }
        document.getElementById("input").value = "";
    }

    function remover(index){
        
        setComida(comidas.filter((_ , i) => i != index))

    }

    return(
        <div>
            <h2>Lista de Comidas!</h2>
            <ul>
                {comidas.map((comida, index) => <li key={index} onClick={() => {remover(index)}}>{comida}</li> )}
            </ul>
            <input type="text" id="input"/>
            <button onClick={adicionar}>Enviar</button>
        </div>
    );
}

export default MuVetor