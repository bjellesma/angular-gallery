export class Album {
    userId:number;
    id:number;
    title:string
}

export class Photo {
    albumId:number;
    id:number;
    rating:number;
    title:string;
    url:string;
    thumbnailUrl:string;
}