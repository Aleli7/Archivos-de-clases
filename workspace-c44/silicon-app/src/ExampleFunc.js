import { useEffect, useState } from "react";
import ExampleInner from "./ExampleInner";

function ExampleFunc(props) {
    const [data, setData] = useState({ "count": 0, "name": "" });

    useEffect(() => { 
        document.title = `You clicked ${data.count} times`;
 
        return ()=>{
            document.title = "Curso Silicon";
        };
    });


    function sumar() {
        setData({ "name": data.name, count: data.count + 1 });
    }
    return <>
        <ExampleInner name={data.name} count={data.count}/>
        <button onClick={sumar}>Sumar</button>
        <button onClick={() => setData({ "name": data.name + "N", "count": data.count })}>Nombre</button>
    </>
}

export default ExampleFunc;