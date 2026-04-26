
function Lista(){

    const [frutas, setfrutas] = useState([{id: 1, nome:"banana",quantidade:10},
                    {id: 2, nome:"maça",quantidade:20},
                    {id: 3, nome:"pera",quantidade:4},
                    {id: 4, nome:"laranja",quantidade:12},
                    {id: 5, nome:"abacaxi",quantidade:45}]);

    const listaDeFrutas = frutas.map(fruta => <li key={frutas.id}>{fruta.nome}</li>);


    const clique = (e) => {
        let novo = texto.target.textContent;
        setFrutas(frutas[frutas.length+1] = {id:(frutas.length+1), nome: novo, quantidade:35})

        console.log(texto.target.textContent)
        console.log(frutas)
    }

    return(
        <div>
            <ul>{listaDeFrutas}</ul>
            <input type="text" id="texto" />
            <button id="botao" onClick={(e) => clique(e)}>Enviar</button>
        </div>
    );
}

export default Lista