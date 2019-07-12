import { Component, OnInit } from '@angular/core';
import { Sensor } from '../sensor';
import { sensorService } from '../sensor.service';

@Component({
  selector: 'app-planta-listar',
  templateUrl: './planta-listar.component.html',
  styleUrls: ['./planta-listar.component.css']
})
export class SensorListarComponent implements OnInit {
  displayedColumns1: string[] = ['tipo'];
  dataSensor: Sensor[] = [];

  constructor(
    private plantaServ: sensorService
  ) { }

  ngOnInit() {
    this.plantaServ.buscaTodos().subscribe(
      dados => this.dataSensor = dados,
      erro => {
        console.log(erro);
      }
    );
  }

}
