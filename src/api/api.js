import axios from "axios";



const apiInstance = axios.create(
    {
        baseURL : process.env.REACT_APP_API,
        headers : {
            "Content-Type" : "application/json"
        },
        
    }
)


export {apiInstance}