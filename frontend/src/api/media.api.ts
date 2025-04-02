import axios from "axios";
import { apiBaseUrl } from "../config/config";

const api = axios.create({
    baseURL: apiBaseUrl,
    timeout: 1000 * 60,
    withCredentials: true
});

export interface BaseApiResponse {
  message: string;
}

export interface AuthResponse extends BaseApiResponse {
  token: string;
}

export const GetAllMoviesRequest = async (): Promise<BaseApiResponse> => {
    const {data} = await api.get("/allMovies");
    return data;
}

export const GetAllTVsRequest = async (): Promise<BaseApiResponse> => {
    const {data} = await api.get("/allSeries");
    return data;
}

export const GetAllMediaRequest = async (): Promise<BaseApiResponse> => {
    const {data} = await api.get("/");
    return data;
} 

export const GetMovieByIdRequest = async (id: string): Promise<BaseApiResponse> => {
    const {data} = await api.get(`/movie/${id}`);
    return data;
}

export const GetTVByIdRequest = async (id: string): Promise<BaseApiResponse> => {
    const {data} = await api.get(`/series/${id}`);
    return data;
}