import { HttpClient, HttpParams } from '@angular/common/http';
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

  getTuple(tupleId: string) {
    let params = new HttpParams().set('id', tupleId); // Exige que importe o HttpParams
    return this.httpClient.get<AlimentosEntity[]>(this.url,{params: params });
  }



  deleteData(id: string) {
    return this.httpClient.delete<AlimentosEntity>(this.url + id);
  }

  addData(newData: AlimentosEntity) {
    return this.httpClient.post<AlimentosEntity>(this.url, newData);
  }

  editTuple(editData: AlimentosEntity) {
    const id = editData.id;
    return this.httpClient.put<AlimentosEntity>(this.url+id, editData);
  }

}
