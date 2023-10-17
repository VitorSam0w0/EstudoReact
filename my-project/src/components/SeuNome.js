function SeuNome({name , setName}) {
    return(
        <div>
            <form>
                <label htmlfor='nome'>Nome: </label>
                <input
                type='text'
                placehoder='Digite seu nome: '
                id='nome'
                onChange = {(e) => setName(e.target.value)}
                ></input>
            </form>
            <p id='texto'></p>
        </div>
    )
}

export default SeuNome