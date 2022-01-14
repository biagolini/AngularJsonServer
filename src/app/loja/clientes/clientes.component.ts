import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from 'src/app/services/clientes.service';

import { UpdateClientesComponent } from '../update/update-clientes/update-clientes.component';
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
  constructor(private dadosAPI: ClientesService,
    private  dialog: MatDialog) {  }

  // Variáveis
  // copyDB = Array que vai receber uma copia de todos os dados do banco de dados (via API) para apresentar na tabela
  copyDB:  any[] = [];

  tupleDB: any[] = [];
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
    if(confirm('Você têm certeza que deseja deletar o registro de ID = '+ rowId +' ?') )
    {
      this.dadosAPI.deleteData(rowId).subscribe(
        {
        next: data => {
          this.ngOnInit();
        },
        error: error => {
          alert('Devido a um erro interno, este registro não foi deletado.');
          console.error('There was an error!', error);
        }
      });
    }
  }

  // Editar registro
  onEdit(rowData: []){
    const dialogConfig = new MatDialogConfig();
    // Estabelecer parametros de como será nosso Dialog
    dialogConfig.disableClose = false; // Permite que ESC ou clicar fora da caixa feche o dialog
    dialogConfig.autoFocus = true; // True, meaning that the focus will be set automatically on the first form field of the dialog
    dialogConfig.width = "75%";
    dialogConfig.data = rowData
    // Abrir o dialog com um formulário zerado
    let dialogRef = this.dialog.open(UpdateClientesComponent, dialogConfig);
    // Manipular dados recebidos do dialog após o mesmo ser fechado
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if(res.data ?? false){
        // Codigo para editar novo registro
        this.dadosAPI.editTuple(res.data).subscribe(
          {
            next: data => {
              this.ngOnInit();
            },
            error: error => {
              alert('Devido a um erro interno, este registro não foi atualizado no banco de dados.');
              console.error('There was an error!', error);
            }
          });
      }
      else
      {
        console.log('Operação cancelada');
      }
    })
  }

  // Criar novo registro
  onCreate(): void{
    const dialogConfig = new MatDialogConfig();
    // Estabelecer parametros de como será nosso Dialog
    dialogConfig.disableClose = false; // Permite que ESC ou clicar fora da caixa feche o dialog
    dialogConfig.autoFocus = true; // True, meaning that the focus will be set automatically on the first form field of the dialog
    dialogConfig.width = "75%";
    // Abrir o dialog com um formulário zerado
    let dialogRef = this.dialog.open(UpdateClientesComponent, dialogConfig);
    // Manipular dados recebidos do dialog após o mesmo ser fechado
    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if(res.data ?? false){
        console.log('ADICIONAR registro');
        console.log(res.data);
        // Codigo para adicionar novo registro
        this.dadosAPI.addData(res.data).subscribe(
          {
            next: data => {
              this.ngOnInit();
            },
            error: error => {
              alert('Devido a um erro interno, este registro não foi adicionado ao banco de dados.');
              console.error('There was an error!', error);
            }
          });
      }
      else
      {
        console.log('Operação cancelada');
      }
    })
  }
}
