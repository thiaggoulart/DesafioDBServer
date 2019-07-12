import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { PlantaListarComponent } from './planta-listar/planta-listar.component'
import { SensorListarComponent } from './planta-listar/sensor-listar.component';

const routes: Routes = [
  { path: 'planta', component: PlantaListarComponent},
  { path: 'sensor', component:SensorListarComponent},
  {path: '**', redirectTo: '/'}

]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RotasModule { }
