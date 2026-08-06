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
    passwd: ['', [Validators.required, Validators.minLength(6)]],
    passwdConfirmation: ['', [Validators.required, Validators.minLength(6)]]
  })
  get Name() {
    return this.signInForm.get("name")
  }
  get Surname() {
    return this.signInForm.get("surname")
  }
  get Email() {
    return this.signInForm.get("email")
  }
  get Passwd() {
    return this.signInForm.get("passwd")
  }
  get PasswdConfirmation() {
    return this.signInForm.get("passwdConfirmation")
  }
  createUser() {
    if (this.signInForm.valid) {
      alert("Registro exitoso")
      console.log(this.signInForm.value)
    } else {
      alert("Formulario no válido")
    }
  }
}
