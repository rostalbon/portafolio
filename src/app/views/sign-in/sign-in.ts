import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  private formBuilder = inject(FormBuilder)
  signInForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    passwd: ['', [Validators.required, Validators.min(6)]],
    passwdConfirmation: ['', [Validators.required, Validators.min(6)]]
  })
  createUser() {
    if (this.signInForm.valid) {
      alert("Registro exitoso")
      console.log(this.signInForm.value)
    } else {
      alert("Formulario no válido")
    }
  }
}
