import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
