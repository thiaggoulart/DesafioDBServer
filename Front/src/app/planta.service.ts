import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from './planta';

@Injectable({
    providedIn: 'root'
})

export class plantaService {
    private urlBase = 'http://localhost:3000/planta';

    constructor(
        private http: HttpClient,
    ) {}

    buscaTodos(): Observable<Planta[]> {
        return this.http.get<Planta[]>(`${this.urlBase}/todas`);
    }
}