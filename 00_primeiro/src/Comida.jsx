
function Comida(){

    const comida1 = "Laranja";
    const comida2 = "Maça";

    return(
        <main>
            <ul>
                <li>Banana</li>
                <li>{comida1}</li>
                <li>{comida2.toUpperCase()}</li>
            </ul>

            <hr />
        </main>
    );
}

export default Comida