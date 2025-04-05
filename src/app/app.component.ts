import { Component, ViewChild,} from '@angular/core';
import { ListaAlumComponent, Listado } from './lista-alum/lista-alum.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

// @ViewChild(ListaAlumComponent, {static: false})
// public ListaAlumComponent!: ListaAlumComponent;

// ngAfterViewInit(){
//   console.log(this.ListaAlumComponent);
//   this.ListaAlumComponent!.title ='Lista de Alumnos';
// }


  public Lista: Listado[]=[
    {idstudent: 'Juan Perez', age: 20, approved: true, grade: 9, couse: 'Angular'},
    {idstudent: 'Maria Lopez', age: 22, approved: true, grade: 8, couse: 'React'},
    {idstudent: 'Pedro Ramirez', age: 21, approved:true, grade: 7, couse: 'Vue'},
    {idstudent: 'Ana Garcia', age: 23, approved: false, grade: 6, couse: 'Svelte'},
    {idstudent: 'Luisa Torres', age: 24, approved: false, grade: 5, couse: 'Ember'},
    {idstudent: 'Carlos Sanchez', age: 25, approved: false, grade: 4, couse: 'Backbone'},
    {idstudent: 'Sofia Rodriguez', age: 26, approved: false, grade: 3, couse: 'Meteor'},
    {idstudent: 'Javier Perez', age: 27, approved: false, grade: 2, couse: 'Polymer'},
    {idstudent: 'Rosa Lopez', age: 28, approved: false, grade: 1, couse: 'Aurelia'},
    {idstudent: 'Ramon Ramirez', age: 29, approved: true, grade: 10, couse: 'Angular'},
    {idstudent: 'Rodrigo Peralta', age: 25, approved: true, grade: 7, couse: 'Angular'},
    {idstudent: 'Ramon Barrichel', age: 18, approved: false, grade: 6.5, couse: 'React'},
    {idstudent: 'Rosa Maria', age: 19, approved: false, grade: 5.5, couse: 'Vue'},
    {idstudent: 'Matias Mendoza', age: 25, approved: true, grade: 8, couse: 'Vue'},
    {idstudent: 'Mariana quiroga', age: 25, approved: true, grade: 9, couse: 'Svelte'},
    {idstudent: 'Luis Torrente', age: 24, approved: true, grade: 10, couse: 'Svelte'},
  ];

  onAddForms(forms: Listado): void {
    this.Lista.push(forms); 
  }

  onDeleteLista(idstudent:string): void {
    this.Lista = this.Lista.filter((alumno) => alumno.idstudent !== idstudent);
  }
  

}
