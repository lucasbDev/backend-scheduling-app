import { Router } from "express";
import ClientesController from "../controller/ClienteController";

const clientesRouter = Router()

const clientesController = new ClientesController()

clientesRouter.post('/',clientesController.create)
clientesRouter.get('/',clientesController.index)
clientesRouter.delete('/',clientesController.delete)
clientesRouter.put('/',clientesController.update)

export default clientesRouter