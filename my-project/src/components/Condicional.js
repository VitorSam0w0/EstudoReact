import { useState } from "react"

function Condicional() {
    
    function meuEvento(e) {
        e.preventDefault()
        var texto = document.getElementById('texto')
        texto.innerText = (`${email}`)
    }

    function limpar() {
        var texto = document.getElementById('texto')
        texto.innerText = ('')
    }

    const [email, setEmail] = useState()

    return(
        <div>
            <h1>Digite seu e-mail</h1>
            <form onSubmit={meuEvento}>
                <div>
                    <label htmlfor='mail'>Email:</label>
                    <input
                    id="mail"
                    type="text"
                    placeholder="Digite seu e-mail..."
                    onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>
                {meuEvento && (
                <div>
                    <input
                    type="submit"
                    value='Enviar'
                    ></input>
                </div>
            )}
            </form>
            <button onClick={limpar} >limpar</button>
            <p id="texto"></p>
        </div>       
    )
}

export default Condicional