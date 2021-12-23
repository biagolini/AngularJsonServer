import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { AlimentosEntity } from 'src/app/models/db.model';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { UpdateAlimentosComponent } from '../update/update-alimentos/update-alimentos.component';

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
      private  dialog: MatDialog) {
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
    let dialogRef = this.dialog.open(UpdateAlimentosComponent, dialogConfig);
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

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    // Estabelecer parametros de como será nosso Dialog
    dialogConfig.disableClose = false; // Permite que ESC ou clicar fora da caixa feche o dialog
    dialogConfig.autoFocus = true; // True, meaning that the focus will be set automatically on the first form field of the dialog
    dialogConfig.width = "75%";
    // Abrir o dialog com um formulário zerado
    let dialogRef = this.dialog.open(UpdateAlimentosComponent, dialogConfig);
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
