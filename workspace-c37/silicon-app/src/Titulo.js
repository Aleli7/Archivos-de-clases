function sumar(n1, n2) {
    return n1 + n2;
}

const ruta = "https://i.stack.imgur.com/kyKz5.png";

function Titulo(props) {
    return (
        <>
            <h1>Primer APP React {sumar(1, 1)}</h1>
            <img src={ruta} />
            <div>Bienvenido/a: {props.nombre}</div>
        </>
    );
}

export default Titulo;