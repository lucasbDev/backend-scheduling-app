import { Horarios, Barbeiro } from "@prisma/client";

interface IClienteDTO {
  id: number;
  nome: string;
  email: string;
  senha: string;
  createdAt: Date;
  updatedAt: Date;
  horarios: Horarios[];
  barbeiro: Barbeiro[];
}

export default IClienteDTO;