import { Component, EventEmitter, Output } from '@angular/core';
import { Listado } from '../../../lista-alum/lista-alum.component';;

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

 @Output() 
public sendforms: EventEmitter<Listado> = new EventEmitter();


  public forms: Listado = {
    idstudent: '',
    age: 0,
    grade: 0,
    couse: '',
    approved: true,
  };

  addforms(): void {
    this.forms.approved = this.forms.grade >= 7;
    this.sendforms.emit(this.forms);
    console.log(this.forms);
  }
}

