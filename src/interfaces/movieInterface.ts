interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | object;
    budget: number;
    genres: IGenre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;

    production_companies: [{
        name: string;
        id: number;
        logo_path: string | null;
        origin_country: string;
    }];

    production_countries: [{
        iso_3166_1: string;
        name: string;
    }]

    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: [{
        iso_639_1: string;
        name: string;
    }];

    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

    videos:{
        results:[{
            iso_639_1: string;
            iso_3166_1: string;
            name: string;
            key: string;
            site: string;
            size:number;
            type: string;
            official: boolean;
            published_at: string;
            id: string;
        }]
    }
    credits:{
        cast:[{
            adult:boolean;
            gender:number;
            id:number;
            "known_for_department": string;
            "name": string;
            "original_name": string;
            "popularity": number;
            "profile_path": string;
            "cast_id": number;
            "character": string;
            "credit_id": string;
            "order": number;
        }],
        crew:[{

            "adult": boolean;
            "gender": number;
            "id": number;
            "known_for_department": string;
            "name": string;
            "original_name": string;
            "popularity": number;
            "profile_path": string;
            "credit_id": string;
            "department": string;
            "job": string;
        }]
    }
    images:{
        backdrops:[{
            aspect_ratio: number;
            height: number;
            iso_639_1: string;
            file_path: string;
            vote_average: number;
            vote_count: number;
            width: number;
        }],
        logos:[{
            aspect_ratio: number;
            height: number;
            iso_639_1: string;
            file_path: string;
            vote_average: number;
            vote_count: number;
            width: number;
        }],

        posters:[{
            aspect_ratio: number;
            height: number;
            iso_639_1: string;
            file_path: string;
            vote_average: number;
            vote_count: number;
            width: number;
        }]

    }
}

interface IImage{
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

interface IActor{
    adult:boolean;
    gender:number;
    id:number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

interface IGenre {
    id: number;
    name: string;
}

export type {
    IMovie,
    IGenre,
    IActor,
    IImage
};