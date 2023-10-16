function OutraLista({itens}) {
    return (
        <>
        <h1>Lista de coisas boas: </h1>
        { 
            itens.length > 0 ? (
            itens.map((item , index) => <p key={index}>`O item {item} tem o id {index}`</p>))
            : (
                <p>Lista vazia</p>
            )
        }
        </>
    )
}

export default OutraLista