import { Request, Response } from 'express'
import  AppError  from '../../../shared/Errors/AppError'
import {
    createClientService,
    deleteClientService,
    listAllClienteService,
    listClienteService,
    updateClienteService
} from '../models/services/index'


export default class ClientesController {
    public async create(request: Request, response: Response) {
        const { data } = request.body
        const createCliente = new  createClientService()
        const result = await createCliente.perfom(data)
        if(!result){
            throw new AppError('Não foi possível criar o cliente!')
        }
        return response.status(200).json(result)
    }

    public async update(request: Request,response: Response) {
        const { data } = request.body
        const updateCliente = new updateClienteService()
        const result = await updateCliente.perfom(data) 
        if(!result){
            throw new AppError('não foi possível atualizar o cliente!')
        }
        return response.status(201).json(result)
    }

    //public async list(request: Request,response: Response) {
    //    const {id} = request.params
    //    const listCliente = new listClienteService()
    //    const result = await listCliente.perform(id) 
    //    if(!result){
    //        throw new AppError('cliente não encontrado! ')
    //    }
    //    return response.status(200).json(result)
    //}

    async index(request: Request,response: Response) {
        const listCliente = new listAllClienteService()
        const result = await listCliente.perform()
        if(!result){
            throw new AppError('Cliente não encontrado! ')
        }
        return response.status(200).json(result)
    }

    async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteProduct = new deleteClientService();
    await deleteProduct.perform(parseInt(id)); // Passa o ID como um número inteiro
    return response.status(200).json([]);
}

}