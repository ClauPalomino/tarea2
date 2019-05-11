import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { Producto } from '../_model/producto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productosCambio=new Subject<Producto[]>();
  mensajeCambio=new Subject<string>();
  url: string = `${environment.HOST_URL}/productos`;
  constructor(private httpClient: HttpClient) { 
   
  }
  listar(){
   return this.httpClient.get<Producto[]>(this.url);
  }
  listarProductoPorId(id:number)
  {
   return this.httpClient.get<Producto>(`${this.url}/${id}`);
  }
  registrar (producto: Producto)
  {
    return this.httpClient.post(this.url,producto);
  }
  modificar(producto: Producto)
  {
    return this.httpClient.put(this.url,producto);
  }
  eliminar(id:number)
  {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
