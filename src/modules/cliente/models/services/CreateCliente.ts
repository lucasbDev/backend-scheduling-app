import { PrismaClient, Cliente } from '@prisma/client';
import IClienteDTO from '../../interface/IClienteDTO';

const prisma = new PrismaClient();

export class CreateClientService {
  async perfom(data: IClienteDTO): Promise<Cliente> {
    const cliente = await prisma.cliente.create({
      data: {
        id: data.id,
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      },
    });
    return cliente;
  }
}

export default CreateClientService;

