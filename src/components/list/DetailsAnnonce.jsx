import React from "react";

import carousel from "../../assets/img/carousel-3.jpeg";
import { useNavigate } from "react-router-dom";

function DetailsAnnonce({annonce}){

    const navigate = useNavigate();

    function checkToken(idSender){
        const token = localStorage.getItem("token");
        console.log("token ", token);
        if(token) navigate("/notification/"+idSender);
        else{
            navigate("/login");
        }
    }

    return(
        <center>
            <div class="container py-5" style={{ backgroundColor: "white"}}>
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div class="about-img position-relative overflow-hidden p-5 pe-0">
                                <img alt="" class="img-fluid w-100" src={annonce.photoSet[0] && "data:image/png;base64,"+annonce?.photoSet[0].fieldBytes} />
                            </div>
                        </div>
                        <div class="col-lg-2 wow fadeIn" data-wow-delay="0.1s">
                            {annonce.photoSet &&
                                annonce.photoSet.map(photo =>(
                                    <div class="about-img position-relative overflow-hidden p-5 pe-0">
                                        <img alt="" class="img-fluid w-100" src={"data:image/png;base64,"+photo.fieldBytes} />
                                    </div>
                                ))
                            }
                        </div>
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <h1 class="mb-4">{annonce.description}</h1>
                            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            {annonce.annonceDetailsModeles.map(axe=>(
                                <p><i class="fa fa-check text-primary me-3"></i>{axe.axePossibleValues.value}</p>
                            ))}
                            <button class="btn btn-primary py-3 px-5 mt-3" style={{borderColor: "white"}} onClick={e=> checkToken(annonce.ownerId)}>Contact</button> 
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default DetailsAnnonce;