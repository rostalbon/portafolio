import { Component } from '@angular/core';
import { ProjectsService } from "../../services/projects.service";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  img: string = `<img src="foto-rostro.webp" alt="">`;
  next() {
    if (this.img == `<img src="foto-rostro.webp" alt="">`) {
      this.img = `<img src="foto-biblioteca.JPG" alt="">`;
    }
    else if (this.img == `<img src="foto-biblioteca.JPG" alt="">`) {
      this.img = `<img src="foto-arbol.JPG" alt="">`;
    }
    else {
      this.img = `<img src="foto-rostro.webp" alt="">`;
    }
  }
  prev() {
    if (this.img == `<img src="foto-rostro.webp" alt="">`) {
      this.img = `<img src="foto-arbol.JPG" alt="">`;
    }
    else if (this.img == `<img src="foto-arbol.JPG" alt="">`) {
      this.img = `<img src="foto-biblioteca.JPG" alt="">`
    }
    else {
      this.img = `<img src="foto-rostro.webp" alt="">`
    }
  }
  projects: any = []
  constructor(private service: ProjectsService) {
    this.service.getProjects().subscribe({
      next: (data) => {
        this.projects = data
        console.log(this.projects)
      },
      error: (error) => console.error(error),
      complete: () => console.log("La llamada terminó")
    })
  }
}