import { Router, Request, Response, NextFunction } from "express";

const HealthRoute: Router = Router();

HealthRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ status: true, statusMessage: 200, data: { status: "sehat" } });
});
