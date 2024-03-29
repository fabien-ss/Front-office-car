import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../../constante/constante";
import { sendDataToApi, sendGetRequest } from "../../fonction/fonction";
import "./Message.css";
import "../../assets/css/popup.css";

function Message({props}){

    const [message, setMessage] = useState([]);

    const fetchMessageInner = useCallback(async (   ) => {
        const userId = localStorage.getItem("userId");
        const userSenderId = props.idEnvoyeur;
        console.log("sender "+props.idEnvoyeur);
        const url = API_URL + "/message/" + userId + "/" + userSenderId + "/" + props.idAnnonce;
        console.log("url "+url);
        const response = await sendGetRequest(url, {}, "GET");
        console.log("response "+response.data.recu);
        setMessage(response.data.recu);
      }, [props]);
      

    async function sendMessage(event){
        event.preventDefault();
        const userId = localStorage.getItem("userId");
        const data = {
            "idEnvoyeur": userId,
            "idReceveur": props.idEnvoyeur,
            "message": event.target.box.value,
            "idAnnonce": props.idAnnonce
        }
        const url = API_URL + "/message";
        console.log("mesage "+event.target.box.value);
        await sendDataToApi(url, data, "POST");
        fetchMessageInner();
    }
  
    useEffect(() => {
        fetchMessageInner();
    }, [fetchMessageInner]);

    return(
        <div class="container ">
            <div class="row" style={{maxHeight: "500px", overflow: "scroll", padding: "5%", border: "1px solid"}}>
                <div className="card-body" style={{display: "contents"}}>
                    {message.map(m => (
                        <span className="col-12 mb-2" style={{width: "100%"}}>
                            {m.idEnvoyeur === props.idEnvoyeur &&
                                <span className="btn btn-primary py-3 px-5 mt-3" style={{float: "left"}}>
                                    <h6>{m?.message}</h6>
                                    <p>{m.dateEnvoie}</p>
                                </span>
                            }
                            {m.idEnvoyeur !== props.idEnvoyeur &&
                                <span className="btn btn-primary py-3 px-5 mt-3" style={{float: "right"}}>
                                    <h6>{m?.message}</h6>
                                    <p>{m.dateEnvoie}</p>
                                </span>
                            }
                        </span>
                    ))}
                </div>
                    
            </div>
                <div style={{marginBottom: 0}} className="car-footer">
                    <form onSubmit={e => sendMessage(e)}>
                        <div className="row">
                            <div className="col-9">
                                <textarea style={{width: "100%"}} name="box"></textarea>
                            </div>
                            <div className="col-3">
                                <button style={{width: "100%"}} className="btn btn-dark"><i class="fa fa-calendar-alt me-2"></i>Envoyer</button>          
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Message;