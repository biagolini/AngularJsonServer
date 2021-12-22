import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ClientesEntity } from '../models/db.model';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private listaClientes: any[];
  private url = 'http://localhost:3000/clientes/';

  constructor(private httpClient: HttpClient) {
    this.listaClientes = [];
  }
  get clientes() {
    return this.listaClientes;
  }

  getAllData() {
    return this.httpClient.get<ClientesEntity[]>(this.url);
  }

  addData(novoDado: ClientesEntity) {
    return this.httpClient.post<ClientesEntity>(this.url, novoDado);
  }

  deleteData(id: string) {
    return this.httpClient.delete<ClientesEntity>(this.url + id);
  }
}
