import { PrismaClient, Cliente } from "@prisma/client";

const prisma = new PrismaClient();

export class ClienteService {
  async criarCliente(data: Cliente): Promise<Cliente> {
    const cliente = await prisma.cliente.create({
      data,
    });
    return cliente;
  }

  async buscarCliente(id: number): Promise<Cliente | null> {
    const cliente = await prisma.cliente.findUnique({
      where: { id },
    });
    return cliente;
  }

  async atualizarCliente(id: number, data: Cliente): Promise<Cliente | null> {
    const cliente = await prisma.cliente.update({
      where: { id },
      data,
    });
    return cliente;
  }

  async deletarCliente(id: number): Promise<Cliente | null> {
    const cliente = await prisma.cliente.delete({
      where: { id },
    });
    return cliente;
  }
}

export default ClienteService