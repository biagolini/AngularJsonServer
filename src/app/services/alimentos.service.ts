import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

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
    return this.httpClient.get<AlimentosEntity[]>(this.url).pipe(take(1)); // take(1) pode ser substituido por first()
  }

  getTuple(tupleId: string) {
    let params = new HttpParams().set('id', tupleId); // Exige que importe o HttpParams
    return this.httpClient.get<AlimentosEntity[]>(this.url,{params: params }).pipe(take(1));
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
