import { Component } from '@angular/core';

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
}
