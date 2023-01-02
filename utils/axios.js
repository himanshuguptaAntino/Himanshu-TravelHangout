import axios from "axios";
import { BASE_URL } from "./constant";
export const api=axios.create({
    baseURL:BASE_URL,
    header:{
        "Content-Type":"application/json"
    }
});