import PropTypes from 'prop-types';

function Estudantes(prop){

    return(
        <div>
            <p>Nome: {prop.nome}</p>
            <p>Idade: {prop.idade}</p>
            <p>Curso: {prop.curso}</p>
        </div>
    );
}

Estudantes.propTypes = {
    Nome: PropTypes.string,
    Idade: PropTypes.number,
    Curso: PropTypes.string
}

export default Estudantes