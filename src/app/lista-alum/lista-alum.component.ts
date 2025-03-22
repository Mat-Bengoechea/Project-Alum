import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alum',
  standalone: false,
  templateUrl: './lista-alum.component.html',
  styleUrl: './lista-alum.component.css'
})
export class ListaAlumComponent {
public Listado =[
  {idstudent: 'Juan Perez', age: 20, registrations: true, grade: 9, couse: 'Angular'},
  {idstudent: 'Maria Lopez', age: 22, registrations: false, grade: 8, couse: 'React'},
  {idstudent: 'Pedro Ramirez', age: 21, registrations: false, grade: 7, couse: 'Vue'},
  {idstudent: 'Ana Garcia', age: 23, registrations: true, grade: 6, couse: 'Svelte'},
  {idstudent: 'Luisa Torres', age: 24, registrations: true, grade: 5, couse: 'Ember'},
  {idstudent: 'Carlos Sanchez', age: 25, registrations: true, grade: 4, couse: 'Backbone'},
  {idstudent: 'Sofia Rodriguez', age: 26, registrations: false, grade: 3, couse: 'Meteor'},
  {idstudent: 'Javier Perez', age: 27, registrations: true, grade: 2, couse: 'Polymer'},
  {idstudent: 'Rosa Lopez', age: 28, registrations: true, grade: 1, couse: 'Aurelia'},
  {idstudent: 'Ramon Ramirez', age: 29, registrations: true, grade: 10, couse: 'Angular'},
  {idstudent: 'Rodrigo Peralta', age: 25, registrations: false, grade: 7, couse: 'Angular'},
  {idstudent: 'Ramon Barrichel', age: 18, registrations: true, grade: 6.5, couse: 'React'},
  {idstudent: 'Rosa Maria', age: 19, registrations: true, grade: 5.5, couse: 'Vue'},
  {idstudent: 'Matias Mendoza', age: 25, registrations: false, grade: 8, couse: 'Vue'},
  {idstudent: 'Mariana quiroga', age: 25, registrations: true, grade: 9, couse: 'Svelte'},
  {idstudent: 'Luis Torrente', age: 24, registrations: true, grade: 10, couse: 'Svelte'},
];



public AlumnoSeleccionado = '';

showdata():void{
  console.log(this.AlumnoSeleccionado);
}

ClearList():void{
  this.Listado = [];
}


}

export interface Listado{
  idstudent: string;
  age: number;
  registrations: boolean;
  grade: number;
  couse: string;
}


