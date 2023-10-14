function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(`Usuario cadastrado!`)
        console.log('Cadastrado')
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input id="id" type = "text" placeholder = "Digite o seu nome"/>
                </div>
                <div>
                    <input type = "submit" value = "Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form