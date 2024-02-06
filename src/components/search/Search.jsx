import React, { useEffect, useState } from "react";
import { API_URL } from "../../constante/constante";
import { sendDataToApi, sendNonSecuredGetRequest } from "../../fonction/fonction";
import Loader from "../loader/Loader";

function Search(){
    
    const [axes, setAxe] = useState([]);
    const [marque, setMarque] = useState([]);
    const [selectedAxeValue, setSelectedAxeValue] = useState([]);
    const [load, setLoad] = useState(false);

    function handleSelectedAxeValue(targetEvent, index) { 
        const newSelectedAxeValue = [...selectedAxeValue];
        newSelectedAxeValue[index] = {"index":targetEvent.target.name, "value":targetEvent.target.value};
        setSelectedAxeValue(newSelectedAxeValue);
        console.log("setSelectedAxeValue ", selectedAxeValue);
    }

    useEffect(()=>{
        fetchAxe();
        fetchMarque();
    }, []);

    async function fetchAxe(){
        const url = API_URL + "/axe";
        const data = await sendNonSecuredGetRequest(url, {}, "GET");
        console.log("data",data);
        setAxe(data.data.axes);
    }

    async function fetchMarque(){
        const url = API_URL + "/marque";
        const data = await sendNonSecuredGetRequest(url, {}, "GET");
        setMarque(data);
    }


    async function fetchFormData(event){
        event.preventDefault();
        setLoad(true);
        const data = {
            "prixSup": event.target[0].value,
            "prixInf": event.target[1].value,
            "anneeSup": event.target[2].value,
            "anneeInf": event.target[3].value,
            "marque": event.target[4].value,
            "axeValues": selectedAxeValue
        }
        console.log("data to send ", data);
        const url = API_URL + "/annonce/find";
        const response = await sendNonSecuredGetRequest(url, data, "POST");
        setLoad(false);
        console.log("response: ", response);
    }

    return (
        <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "5%;"}}>
            {load && <Loader />}
            <div class="container" style={{paddingBottom: "10px"}}>
                <h1>Ajouter des filtres</h1>
                <form onSubmit={e => { fetchFormData(e) } }>
                <div class="row g-2">
                        <div class="col-md-6">
                            <label class="">Prix</label>
                            <input class="form-control border-0 py-3 mb-2" value="100000" name="prixSup" placeholder="MAX"/>
                            <input class="form-control border-0 py-3 mb-2" value="0" name="prixInf" placeholder="MIN"/>
                        </div>
                        <div class="col-md-6">
                            <label class="">Annee</label>
                            <input class="form-control border-0 py-3 mb-2" value="100000" name="anneeSup" placeholder="MAX"/>
                            <input class="form-control border-0 py-3 mb-2" value="0" name="anneeInf" placeholder="MIN"/>
                        </div>
                    <div class="col-md-12">
                        <div class="row g-2">
                            <div class="col-md-12">
                                <select class="form-select border-0 py-3" name="marque">
                                    <option selected>Marque</option>
                                    <option>Laisser vide</option>
                                    {marque.map(m=>(
                                        <option value={m.idMarque}>{m.nom}</option>
                                    ))}
                                </select>
                            </div>
                            {axes.map((axe, index)=>(
                                <div class="col-md-4">
                                    <select name={axe.idAxe} onChange={e => handleSelectedAxeValue(e, index)} class="form-select border-0 py-3" >
                                        <option selected>{axe.nom}</option>
                                        <option>Laisser vide</option>
                                        {axe.axeValues.map(values=>(
                                            <option value={values.idValue}>{values.label} - {axe.idValue }</option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div class="col-md-2">
                    <button class="btn btn-dark border-0 w-100 py-3 mt-3" type="submit">Search</button>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Search;