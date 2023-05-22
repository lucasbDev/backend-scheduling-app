import Express, { NextFunction, Request, Response }  from "express";
import routes from "./routes";

const app = Express();
const PORT = process.env.PORT || 3333;
app.use(Express.json())

app.use(routes)

app.listen(PORT, () => {
    console.log('servidor iniciado na porta ' + PORT)
  });