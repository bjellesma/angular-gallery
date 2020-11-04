import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Album, Photo } from '../../models/gallery'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }
  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums?_limit=5')
  }

  getPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=50')
  }
}
