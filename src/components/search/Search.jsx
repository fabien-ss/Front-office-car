import React, { useEffect, useState } from "react";
import { API_URL } from "../../constante/constante";
import { sendNonSecuredGetRequest } from "../../fonction/fonction";

function Search(){
    
    const [axes, setAxe] = useState([]);
    const [marque, setMarque] = useState([]);

    useEffect(()=>{
        fetchAxe();
        fetchMarque();
    }, []);

    async function fetchAxe(){
        const url = API_URL + "/axe";
        const data = await sendNonSecuredGetRequest(url, {}, "GET");
        setAxe(data.data.axes);
    }

    async function fetchMarque(){
        const url = API_URL + "/marque";
        const data = await sendNonSecuredGetRequest(url, {}, "GET");
        setMarque(data);
    }

    return (
        <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "5%;"}}>
            <div class="container" style={{paddingBottom: "10px"}}>
                <h1>Ajouter des filtres</h1>
                <div class="row g-2">
                    <dic class="col-md-10">
                        <div class="col-md-4">
                            <label class="">Prix</label>
                            <input class="form-control border-0 py-3 mb-2" placeholder="MAX"/>
                            <input class="form-control border-0 py-3 mb-2" placeholder="MIN"/>
                        </div>
                    </dic>
                    <div class="col-md-10">
                        <div class="row g-2">
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>Marque</option>
                                    <option>Laisser vide</option>
                                    {marque.map(m=>(
                                        <option value={m.idMarque}>{m.nom}</option>
                                    ))}
                                </select>
                            </div>
                            {axes.map(axe=>(
                                <div class="col-md-4">
                                    <select class="form-select border-0 py-3">
                                        <option selected>{axe.nom}</option>
                                        <option>Laisser vide</option>
                                        {axe.axeValues.map(values=>(
                                            <option>{values.label}</option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-dark border-0 w-100 py-3">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;