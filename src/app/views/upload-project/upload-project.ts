import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-upload-project',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './upload-project.html',
  styleUrl: './upload-project.css',
})
export class UploadProject {
  constructor(private service: ProjectsService, private cdr: ChangeDetectorRef) {}
  private formBuilder = inject(FormBuilder)
  private router = inject(Router)
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
    main: [false]
  })
  private techControls = ['html', 'css', 'javascript', 'typescript', 'python'];
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
  uploadProject() {
    if (this.uploadProjectForm.invalid) {
      this.uploadProjectForm.markAllAsTouched();
      return;
    }
    const formValues = this.uploadProjectForm.value;
    const selected = this.techControls.some(
      tech => formValues[tech as keyof typeof formValues] === true
    );
    if (!selected) {
      this.uploadProjectForm.patchValue({ others: true });
    }
    const { html, css, javascript, typescript, python, others, ...cleanPayload } = this.uploadProjectForm.value;
    const techArray: string[] = [];
    if (html) techArray.push("HTML");
    if (css) techArray.push("CSS");
    if (javascript) techArray.push("JavaScript");
    if (typescript) techArray.push("TypeScript");
    if (python) techArray.push("Python");
    if (others || !selected) techArray.push("Otros");
    const payload = {
      ...cleanPayload,
      technologies: techArray
    };
    this.service.createProject(payload).subscribe({
      next: (data) => {
        console.log('Guardado con éxito', data);
        this.uploadProjectForm.reset();
        this.router.navigate(['/projects']);
        alert("Proyecto guardado")
      },
      error: (error) => console.error(error),
      complete: () => {
        this.cdr.detectChanges();
      }
    });
  }
}
