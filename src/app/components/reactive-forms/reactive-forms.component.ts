import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validarnombre, validarComentario, validateEmail } from '../utils/validator';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  public formcoment : FormGroup;

  constructor(private fb: FormBuilder) { 

    this.formcoment = fb.group({
      nombre: ["",[Validators.required, Validators.minLength(3), validarnombre]],
      email: ["", [Validators.required, Validators.email, validateEmail]],
      comentario: ["" ,[Validators.minLength(10), validarComentario]],
    });
  }
  

  onSubmit() {
    alert("Formulario enviado correctamente");
    console.log(this.formcoment.value);
    console.log(this.formcoment.controls['email'].errors);
    console.log(this.formcoment.controls['nombre'].errors);
    console.log(this.formcoment.controls['comentario'].errors);
    this.formcoment.reset();
   }
  
get nombre() {
    return this.formcoment.get('nombre');
  }

  get isNameValid() {
    return this.nombre?.touched && this.nombre?.invalid;
  }
   
get email() {
    return this.formcoment.get('email');
  }

  get isEmailValid() {
    return this.email?.touched && this.email?.invalid;
  }


  get comentario() {
    return this.formcoment.get('comentario');
  }

  get isComentarioValid() {
    return this.comentario?.touched && this.comentario?.invalid;
  }


}



