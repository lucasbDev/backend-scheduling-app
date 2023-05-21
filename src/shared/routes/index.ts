import { Router } from "express";
import clientesRouter from "../../modules/cliente/routes/Clientes.routes";

const routes = Router()

routes.use('/clientes', clientesRouter)

export default routes