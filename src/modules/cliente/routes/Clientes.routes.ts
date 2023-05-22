import { Router } from "express";
import ClientesController from "../controller/ClientesController";

const clientesRouter = Router()

const clientesController = new ClientesController()

clientesRouter.post('/',clientesController.create)
clientesRouter.get('/:id',clientesController.get)
clientesRouter.delete('/:id',clientesController.delete)
clientesRouter.put('/:id',clientesController.update)

export default clientesRouter