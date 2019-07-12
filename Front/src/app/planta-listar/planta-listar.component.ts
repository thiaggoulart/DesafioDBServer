import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { plantaService } from '../planta.service';

@Component({
  selector: 'app-planta-listar',
  templateUrl: './planta-listar.component.html',
  styleUrls: ['./planta-listar.component.css']
})
export class PlantaListarComponent implements OnInit {
  displayedColumns: string[] = ['sensor', 'umidade'];
  dataSource: Planta[] = [];

  constructor(
    private plantaServ: plantaService
  ) { }

  ngOnInit() {
    this.plantaServ.buscaTodos().subscribe(
      dados => this.dataSource = dados,
      erro => {
        console.log(erro);
      }
    );
  }

}
