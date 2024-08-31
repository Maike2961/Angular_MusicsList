import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl = "http://localhost:3000/musics"
  constructor(private http: HttpClient) { }

  getData(): Observable<Musica[]>{
    return this.http.get<Musica[]>(this.apiUrl)
  }

  postData(musica: Musica): Observable<Musica>{
    return this.http.post<Musica>(`${this.apiUrl}`, musica)
  }

  putData(musica: Musica): Observable<Musica>{
    return this.http.put<Musica>(`${this.apiUrl}/${musica.id}`, musica)
  }
}
