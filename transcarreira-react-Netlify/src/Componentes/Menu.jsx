import React from "react"
import { Link } from "react-router-dom"



export default function Menu() {
    return(

        <div>

        <header id="Menu">  
        <nav class="navbar navbar-expand-lg">
        <Link id="link" to="/">< img className="logo" src="../Imagens/TransCarreira.png" alt="Logo-Direciona pra pagina inicial"/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">                    
                <div className="menuToggler">
                <div className="um"></div>
                <div className="dois"></div>
                <div className="tres"></div>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                    <Link id="link" to="quemSomos">Quem Somos</Link>
                    </li>
                    <li class="nav-item">
                    <Link id="link" to="vagasEmprego">Vagas de Emprego</Link>
                    </li>
                    <li class="nav-item">
                    <Link id="link" to="empresas">Empresas</Link>
                    </li>
                    <li class="nav-item">
                    <Link id="link" to="cursos">Cursos</Link>
                    </li>
                    <li class="nav-item">
                    <Link id="link" to="contato">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </header>

        {/* <nav>
            <Container>
            <Link id="link" to="/"> < img clasName="logo" src="../Imagens/TransCarreira.png" alt="Logo-Direciona pra pagina inicial"/></Link>  {"  "}
            <Link id="link" to="quemSomos">Quem Somos</Link>  {"  "}
            <Link id="link" to="vagasEmprego">Vagas de Emprego</Link>  {"  "}
            <Link id="link" to="empresas">Empresas TransFriendly</Link> {"  "}
            <Link id="link" to="cursos">Cursos</Link> {"  "}                       
            <Link id="link" to="contato">Contato</Link> {"  "}
            </Container>



        </nav> */}

        </div>
    );
}