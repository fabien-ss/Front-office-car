import React, { useState } from "react";
import { sendDataToApi } from "../../fonction/fonction";
import { API_URL } from "../../constante/constante";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { signIn } from "../../fonction/authentification";

function Login(){

    const navige = useNavigate();

    const [load, setLoad] = useState(false);

    const handleSubmit = async (e) =>{
        setLoad(true);
        e?.preventDefault();
        console.log(e);
        const data = {
            email: e.target[0].value,
            password: e.target[1].value
        };
        const url = API_URL + "/authentification/login";
        signIn(data.email, data.password);
        const response = await sendDataToApi(url,data, "POST");
        console.log(response);
        if(response.data.utilisateur){
            setLoad(false);
            console.log(response.data.utilisateur);
            localStorage.setItem("user", response.data.utilisateur);
            localStorage.setItem("userId", response.data.utilisateur.idUtilisateur);
            localStorage.setItem("token", response.data.token);
            navige("/");
        }else{
            setLoad(false);
            alert(response.data.error);
        }
        setLoad(false);
    }

    return(
        <div class="container-xxl bg-white p-0" style={{paddingTop: "20%", paddingBottom: "20%"}}>
            {load && <Loader />}
            {!load &&
                <div class="container py-5 mt-5" style={{paddingTop: "20%", paddingBottom: "20%"}}>
                    <div class="row g-5">
                        <div class="col-lg-6 col-md-6 mt-5" style={{paddingBottom: "2%", padding: "5%", margin: "auto"}}>
                            <h2 class="text-primary">Login</h2>
                            <form onSubmit={e => handleSubmit(e)}>
                                <div class="position-relative mx-auto mb-3" style={{maxWidth: "400px;"}}>
                                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="email" name="email" placeholder="Your email" />
                                </div>
                                <div class="position-relative mx-auto  mb-3" style={{maxWidth: "400px;"}}>
                                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="password" name="password" placeholder="Password" />
                                </div>
                                <div class="position-relative mx-auto  mb-3" style={{maxWidth: "400px;"}}>
                                    <button type="submit" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </form>
                            <a href="/inscription">S'inscrire</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    )   
}

export default Login;