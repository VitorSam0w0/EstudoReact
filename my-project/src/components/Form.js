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
                    <label htmlfor='name'></label>
                    <input id="name" type = "text" placeholder = "Digite o seu nome"/>
                </div>
                <div>
                    <label htmlfor='password'></label>
                <input id="password" type = "password" placeholder = "Digite a senha"/>
                </div>
            </form>
        </div>
    )
}

export default Form