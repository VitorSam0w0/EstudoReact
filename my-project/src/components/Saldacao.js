function Saldacao({name}) {

    function gerarSaldacao(algumNome) {
      return `Olá ${algumNome} , seja bem vindo(a)!`
    }

    return (
        <>
        <p>{gerarSaldacao(name)}</p>
        </>
    )
}

export default Saldacao