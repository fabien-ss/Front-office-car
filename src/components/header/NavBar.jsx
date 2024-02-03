import React, { useEffect, useState } from "react";
import iconDeal from "../../assets/img/icon-deal.png";
import { logout } from "../../fonction/fonction";

function NavBar(){
    const [token, setToken] = useState();

    useEffect(()=>{
        setToken(localStorage.getItem("token"));
    }, []);

    return(
        <div class="container-fluid nav-bar bg-transparent">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
                    <div class="icon p-2 me-2">
                        <img class="img-fluid" src={iconDeal} alt="Icon" style={{width: "30px", height: "30px"}} />
                    </div>
                    <h1 class="m-0 text-primary">Car second life</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <a href="/" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <div class="nav-item dropdown">
                            <a href="ok" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Annonce</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="/list" class="dropdown-item">Liste des annonces</a>
                                <a href="property-type.html" class="dropdown-item">Property Type</a>
                                <a href="property-agent.html" class="dropdown-item">Property Agent</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="ok" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Car</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="/brand" class="dropdown-item">Brand</a>
                                <a href="404.html" class="dropdown-item">404 Error</a>
                            </div>
                        </div>
                        {token &&
                            <a href="/notification" class="nav-item nav-link">Message</a>
                        }
                    </div>
                    {!token && 
                        <a href="/login" class="btn btn-outline-primary px-3 d-none d-lg-flex">Se connecter</a>
                    }
                    {token && 
                        <button onClick={e => logout()} class="btn btn-primary px-3 d-none d-lg-flex">Se deconnecter</button>
                    }
                </div>
            </nav>
        </div>
    )
}
export default NavBar;