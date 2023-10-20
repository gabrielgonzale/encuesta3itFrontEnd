import { Component, OnInit } from '@angular/core';
import { EncuestaserviceService } from 'src/app/service/encuestaservice.service';
import { Encuesta } from 'src/app/model/encuesta.model';
import { EstiloMusicalService } from 'src/app/service/estilo-musical.service';
import { estiloMusical } from 'src/app/model/estiloMusical.model';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-encuestacomponent',
  templateUrl: './encuestacomponent.component.html',
  styleUrls: ['./encuestacomponent.component.css']
})
export class EncuestacomponentComponent implements OnInit{
   
   encuesta: Encuesta = new Encuesta('',0,'Ninguno');
   listEstiloMusical: estiloMusical[] = [];
   estiloSeleccionado: any;
   email:any;
   mostrarAlerta:boolean = false;
   mostrarAlertaDanger: boolean = false;
  
  constructor(private encuestaService: EncuestaserviceService, private estiloMusicalService : EstiloMusicalService, private router : Router){
    

  }

  ngOnInit(){
    
    this.estiloMusicalService.listarEstiloMusical().subscribe(response =>{
      if(response.length >= 0 )
      this.listEstiloMusical = response;

    })

  }

  guardarEncuesta(encuesta :Encuesta) {

    console.log(encuesta);   
    
    this.encuestaService.guardarEncuesta(encuesta)
    
      .subscribe((response: any) =>{        
        if(response.status === 'ok'){

          
          this.mostrarAlerta = true;
          this.mostrarAlertaDanger = false;
          setTimeout(() => {
            this.router.navigate(['/grafico']);
          },2000)
          
        }else if (response.status === 'error'){
          
          this.mostrarAlertaDanger = true;
        }else{
          alert("Ocurrio un problema interno.")
        }
      });
  }


}
