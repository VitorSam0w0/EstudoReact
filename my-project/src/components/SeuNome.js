
function SeuNome({name , setName}) {

    function enviar(e) {
        e.preventDefault()
        const texto = document.getElementById('texto')
        texto.innerHTML = (name)
    }

    return(
        <div>
            <form onSubmit={enviar}>
                <label htmlfor='nome'>Nome: </label>
                <input
                type='text'
                placehoder='Digite seu nome: '
                id='nome'
                onChange = {(e) => setName(e.target.value)}
                ></input>
                <div>
                    <input
                    type='submit'
                    value='Enviar'
                    >
                    </input>
                </div>
            </form>
            <p id='texto'></p>
        </div>
    )
}

export default SeuNome