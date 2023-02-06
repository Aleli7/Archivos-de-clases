import { Link } from "react-router-dom";

function Menu() {
    return <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="/logo.png" className="nav-img-main" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/persona/list" className="nav-link">Listar Personas</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/persona/gest" className="nav-link">Gestion Personas</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </>
}

export default Menu;