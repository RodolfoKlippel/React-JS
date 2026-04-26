import {useState} from "react";

function Contador(){

    const [nome, setNome] = useState(0);

    const updateNome = () =>{
        setNome(nome+1);
    }

    const menosNome = () =>{
        setNome(nome-1);
    }

    const recoNome = () =>{
        setNome(0);
    }

    return(
        <div>
            <p>{nome}</p>
            <button onClick={updateNome}>Adicionar</button>
            <button onClick={menosNome}>Diminuir</button>
            <button onClick={recoNome}>Recomeçar</button>
        </div>
    )
}

export default Contador;