import React, { useState } from "react";
import { sendDataToApi } from "../../fonction/fonction";
import { API_URL } from "../../constante/constante";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

function Inscription(){

   /* const handleSubmit = (e) =>{
        e?.preventDefault();
        console.log(e);
        const data = {
            nom: e.target[0].value,
            prenom: e.target[1].value,
            dateDeNaissance: e.target[2].value,
            email: e.target[3].value,
            password: e.target[4].value,
            sexe: e.target[5].value,
        };
        console.log("data ",data);

    }*/
    const [load, setLoad] = useState(false);

    const navige = useNavigate();
    const handleSubmit = async (e) =>{
        setLoad(true);
        e?.preventDefault();
        console.log(e);
        const data = {
            nom: e.target[0].value,
            prenom: e.target[1].value,
            dateDeNaissance: e.target[2].value,
            email: e.target[3].value,
            password: e.target[4].value,
            validationMotDePasse: e.target[5].value,
            sexe: e.target[6].value,
        };
        const url = API_URL + "/authentification/signin";
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
        <div class="container-xxl bg-white p-0">
              {load && <Loader />}
            <div class="container py-5 mt-5">
                <div class="row g-5">
                    <div class="col-lg-12 col-md-6" style={{paddingBottom: "2%", padding: "5%"}}>
                        <h2 class="text-primary">Inscription</h2>
                        <form onSubmit={e => handleSubmit(e)}>
                            <div class="position-relative mx-auto mb-3" style={{maxWidth: "400px;"}}>
                                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" name="nom" placeholder="Nom" />
                            </div>
                            <div class="position-relative mx-auto  mb-3" style={{maxWidth: "400px;"}}>
                                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" name="prenom" placeholder="Prenom" />
                            </div>
                            <div class="position-relative mx-auto  mb-3" style={{maxWidth: "400px;"}}>
                                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="date" name="dateDeNaissance" placeholder="Date de naissance" />
                            </div>
                            <div class="position-relative mx-auto  mb-3" style={{maxWidth: "400px;"}}>
                                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" name="email" placeholder="Your email" />
                            </div>
                            <div class="position-relative mx-auto  mb-3" style={{maxWidth: "400px;"}}>
                                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" name="password" placeholder="Password" />
                            </div>
                            <div class="position-relative mx-auto  mb-3" style={{maxWidth: "400px;"}}>
                                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" name="validationMotDePasse" placeholder="Check your assword" />
                            </div>
                            <div class="position-relative mx-auto  mb-3" style={{maxWidth: "400px;"}}>
                                <select class="form-select bg-transparent w-100 py-3 ps-4 pe-5" type="text" name="sexe" placeholder="Sexe">
                                    <option value="1">Homme</option>
                                    <option value="0">Femme</option>
                                </select>
                            </div>
                            <div class="position-relative mx-auto  mb-3" style={{maxWidth: "400px;"}}>
                                <button type="submit" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignIn</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Inscription;