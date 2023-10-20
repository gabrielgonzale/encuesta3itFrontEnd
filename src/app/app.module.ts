import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestacomponentComponent } from './component/encuestacomponent/encuestacomponent.component';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaserviceService } from './service/encuestaservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraficoencuestaComponent } from './component/graficoencuesta/graficoencuesta.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InicioComponent } from './component/inicio/inicio.component';




@NgModule({
  declarations: [
    AppComponent,
    EncuestacomponentComponent,
    GraficoencuestaComponent,
    InicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [EncuestaserviceService],
  bootstrap: [AppComponent],
  exports : [RouterModule]
})
export class AppModule { }
