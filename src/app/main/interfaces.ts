export interface MoviesInterface {
    adult: boolean;
    backdrop_path: string;
    genre_ids: [];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface MovieInterface {
adult: boolean
backdrop_path: string;
belongs_to_collection: Array<object>;
budget: number;
genres: Array<object>;
homepage: string;
id: number;
imdb_id: string;
origin_country: Array<string>;
original_language: string;
original_title: string;
overview: string;
popularity:number;
poster_path: string;
production_companies: Array<object>;
production_countries: Array<object>;
release_date: string;
revenue: number;
runtime: number;
spoken_languages: Array<object>;
status: string;
tagline: string;
title : string;
video: boolean;
vote_average: number;
vote_count: number;
}