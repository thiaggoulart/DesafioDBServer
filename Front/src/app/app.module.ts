import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PlantaListarComponent } from './planta-listar/planta-listar.component';
import { RotasModule } from './rotas.module';

@NgModule({
  declarations: [
    AppComponent,
    PlantaListarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
