import { PrismaClient, Cliente } from '@prisma/client';

const prisma = new PrismaClient();

export class listAllClienteService {
    async perform(): Promise<Cliente[]> {
    const clientes = await prisma.cliente.findMany();
    return clientes;
  }
}

export default listAllClienteService;
