import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-alimentos',
  templateUrl: './update-alimentos.component.html',
  styleUrls: ['./update-alimentos.component.scss']
})
export class UpdateAlimentosComponent  {
  // Receive data from parent using 'MAT_DIALOG_DATA'
  form: FormGroup;
  // Criamos uma variável para receber o valor equivalente de cada campo do formulario
  id: string;
  descricao: string;
  valor: number;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateAlimentosComponent>,
    @Inject (MAT_DIALOG_DATA) data: any) {
      if(data!=null){ // Se tiver dado, carrega os dados atuais para as vaiáveis
      this.id = data.id;
      this.descricao = data.descricao;
      this.valor = data.valor;
      } // else...Se não tem dados, as variáveis estão zeradas e assim vão ficar
    }

  ngOnInit() {
    this.form = this.fb.group({
      id: [this.id],
      descricao: [this.descricao, Validators.required],
      valor: [this.valor, Validators.required],
    });
  }

  onSubmit() { // Metodo para clique no botão de enviar/atualizar
    var outputData = this.form.value;
    this.dialogRef.close({ data: outputData }) // Envia os dados do formulario para a pagina pai
  }

}
