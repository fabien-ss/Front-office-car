import { useEffect, useState } from "react";
import Message from "./Message";
import { sendGetRequest } from "../../fonction/fonction";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constante/constante";
function Notification(){

    const navigate = useNavigate();
    
    const [message, setMessage] = useState([]);

    const [selected, setSelected] = useState();
/*
    async function fetchAndDisplayMessages() {
        await fetchMessage();
        console.log("message ", message);
       }
       
    fetchAndDisplayMessages();
       
*/
    async function fetchMessage(){
        const userId = localStorage.getItem("userId");
        console.log("userId ", userId);
        const url = API_URL + "/discussion/"+userId;
        const response = await sendGetRequest(url, {}, "GET");
       
        console.log("response ", response);
        try{
            setMessage(response.data.discussion);
        }catch(Error){
            alert(Error);
        }
    }
    
    function check(){
        const token = localStorage.getItem("token");
        if(token === undefined || token === null || token === ""){
            navigate("/login");
        }
    }

    useEffect(() => {
        fetchMessage();
        check();
    }, [selected]); 

 
    function displayMessage(m){
        setSelected(false);
        setSelected(m);
        console.log("selec ",selected);
    }

    return (
        <div class="container-xxl py-5">
            <div class="container" style={{display: "flex"}}>
                <div className="col-3">
                    {!message && <h2>Vous n'avez aucun message</h2>}
                    <ul class="list-group">
                        {message?.map(m =>
                            <button class="list-group-item" onClick={e => displayMessage(m)}>
                                <h3>
                                    {m.nomSender}
                                </h3>
                                <p>Annonce :</p> {m.idAnnonce}
                            </button>
                        )}
                    </ul>
                </div>
                <div className="col-9">
                    {selected &&
                        <Message idEnvoyeur={selected.idSender} idAnnonce={selected.idAnnonce}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Notification;
