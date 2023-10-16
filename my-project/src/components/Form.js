import {useState} from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(`Usuario ${name} cadastrado! com a senha ${password}`)
        console.log(`${name} ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlfor='name'>Nome:</label>
                    <input 
                    id="name" 
                    type = "text" 
                    placeholder = "Digite o seu nome" 
                    onChange = {(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlfor='password'>Password:</label>
                <input 
                    id="password" 
                    type = "password" 
                    placeholder = "Digite a senha"
                    onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input
                    type='submit'
                    value='Cadastrar'
                    ></input>
                </div>
            </form>
        </div>
    )
}


export default Form