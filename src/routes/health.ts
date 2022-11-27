import { Router, Request, Response, NextFunction } from "express";

export const HealthRouter: Router = Router();

HealthRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ status: true, statusMessage: 200, data: { status: "sehat" } });
});
