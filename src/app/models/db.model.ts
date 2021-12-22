export interface Loja {
  alimentos?: (AlimentosEntity)[] | null;
  clientes?: (ClientesEntity)[] | null;
}
export interface AlimentosEntity {
  id?: string;
  descricao: string;
  valor: number;
}
export interface ClientesEntity {
  id?: string;
  nome: string;
  cidade: string;
  idade: number;
}
