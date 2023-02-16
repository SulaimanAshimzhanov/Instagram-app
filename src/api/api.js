import { instance } from "../configs/config";
import { requestPath } from "./requestPath";




export const CREATE_USER = (data) => instance.post(requestPath.createUser, data);