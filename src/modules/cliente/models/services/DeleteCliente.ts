import { PrismaClient, Cliente } from '@prisma/client';
import IClienteDTO from '../../interface/IClienteDTO';

const prisma = new PrismaClient();

export class deleteClientService {
   async perform(id: number): Promise<Cliente | null> {
    const cliente = await prisma.cliente.delete({
      where: { id : id },
    });
    return cliente;
  }
}

export default deleteClientService;
