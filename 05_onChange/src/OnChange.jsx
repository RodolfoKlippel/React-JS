
import { useState } from "react";

function OnChange(){

    const [nome, setNome] = useState(["Rodolfo"]);
    let nomeMudar = "asd"

    function nomeMuda(e){
        nomeMudar = e.target.value
    }

    function mudar(){
        setNome(nomeMudar)
    }

    return(
        <div>
            <input type="text" onChange={nomeMuda}/>
            <button onClick={mudar}>Enviar</button>
            <p>Nome: {nome}</p>
        </div>
    );
}

export default OnChange