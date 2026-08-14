import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-project',
  imports: [ReactiveFormsModule],
  templateUrl: './upload-project.html',
  styleUrl: './upload-project.css',
})
export class UploadProject {
  private formBuilder = inject(FormBuilder)
  uploadProjectForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    html: [false],
    css: [false],
    javascript: [false],
    typescript: [false],
    python: [false],
    others: [false],
    year: ['', [Validators.required, Validators.min(1950), Validators.max(2026)]],
    url: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?.*$/)]],
    description: ['', [Validators.required]],
    main: ['']
  })
  get Title() {
    return this.uploadProjectForm.get("title")
  }
  get Html() {
    return this.uploadProjectForm.get("html")
  }
  get Css() {
    return this.uploadProjectForm.get("css")
  }
  get Javascript() {
    return this.uploadProjectForm.get("javascript")
  }
  get Typescript() {
    return this.uploadProjectForm.get("typescript")
  }
  get Python() {
    return this.uploadProjectForm.get("python")
  }
  get Others() {
    return this.uploadProjectForm.get("others")
  }
  get Year() {
    return this.uploadProjectForm.get("year")
  }
  get Url() {
    return this.uploadProjectForm.get("url")
  }
  get Description() {
    return this.uploadProjectForm.get("description")
  }
  get Main() {
    return this.uploadProjectForm.get("main")
  }
}
