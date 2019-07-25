import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from './sensor';

@Injectable({
    providedIn: 'root'
})

export class sensorService {
    private urlBase = 'http://localhost:3000/sensor';
    //private urlBase = 'mongodb+srv://sensores:sensores123@projeto-yan8z.mongodb.net/test?retryWrites=true&w=majority';

    constructor(
        private http: HttpClient,
    ) {}

    buscaTodos(): Observable<Sensor[]> {
        return this.http.get<Sensor[]>(`${this.urlBase}`);
    }
}
