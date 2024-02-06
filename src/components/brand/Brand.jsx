import React, { useEffect, useState } from "react"
import { API_URL } from "../../constante/constante";
import { sendNonSecuredGetRequest } from "../../fonction/fonction";
export function Brand(){

    const [brands, setBrands] = useState(
        ["Toyata", "Volkwagen", "Mercedes", "Honda", "Bajaj"]
    );

    useEffect(() => {
        getMarque();
    }, []);

    async function getMarque(){
        const url = API_URL + "/marque";
        const marque = await sendNonSecuredGetRequest(url, {}, "GET");
        console.log("marque "+marque);
        setBrands(marque);
    }

    return(
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 class="mb-3">Our brands</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div class="row g-4">
                    {brands.map(brand =>(
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a class="cat-item d-block bg-light text-center rounded p-3" href="ok">
                                <div class="rounded p-4">
                                    <div class="icon mb-3">
                                        <img class="img-fluid" src="" alt="Icon" />
                                    </div>
                                    <h6>{brand.nom}</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                    ))}
                
                </div>
            </div>
        </div>
    )
}