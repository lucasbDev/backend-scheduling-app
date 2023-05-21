import { PrismaClient, Cliente } from '@prisma/client';
import IClienteDTO from '../../interface/IClienteDTO';

const prisma = new PrismaClient();

export class listClienteService {
   async perform({id}: IClienteDTO): Promise<Cliente | null> {
    const cliente = await prisma.cliente.findUnique({
      where: { id: id },
    });
    return cliente;
  }
}

export default listClienteService;
