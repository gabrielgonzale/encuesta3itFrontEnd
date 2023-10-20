import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Encuesta } from 'src/app/model/encuesta.model';
import { estiloMusical } from 'src/app/model/estiloMusical.model';
import { EncuestaserviceService } from 'src/app/service/encuestaservice.service';
import { EstiloMusicalService } from 'src/app/service/estilo-musical.service';

@Component({
  selector: 'app-graficoencuesta',
  templateUrl: './graficoencuesta.component.html',
  styleUrls: ['./graficoencuesta.component.css']
})
export class GraficoencuestaComponent {
  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "Arica",
      "value": 7200000
    }
  ];
  listaEstilos: { name: string; value: any; }[] = [];
  multi: any[] = [];

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Estilo Musical';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad de votos';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  listGrafico: any = [];
  listEstiloMusical: estiloMusical[] = [];
  constructor(private estiloMusicalService: EstiloMusicalService, private encuestaService: EncuestaserviceService) {

    //Object.assign(this, { single })
  }

  ngOnInit() {
    const request = this.estiloMusicalService.listarEstiloMusical();
    const request2 = this.encuestaService.obtenerEncuestas();

    const combinedRequests = forkJoin([request, request2]);

    combinedRequests.subscribe(([responseEstiloMusical, responseEncuesta]) => {
      console.log(responseEncuesta)

      for (let index = 0; index < responseEncuesta.length; index++) {
        const element = responseEncuesta[index];
        console.log(element)

        for (let index = 0; index < responseEstiloMusical.length; index++) {
          const element2 = responseEstiloMusical[index];
          console.log(element)
          if (element.estilomusical_id === element2.id) {
            
            element.estiloMusical = element2.estiloMusical;
            console.log(element.estiloMusical)
            console.log(element2.estiloMusical)

          }
        }
        this.listGrafico.push(element);

      }
      console.log(this.listGrafico);

      const conteoEstilos: any = {};
      for (let index = 0; index < this.listGrafico.length; index++) {
        const element = this.listGrafico[index];
        const estiloMusical = element.estiloMusical;
        if (conteoEstilos[estiloMusical]) {
          conteoEstilos[estiloMusical] += 1;
        } else {
          conteoEstilos[estiloMusical] = 1;
        }

      }
      const listaEstilos = Object.keys(conteoEstilos).map(estilo => ({
        name: estilo,
        value: conteoEstilos[estilo]
      }));
      console.log(this.listaEstilos);
      this.listaEstilos = listaEstilos;

    });


  }



}
