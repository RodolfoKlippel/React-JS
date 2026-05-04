import { Link } from "react-router-dom"

function Navegacao(){

    return(
        <header class="cabecalho">
            <nav class="nav container">

                <Link to="/" className="linksNav">ServMatch</Link>

                <section className="secaoNav">
                    <Link to="/" className="linksNav">Home</Link>
                    <Link to="/Servicos" className="linksNav">Serviços</Link>
                    <Link to="/Sobre" className="linksNav">Sobre Nós</Link>
                    <Link to="/Contatos" className="linksNav">Contatos</Link>
                </section>
                
                
                <div class="botoes">
                    <button>Logar</button>
                    <button>Criar Conta</button>
                </div>
            </nav>
        </header>
    )
}

export default Navegacao