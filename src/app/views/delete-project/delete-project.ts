import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project, ProjectsService } from '../../services/projects.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-project',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './delete-project.html',
  styleUrl: './delete-project.css',
})
export class DeleteProject {
  projects: Project[] = []
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
  deleteProject() {
    if (this.deleteProjectForm.invalid) {
      this.deleteProjectForm.markAllAsTouched()
      return
    }
    const selectedId = this.deleteProjectForm.value.select;
    console.log('ID seleccionado:', selectedId);
    if (selectedId) {
      this.service.deleteProject(selectedId).subscribe({
        next: () => {
          console.log(`Proyecto ${selectedId} eliminado correctamente.`);
          
          // Filtra la lista local para remover el elemento eliminado sin reargar la página
          this.projects = this.projects.filter(p => p.id !== selectedId);
          
          // Reinicia el control del formulario
          this.deleteProjectForm.reset();
        },
        error: (err) => console.error('Error al eliminar el proyecto:', err)
      });
    }
  }
}
