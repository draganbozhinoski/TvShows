export interface TvShow{
    id:number;
    name:string;
    type:string;
    language:string;
    genres: Array<string>;
    status:string;
    premiered:string;
    rating:any;
    image:any;
    summary:string;
    officialSite:string;
    _embedded:any;
    score:number;
}