import React, { useEffect, useState, useCallback } from "react"
import Search from "../search/Search";
import { API_URL } from "../../constante/constante";
import { formatDate, sendNonSecuredGetRequest } from "../../fonction/fonction";
import Popup from 'reactjs-popup';
import DetailsAnnonce from "./DetailsAnnonce";

import notFound from "../../assets/img/not-found.png"

import { useNavigate } from "react-router-dom";
function List(){

    const navigate = useNavigate();

    const [max, setMax] = useState(6);

    const [min, setMin] = useState(0);

    const [filter, setFilter] = useState(false);

    async function previous(){
        setMax(min);
        setMin(min - 6);
        await fetchAnnonce();
    }

    async function next(){
        setMin(max);
        setMax(max + 6);
        await fetchAnnonce();
    }

    const [annonces, setAnnonce] = useState([]);

    
    const fetchAnnonce = useCallback(async () => {
        const url = API_URL + "/annonce/" + max + "/" + min;
        console.log(url);
        const data = await sendNonSecuredGetRequest(url, {}, "GET");
        setAnnonce(data.data.annonces);
        console.log("data before ", data);
        console.log("data ", data);
    }, [max, min, setAnnonce]);
    
    useEffect(() => {
        fetchAnnonce();
    }, [fetchAnnonce]);
    
    function checkToken(idOwner){
        const token = localStorage.getItem("token");
        console.log("token ", token);
        if(token) navigate("/notification/"+idOwner);
        else{
            navigate("/login");
        }
    }

    return (
        <>
        
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-6">
                        <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 class="mb-3">Liste des annonces disponnibles</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li class="nav-item me-2">
                                <button class="btn btn-outline-primary " data-bs-toggle="pill" onClick={e => setFilter(!filter)}>Filter</button>
                            </li>
                            {min > 0 &&
                                <li class="nav-item me-2">
                                    <button class="btn btn-outline-primary " data-bs-toggle="pill" onClick={e => previous()}>Previous</button>
                                </li>
                            }
                            <li class="nav-item me-2">
                                <button class="btn btn-outline-primary" data-bs-toggle="pill">{
                                    <li>{min} - {max}</li>
                                }</button>
                            </li>
                            {annonces.length > 0 &&
                                <li class="nav-item me-0">
                                    <button class="btn btn-outline-primary" data-bs-toggle="pill" onClick={e => next()}>Next</button>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    {filter && <Search />}
                    {annonces.length > 0 &&
                    <div id="tab-1" class="tab-pane fade show p-0 active">
                        <div class="row g-4">
                            {annonces.map(annonce=>(
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div class="property-item rounded overflow-hidden">
                                        <div class="position-relative overflow-hidden">
                                            {annonce.photoSet[0] && 
                                                <img class="img-fluid" style={{maxWidth: 500, maxHeight: 300, minWidth: 500, minHeight: 300}} src={"data:image/png;base64,"+annonce?.photoSet[0]?.fieldBytes} alt="" />
                                            }
                                            {!annonce.photoSet[0] && 
                                                <img class="img-fluid" src={notFound} alt="" style={{maxWidth: 500, maxHeight: 300, minWidth: 500, minHeight: 300}} />
                                            }
                                            <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        </div>
                                        <div class="p-4 pb-0">
                                            <h5 class="text-primary mb-3">{annonce.prix}</h5>
                                            <p class="d-block h5 mb-2" >{annonce.description}</p>
                                            <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{formatDate(annonce.dateAnnonce)}</p>
                                        </div>
                                        <div class="d-flex border-top">
                                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>Annee: {annonce.annee}</small>
                                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>Kilometrage: {annonce.kilometrage}</small>
                                            <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i></small>
                                        </div>
                                        <div class="p-4 pb-0">
                                            <ul class="nav nav-pills d-inline-flex justify-content-end mb-3">
                                                <li class="nav-item me-4">
                                                    <Popup trigger={<button class="btn btn-outline-primary" data-bs-toggle="pill"> Details </button>} position="center center">
                                                       <center><DetailsAnnonce annonce={annonce} /></center> 
                                                    </Popup>
                                                </li>
                                                 <li class="nav-item me-4">
                                                    <button class="btn btn-outline-primary" data-bs-toggle="pill" onClick={e => checkToken(annonce.ownerId)}>Contacter</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            
                        </div>
                    </div>
                    
                    
                    }
                </div>
            </div>
        </div>
    </>

    )
}

export default List;