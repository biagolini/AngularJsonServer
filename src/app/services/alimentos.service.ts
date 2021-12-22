import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AlimentosEntity } from '../models/db.model';


@Injectable({
  providedIn: 'root'
})
export class AlimentosService {
  private listaProdutos: any[];
  private url = 'http://localhost:3000/alimentos/';

  constructor(private httpClient: HttpClient) {
    this.listaProdutos = [];
  }
  get produtos() {
    return this.listaProdutos;
  }

  getAllData() {
    return this.httpClient.get<AlimentosEntity[]>(this.url);
  }

  addData(novoDado: AlimentosEntity) {
    return this.httpClient.post<AlimentosEntity>(this.url, novoDado);
  }

  deleteData(id: string) {
    return this.httpClient.delete<AlimentosEntity>(this.url + id);
  }


}
