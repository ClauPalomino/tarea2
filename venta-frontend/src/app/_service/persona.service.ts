import { Persona } from './../_model/persona';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personasCambio= new Subject<Persona[]>();
  mensajeCambio=new Subject<string>();
  url: string=`${environment.HOST_URL}/personas`;

  constructor(private httpClient: HttpClient) {   }
  listar()  {
    return this.httpClient.get<Persona[]>(this.url)

  }
  listarPersonaPorId(id:number)
  {
   return this.httpClient.get<Persona>(`${this.url}/${id}`);
  }
  registrar (persona: Persona)
  {
    return this.httpClient.post(this.url,persona);
  }
  

  modificar(persona: Persona)
  {
    return this.httpClient.put(this.url,persona);
  }
  eliminar(id:number)
  {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  


}
