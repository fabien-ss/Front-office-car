import { useNavigate } from "react-router-dom";
import { FIREBASE_KEY } from "../constante/constante";

export async function sendDataToApi(url, data, method){
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
    const body = JSON.stringify(data);
    const response = await fetch(url, {
       method: method,
       headers: headers,
       body: body 
    });

    if(!response.ok){
        throw new Error('HTTP error! status: $(response.status)')
    }

    console.log("response", response);
    try{
        const responseData = await response.json();
        return responseData;

    }catch(Error){
       // console.log(Error.message());
    }
}


export async function sendGetNotification(data, method) {

    const firebaseApiKey = FIREBASE_KEY;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `key=${firebaseApiKey}`);

    const fetchOptions = {
        method: method,
        headers: headers,
    };

    // Only add the body for methods that typically include a body
    if (method !== 'GET' && method !== 'HEAD') {
        fetchOptions.body = JSON.stringify(data);
    }

    const response = await fetch("https://fcm.googleapis.com/fcm/send", fetchOptions);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("response", response);
    // For methods that do not expect a body in the response, like HEAD, you might not want to call .json()
    if (method !== 'HEAD') {
        const responseData = await response.json();
        return responseData;
    }
    return response.status;
}


export async function sendGetRequest(url, data, method) {
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
    const fetchOptions = {
        method: method,
        headers: headers,
    };

    // Only add the body for methods that typically include a body
    if (method !== 'GET' && method !== 'HEAD') {
        fetchOptions.body = JSON.stringify(data);
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("response", response);
    // For methods that do not expect a body in the response, like HEAD, you might not want to call .json()
    if (method !== 'HEAD') {
        const responseData = await response.json();
        return responseData;
    }
    return response.status;
}

export async function sendNonSecuredGetRequest(url, data, method) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const fetchOptions = {
        method: method,
        headers: headers,
    };

    // Only add the body for methods that typically include a body
    if (method !== 'GET' && method !== 'HEAD') {
        fetchOptions.body = JSON.stringify(data);
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("response", response);

    // For methods that do not expect a body in the response, like HEAD, you might not want to call .json()
    if (method !== 'HEAD') {
        const responseData = await response.json();
        return responseData;
    }

    // If there's no body, you might return something else, like the status or headers
    return response.status;
}

export function logout(){
    console.log("click");
    localStorage.clear();
    window.location.reload();
}

export function CheckToken(){
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(token === undefined || token === null){
        navigate("/login");
    }
}

export function formatDate(date){
    return date.replace("T", " ").replace("Z", "");
}