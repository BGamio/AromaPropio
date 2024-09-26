import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Perfumes} from "../model/perfumes";


@Injectable({
  providedIn: 'root'
})
export class PerfumeService {
  private apiUrl = 'https://api.example.com/perfumes'; // Cambia esto a tu API

  constructor(private http: HttpClient) { }

  getPerfumes(): Observable<Perfumes[]> {
    return this.http.get<Perfumes[]>(this.apiUrl);
  }
}
