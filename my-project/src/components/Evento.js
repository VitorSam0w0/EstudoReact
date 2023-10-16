import Button from "./Eventos/Button"

function Evento() {

    function meuEvento() {
        alert('Primeiro evento')
    }

    function segundoEvento() {
        alert('Segundo evento')
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Clique..." />
            <Button event={segundoEvento} text="Clique..." />
        </div>
    )
}

export default Evento