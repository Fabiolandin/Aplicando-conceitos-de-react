export type StatusChamado =
  | "Em aberto"
  | "Em andamento"
  | "Finalizado";

export interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  status: StatusChamado;
}