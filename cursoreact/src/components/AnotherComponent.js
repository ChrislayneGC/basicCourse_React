const AnotherComponent = () => {
    const handleClick = () => {
        console.log('Clicou no botão!');
    };
    return (
        <div>
            <p>Segundo Componente</p>

            {/* FUNCÕES COM EVENTOS*/}
            <button onClick={handleClick}> Evento de click </button>
            <hr />  {/*Separacao com linhas*/}
            <button onClick={() => console.log("teste")}>Evento de elemento</button> {/* Utilizando o evento diretamento no Componente */}
        </div>
    );
};

export default AnotherComponent;