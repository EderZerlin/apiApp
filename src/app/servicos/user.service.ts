import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  // métodos
  public listarUsuarios(pagina: Number){
    return this.http.get(`${this.url}?page=${pagina}`);
  }

  public buscarUsuario(id: Number){
    return this.http.get(`${this.url}/${id}`)
  }
}
