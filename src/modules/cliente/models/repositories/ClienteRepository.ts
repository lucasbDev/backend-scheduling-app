// import { PrismaClient, Cliente } from '@prisma/client';

// const prisma = new PrismaClient();

// class ClienteRepository {
//   async criarCliente(clienteData: Omit<Cliente, 'id'>): Promise<Cliente> {
//     const cliente = await prisma.cliente.create({
//       data: clienteData,
//     });
//     return cliente;
//   }

//   async buscarClientePorId(clienteId: number): Promise<Cliente | null> {
//     const cliente = await prisma.cliente.findUnique({
//       where: { id: clienteId },
//     });
//     return cliente;
//   }

//   async buscarTodosClientes(): Promise<Cliente[]> {
//     const clientes = await prisma.cliente.findMany();
//     return clientes;
//   }

//   async atualizarCliente(clienteId: number, clienteData: Partial<Cliente>): Promise<Cliente | null> {
//     const cliente = await prisma.cliente.update({
//       where: { id: clienteId },
//       data: clienteData,
//     });
//     return cliente;
//   }

//   async excluirCliente(clienteId: number): Promise<Cliente | null> {
//     const cliente = await prisma.cliente.delete({
//       where: { id: clienteId },
//     });
//     return cliente;
//   }
// }

// export default ClienteRepository;
