const Javascript = () => {
    const name ='Harshada'

    function cli () {
        document.body.style.background="black"
    } 

    function dbcli () {
        document.body.style.color="white"
    }

    return(
        <div>
            <h1>javascript</h1>
            <button onClick={cli}>Click</button>
            <button onDoubleClick={dbcli}>DoubleClick</button>
            <h1>{`My name is ${name}`}</h1>
            <h1>My name is {name}</h1>
        </div>
    )
}

export default Javascript