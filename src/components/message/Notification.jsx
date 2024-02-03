import { useEffect } from "react";
import Message from "./Message";
import { CheckToken } from "../../fonction/fonction";
import { useNavigate } from "react-router-dom";

function Notification(){

    const navigate = useNavigate();
    
    
    function check(){
        const token = localStorage.getItem("token");
        if(token === undefined || token === null || token === ""){
            navigate("/login");
        }
    }

    useEffect(() => {
        check();
    }, []); // Empty array ensures this runs once on mount
 
    return (
        <div class="container-xxl py-5">
            <div class="container" style={{display: "flex"}}>
                <div class="col-lg-3 col-sm-4">
                    <div class="col-lg-12 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                            <h6>RAKOTO</h6>
                        </a>
                    </div>

                    <div class="col-lg-12 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                            <h6>RAKOTO</h6>
                        </a>
                    </div>

                    <div class="col-lg-12 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                            <h6>RAKOTO</h6>
                        </a>
                    </div>

                    <div class="col-lg-12 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                            <h6>RAKOTO</h6>
                        </a>
                    </div>
                </div>
                <div class="col-lg-9 col-sm-4" >
                    <Message />
                </div>
            </div>
        </div>
    )
}

export default Notification;
