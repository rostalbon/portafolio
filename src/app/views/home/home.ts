import { ChangeDetectorRef, Component } from '@angular/core';
import { ProjectsService } from "../../services/projects.service";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  imgArray = [
    "foto-rostro.webp",
    "foto-biblioteca.JPG",
    "foto-arbol.JPG"
  ]
  num = 0
  img = this.imgArray[0]
  next() {
    if (this.num === 0) {
      this.img = this.imgArray[1]
      this.num += 1
    } else if (this.num === 1) {
      this.img = this.imgArray[2]
      this.num += 1
    } else {
      this.img = this.imgArray[0]
      this.num = 0
    }
  }
  prev() {
    if (this.num === 0) {
      this.img = this.imgArray[2]
      this.num = 2
    } else if (this.num === 1) {
      this.img = this.imgArray[0]
      this.num -= 1
    } else {
      this.img = this.imgArray[1]
      this.num -= 1
    }
  }
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