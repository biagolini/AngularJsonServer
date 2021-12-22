import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { AlimentosService } from 'src/app/services/alimentos.service';
import { AlimentosEntity } from 'src/app/models/db.model';
@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss']
})
export class AlimentosComponent implements OnInit {
  // Property decorator that configures a view query.
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 // Construtor
  constructor(private dadosAPI: AlimentosService,
    private http: HttpClient) {
  }
  // Variáveis
  copyDB:  any[] = [];
  displayedColumns: string[] = ['id', 'descricao', 'valor', 'actions'];
  dataSource: MatTableDataSource<AlimentosEntity>;

/* ------------------METODOS------------------*/
ngOnInit(): void {
  this.dadosAPI.getAllData().subscribe (x =>  {
    this.copyDB = x,
    this.dataSource = new MatTableDataSource<AlimentosEntity>(this.copyDB);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
});
}
// Método de Filtro para dados em exibição na tabela
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

// Métodos de manipulação das tuplas
// Deletar registro
onDelete(rowId: string){
  console.log('Apagar a tupla de id = '+rowId);
}
// Editar registro
onEdit(rowData: []){
  console.log('Editar a tupla:');
  console.log(rowData);
}
// Criar novo registro
onCreate(): void{
  console.log('Adicionar uma tupla a tabela');
}
}
