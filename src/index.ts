import bodyParser from "body-parser";
import express, { Application, Request, Response, NextFunction } from "express";
import { routes } from "./routes/index";
import cors from "cors";

const app: Application = express();
const port: number = 3000;

//parse body request
//Buat mengubah data yang dikirim sama client

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors handler
//simplenya ini adalah permission
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//jalankan route

routes(app);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
