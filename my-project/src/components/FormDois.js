import {useState} from 'react'

function FormDois() {

    function enviar(e) {
        e.preventDefault()
        const texto = document.getElementById('texto')
        texto.innerHTML = (`O seu nome é ${name}`)
    }

    const [name, setName] = useState()

    return(
        <>
        <h1>Meu form de teste</h1>
        <form onSubmit={enviar}
        >
            <label htmlfor='name'>Nome:</label>
            <input
                type="text"
                id="name"
                placehover="Digite o seu nome..."
                onChange = {(e) => setName(e.target.value)}
            />
            <div>
            <input
                type='submit'
                value='Enviar'
                ></input>
            </div>
        </form>
        <p id='texto'></p>
        </>
    )
}

export default FormDois