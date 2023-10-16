import { useState } from "react"

function FormDois() {

    function enviar(a) {
        a.preventDefault()
        const text = document.getElementById('text')
        text.innerHTML = (`Seu nome de usuario é ${nome}`)
    }

    const [nome, setNome] = useState()

    return (
        <>
        <form onSubmit={enviar}>
            <div>
                <label id="nome">Nome: </label>
                <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                onChange = {(a) => setNome(a.target.value)}
                ></input>
            </div>
            <div>
                <input
                type="submit"
                value='Enviar'>
                </input>
            </div>
        </form>
        <p id="text"></p>
        </>
    )
}

export default FormDois