import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Project {
  title: string
  technologies: []
  year: string
  url: string
  description: string
  main: boolean
  id: string
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private apiUrl = "http://localhost:3000/projects"
  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
  createProject(newProject: any): Observable<any> {
    return this.http.post(this.apiUrl, newProject);
  }
  deleteProject(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
