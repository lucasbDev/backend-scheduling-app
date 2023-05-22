import { PrismaClient, Barbeiro } from "@prisma/client";

const prisma = new PrismaClient();

export class BarbeiroService {
  async criarBarbeiro(data: Barbeiro): Promise<Barbeiro> {
    const barbeiro = await prisma.barbeiro.create({
      data,
    });
    return barbeiro;
  }

  async buscarBarbeiro(id: number): Promise<Barbeiro | null> {
    const barbeiro = await prisma.barbeiro.findUnique({
      where: { id },
    });
    return barbeiro;
  }

  async atualizarBarbeiro(id: number, data: Barbeiro): Promise<Barbeiro | null> {
    const barbeiro = await prisma.barbeiro.update({
      where: { id },
      data,
    });
    return barbeiro;
  }

  async deletarBarbeiro(id: number): Promise<Barbeiro | null> {
    const barbeiro = await prisma.barbeiro.delete({
      where: { id },
    });
    return barbeiro;
  }
}
