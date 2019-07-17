import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  selectedPhoto: Photo;
  photos: Photo[];
  readonly API = '/photos';

  constructor(private http: HttpClient) {
    this.selectedPhoto = new Photo;
  }

  getPhotos() {
    return this.http.get(environment.URL_API + this.API);
  }

  postPhoto(title: string, description: string, fileToUpload: File) {
    const fd: FormData = new FormData();
    fd.append('imageURL', fileToUpload, fileToUpload.name);
    fd.append('title', title);
    fd.append('description', description);
    return this.http.post(environment.URL_API + this.API, fd);
  }

  putPhoto(photo: Photo) {
    return this.http.put(environment.URL_API + this.API + `/${photo._id}`, photo);
  }

  deletePhoto(_id: string) {
    return this.http.delete(environment.URL_API + this.API + `/${_id}`);
  }

}//End class
