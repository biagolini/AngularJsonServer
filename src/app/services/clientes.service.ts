import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

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
    return this.httpClient.get<ClientesEntity[]>(this.url).pipe(take(1)); // ou firts()

  }

  getTuple(tupleId: string) {
    let params = new HttpParams().set('id', tupleId); // Exige que importe o HttpParams
    return this.httpClient.get<ClientesEntity[]>(this.url,{params: params }).pipe(take(1));
  }

  addData(novoDado: ClientesEntity) {
    return this.httpClient.post<ClientesEntity>(this.url, novoDado)
  }

  deleteData(id: string) {
    return this.httpClient.delete<ClientesEntity>(this.url + id);
  }

  editTuple(editData: ClientesEntity) {
    const id = editData.id;
    return this.httpClient.put<ClientesEntity>(this.url+id, editData);
  }

}
