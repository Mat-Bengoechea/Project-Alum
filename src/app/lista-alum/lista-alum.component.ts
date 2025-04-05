import { Component, EventEmitter, Input, Output,} from '@angular/core';

@Component({
  selector: 'app-lista-alum',
  standalone: false,
  templateUrl: './lista-alum.component.html',
  styleUrl: './lista-alum.component.css'
})
export class ListaAlumComponent {

  public title ='Lista de Alumnos';

@Input () public Lista: Listado[]=[];

@Output()
public selectedstudent: EventEmitter<string> = new EventEmitter();


onDeleteLista(idstudent:string): void {
  this.selectedstudent.emit(idstudent);
}


public AlumnoSeleccionado = '';

showdata():void{
  console.log(this.AlumnoSeleccionado);
}

}

export interface Listado{
  idstudent: string;
  age: number;
  approved: boolean;
  grade: number;
  couse: string;
}


