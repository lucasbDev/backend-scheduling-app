import { Horarios, Barbeiro } from "@prisma/client";

interface IClienteDTO {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  createdAt?: Date;
  updatedAt?: Date;
  horarios?: {
    select?: {
      date: boolean;
      disponivel: boolean;
    };
  };
  barbeiro?: {
    select?: {
      nome: boolean;
    };
  };
}

export default IClienteDTO;