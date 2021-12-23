import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-clientes',
  templateUrl: './update-clientes.component.html',
  styleUrls: ['./update-clientes.component.scss']
})
export class UpdateClientesComponent{
  // Receive data from parent using 'MAT_DIALOG_DATA'
  form: FormGroup;
  // Criamos uma variável para receber o idade equivalente de cada campo do formulario
  id: string;
  nome: string;
  cidade: string;
  idade: number;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateClientesComponent>,
    @Inject (MAT_DIALOG_DATA) data: any) {
      if(data!=null){ // Se tiver dado, carrega os dados atuais para as vaiáveis
      this.id = data.id;
      this.nome = data.nome;
      this.cidade = data.cidade;
      this.idade = data.idade;
      } // else...Se não tem dados, as variáveis estão zeradas e assim vão ficar
    }

  ngOnInit() {
    this.form = this.fb.group({
      id: [this.id],
      nome: [this.nome, Validators.required],
      cidade: [this.cidade, Validators.required],
      idade: [this.idade, Validators.required],
    });
  }

  onSubmit() { // Metodo para clique no botão de enviar/atualizar
    var outputData = this.form.value;
    this.dialogRef.close({ data: outputData }) // Envia os dados do formulario para a pagina pai
  }

}
