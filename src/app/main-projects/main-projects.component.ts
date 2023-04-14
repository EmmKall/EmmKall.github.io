import { Component } from '@angular/core';
import { ProyectService } from '../body/proyect.service';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.css']
})
export class MainProjectsComponent
{

  data: Array<any> = [];

  constructor( private sProyect : ProyectService, private sHelper: HelpersService )
  {
    this.getData();
  }

  getData():void
  {
    this.sProyect.getAll().subscribe( response => { console.log( response );
      const { status } = response;
      if( status === 200 )
      {
        const {data  } = response;
        this.data = data;
        /* console.log( this.data ); */
      } else if( status === 403 )
      {
        const { msg } = response;
        this.sHelper.mostrarAlerta( 'Something wrong', msg, 'warning', 3000 );
      } else
      {
        this.sHelper.mostrarAlerta( 'Error!!', 'Something wrong', 'error', 3000 );
      }
    });
  }

}
