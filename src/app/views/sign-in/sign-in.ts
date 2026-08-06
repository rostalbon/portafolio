import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  private formBuilder = inject(FormBuilder)
  signInForm = this.formBuilder.group({
    name: [''],
    surname: [''],
    email: [''],
    passwd: [''],
    passwdConfirmation: ['']
  })
  createUser() {
    console.log(this.signInForm.value)
  }
}
