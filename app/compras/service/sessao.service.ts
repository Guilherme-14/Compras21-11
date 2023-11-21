import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Isessao } from './isessao';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {
  private readonly API="http://localhost:3000/produtos";
  constructor(private http: HttpClient) {}

  listar(){
    //A interface <itarefas> vai receber as informações do bakc-end
    return this.http.get<Isessao[]>(this.API);
  }
}
