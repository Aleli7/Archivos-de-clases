import { Link, useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Example from "./Example";
import ExampleFunc from "./ExampleFunc";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function About() {
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    function salir() { 
        sessionStorage.removeItem("token");
        setToken("")
        toast.success("Se cerro sesion", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          //navigate("/")
    }

    useEffect(() => { 
        let t = sessionStorage.getItem('token');
        if(t!==token){
            setToken(t);
        }
    });


    return <>
        Pagina About. Info adicional.
        <Alert variant="primary">
            This is a primary alert—check it out!
        </Alert>
        <div className="alert alert-primary" role="alert">
            This is a primary alert—check it out!
        </div>
        <hr/>
        <Example/>
        <hr/>
        <ExampleFunc titulo="Mi titulo"/>
        <hr/>
        <button className="btn btn-primary" onClick={salir}>Cerrar session</button>
    </>
}

export default About;