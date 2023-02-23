const RenderCond = ({ x, y }) => { //Propriedade esta desestruturada não é necessário utilizar o PROPS

    return (
        <div>
            {/* Renderização condicional em um componente */}
            {x > 5 && <p> X é maior que 5 </p>}
            {x > 5 ? <p>X é um número ALTO</p> : <p>X é um número baixo</p>}
            <p>O valor de Y é: {y}</p>
        </div>
    )
}

export default RenderCond;