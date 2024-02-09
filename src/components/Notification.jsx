import React, { useEffect, useState } from "react";
import { onMessageListener, requestPermission } from "../fonction/firebase";

export function Notification(){

    const [notification, setNotification] = useState({title: "", body : ""});

    useEffect(() =>{
        requestPermission();

        const unsubscribe = onMessageListener().then(payload => {
            setNotification({  
                title: payload.notification.title,
                body: payload.notification.body
            });
        });

        return () =>  {
            unsubscribe.catch(err => console.log("failed"));
        }
    })

    return(
        <div>
            <h1></h1>
        </div>
    )
}