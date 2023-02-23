import AnotherComponent from "./AnotherComponent"

function FirstComponent() {
    //Comentário
    const name = "Chrislayne"


    return ( //Retornando objeto
        <div className='firstcomponent'>
            {/*Comentário em JSX*/}
            <p> Primeiro Componente </p>
            {2 + 2}
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent