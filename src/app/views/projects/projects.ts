import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: any = []
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
}
