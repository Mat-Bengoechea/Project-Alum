import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateEmail(control: AbstractControl): ValidationErrors | null {
    const value = control.value?.toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const valid = emailRegex.test(value);
    return valid ? null : { invalidEmail: true }; 
  }

export function validarnombre(control: AbstractControl): ValidationErrors | null {
    const nombreRegex = /^[a-zA-Z\s]+$/; 
    const valid = nombreRegex.test(control.value);
    return valid ? null : { invalidNombre: true }; 
  }

  export function validarComentario(control: AbstractControl): ValidationErrors | null {
    const comentarioRegex = /^[a-zA-Z\s]+$/; 
    const valid = comentarioRegex.test(control.value);
    return valid ? null : { invalidComentario: true }; 
  }
