import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

function About() {
    return <>
        Pagina About. Info adicional.
        <Alert variant="primary">
            This is a primary alert—check it out!
        </Alert>
        <div className="alert alert-primary" role="alert">
            This is a primary alert—check it out!
        </div>
    </>
}

export default About;