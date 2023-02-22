import { useEffect, useState } from "react";

function ExampleInner(props) { 
    useEffect(() => {
        console.log(props); 
    });
 
    return <>
        <span>{props.count}</span>
        <span>{props.name}</span>
    </>
}

export default ExampleInner;