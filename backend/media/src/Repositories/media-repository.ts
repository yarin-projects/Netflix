import {IMediaRepository} from '../Interfaces/media-repository-interface';
import {config} from 'dotenv';
import axios from 'axios';
import { ITVSeries } from '../Interfaces/Model-Interfaces/TV/tv-series-interface';
import { IMovie } from '../Interfaces/Model-Interfaces/MOVIE/movie-interface';
import { IFullTVSeries } from '../Interfaces/Model-Interfaces/TV/full-tv-series-interface';
import { IFullMovie } from '../Interfaces/Model-Interfaces/MOVIE/full-movie-interface';
config();

export class MediaRepository implements IMediaRepository {
    //set variables from .env file
    apikey = process.env.API_KEY;
    popular = process.env.POPULAR;
    movies = process.env.MOVIES;
    tvs = process.env.TVS;
    all = process.env.ALL;
    full_tv_series = process.env.FULL_TV_SERIES;
    full_movie = process.env.FULL_MOVIE;
    search = process.env.SEARCH;

    async GetAllMovies(page?: number): Promise<IMovie[] | null> {
        const response = await axios.get(`${this.movies}?api_key=${this.apikey}`);
        if (response) {
        return response.data.results;
        }
        else return null;
    }

    async GetAllTVs(page?: number): Promise<ITVSeries[] | null> {
        const response = await axios.get(`${this.tvs}?api_key=${this.apikey}`);
        if (response) {
        return response.data.results;
        }
        else return null;
    }

    async GetAllMedia(page?: number): Promise<any> {
        const response = await axios.get(`${this.all}?api_key=${this.apikey}`);
        if (response) {
            const results = response.data.results;
            results.filter((media: any) => 
                {if (media.media_type === 'person') results.splice(results.indexOf(media), 1)}); //filter out people 
            return results;
        }
        else return null;
    }

    async Search(query: string): Promise<any> {
        const response = await axios.get(`${this.search}?api_key=${this.apikey}`);
        if (response) {
            const results = response.data.results;
            results.filter((media: any) => 
                {if (media.media_type === 'person') results.splice(results.indexOf(media), 1)}); //filter out people 
            return results;
        }
        else return null;
    }

    async GetMovieById(id: number): Promise<IFullMovie | null> {
        const response = await axios.get(`${this.full_movie}/${id}?api_key=${this.apikey}`);
        if (response) {
        return response.data.results;
        }
        else return null;
    }

    async GetTVById(id: number): Promise<IFullTVSeries | null> {
        const response = await axios.get(`${this.full_tv_series}/${id}?api_key=${this.apikey}`);
            if (response) {
            return response.data.results;
        }
        else return null;
    }
}