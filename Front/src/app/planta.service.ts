import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from './planta';

@Injectable({
    providedIn: 'root'
})

export class plantaService {
    private urlBase = 'http://localhost:3000/planta';
    //private urlBase = 'mongodb+srv://sensores:sensores123@projeto-yan8z.mongodb.net/test?retryWrites=true&w=majority';


    constructor(
        private http: HttpClient,
    ) {}

    buscaTodos(): Observable<Planta[]> {
        return this.http.get<Planta[]>(`${this.urlBase}/todas`);
    }
}
