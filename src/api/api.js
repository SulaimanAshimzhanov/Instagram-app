import { instance } from "../configs/config";
import { requestPath } from "./requestPath";

//Auth


export const CREATE_USER = (data) => instance.post(requestPath.createUser, data);

export const LOGIN_USER = (data) => instance.post(requestPath.loginUser, data);


// Layout 


export const GET_CURRENT_USER = () => instance.get(requestPath.currentUser);

export const GET_ALL_USERS = () => instance.get(requestPath.allUsers);

export const FOLLOW_TO_USER = (id) => instance.post(requestPath.followTo, id);

export const GET_SINGLE_USER = (id) => instance.get(requestPath.userById(id));

export const DELETE_fOLLOW_USER = (id) => instance.delete(requestPath.deleteFollow(id));

export const CREATE_POST = (data) => instance.post(requestPath.createPost, data);

export const CREATE_IMAGE = (data) => instance.post(requestPath.createImage, data);

export const GET_ALL_POST = () => instance.get(requestPath.getAllPost);

export const GET_ALL_SUBSCRIBERS = (userId) => instance.get(requestPath.getAllSubscribers(userId));

export const GET_ALL_SUBSCRIPTIONS = (userId) => instance.get(requestPath.getAllSubscriptions(userId));

export const REFRESH_TOKEN = (data) => instance.post(requestPath.refreshToken, data);