function button(props) {
    return <button onClick={props.event}>{props.text}</button> //props.text só ta dando o nome para o button não inflencia na function
}

export default button