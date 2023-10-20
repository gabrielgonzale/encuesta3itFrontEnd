import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestacomponentComponent } from './component/encuestacomponent/encuestacomponent.component';
import { GraficoencuestaComponent } from './component/graficoencuesta/graficoencuesta.component';
import { InicioComponent } from './component/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'encuesta', component: EncuestacomponentComponent },
  { path: 'grafico', component: GraficoencuestaComponent },
  { path: 'inicio', component: InicioComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
