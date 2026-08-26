import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-project',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './delete-project.html',
  styleUrl: './delete-project.css',
})
export class DeleteProject {
  projects: any = []
  private formBuilder = inject(FormBuilder)
  constructor(private service: ProjectsService, private cdr: ChangeDetectorRef) {
    this.service.getProjects().subscribe({
      next: (data) => {
        this.projects = data
        console.log(this.projects)
      },
      error: (error) => console.error(error),
      complete: () => {
        this.cdr.detectChanges()
      }
    })
  }
  deleteProjectForm = this.formBuilder.group({
    select: ['', Validators.required]
  })
  get Select() {
    return this.deleteProjectForm.get("select")
  }
  formValues = this.deleteProjectForm.value
  deleteProject() {
    console.log(this.formValues.select)
  }
}
