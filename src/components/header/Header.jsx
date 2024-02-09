import React, { useEffect } from "react";
import carousel from "../../assets/img/carousel-3.jpeg";

function Header(){
    useEffect(()=>{
     
    }, [])
    return (
        <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Find A <span class="text-primary">Perfect Car</span> To Help you for your deplacement</h1>
                    <p class="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                    <a href="/" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div class="col-md-6 mb-2">
                    <div class="owl-carousel-item">
                      <img class="img-fluid" src={carousel} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;