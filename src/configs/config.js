import axios from "axios";


const baseURL = "https://cryxxxen.pythonanywhere.com"

export const instance = axios.create({baseURL});