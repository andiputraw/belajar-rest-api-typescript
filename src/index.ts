import express, { Application, Request, Response, NextFunction } from "express";
import { routes } from "./routes/index";

const app: Application = express();
const port: number = 3000;

routes(app);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
