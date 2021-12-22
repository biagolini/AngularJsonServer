import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from 'src/app/services/clientes.service';

import { ClientesEntity } from './../../models/db.model';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  // Property decorator that configures a view query.
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Construtor
  constructor(private dadosAPI: ClientesService) {  }

  // Variáveis
  // copyDB = Array que vai receber uma copia de todos os dados do banco de dados (via API) para apresentar na tabela
  copyDB:  any[] = [];
  // displayedColumns = Colunas do BD que serão apresentadas na nossa página
  displayedColumns: string[] = ['id', 'nome', 'cidade', 'idade', 'actions'];
  // DataSource = Data source that accepts a client-side data array and includes native support of filtering, sorting (using MatSort), and pagination (using MatPaginator).
  dataSource: MatTableDataSource<ClientesEntity>;

  /* ------------------METODOS------------------*/
  // ngOnInit será executado quando nosso componente for iniciado. Nesse momento em que uma cópia da tabela é enviada para a variável que criamos acima (copyDB)
  ngOnInit(): void {
      this.dadosAPI.getAllData().subscribe (x =>  {
        this.copyDB = x,
        this.dataSource = new MatTableDataSource<ClientesEntity>(this.copyDB);

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
