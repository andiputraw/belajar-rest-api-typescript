import { Router, Request, Response, NextFunction } from "express";

export const ProductRouter: Router = Router();

//membuat fungsi get yang bisa diambil sama client

ProductRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ status: true, statusMessage: 200, data: { product: "laptop", harga: 600_000 } });
});

//membuat fungsi post yang menghandle kiriman data dari client

ProductRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ status: true, statusMessage: 200, data: req.body });
});
