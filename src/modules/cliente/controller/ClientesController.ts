import { Request, Response } from "express";
import { ClienteService } from "../models/services/ClienteServices";
import  AppError  from '../../../shared/Errors/AppError'

const clienteService = new ClienteService();

export class ClienteController {
  async create(request: Request, response: Response) {
      const { data } = request.body;
      const cliente = await clienteService.criarCliente(data);
      if(!cliente){
            throw new AppError('Não foi possível criar o cliente!')
        }
    return response.status(201).json(cliente);
  }

  async get(request: Request, response: Response) {
      const { id } = request.params;
      const cliente = await clienteService.buscarCliente(Number(id));
      if(!cliente){
            throw new AppError('Não foi possível buscar o cliente!')
        }
      return response.status(200).json(cliente);
    } 


  async update(request: Request, response: Response) {
      const { id } = request.params;
      const { data } = request.body;
      const cliente = await clienteService.atualizarCliente(Number(id), data);
      if(!cliente){
            throw new AppError('Não foi possível atualizar o cliente!')
        }
    return response.status(200).json(cliente);
  }

  async delete(request: Request, response: Response) {
      const { id } = request.params;
      const cliente = await clienteService.deletarCliente(Number(id));
      if(!cliente){
            throw new AppError('Não foi possível deletar o cliente!')
        }
      return response.status(200).json(cliente);
  }
}

export default ClienteController