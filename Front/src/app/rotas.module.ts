import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { PlantaListarComponent } from './planta-listar/planta-listar.component'

const routes: Routes = [
  { path: 'sensor', component: PlantaListarComponent}
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
