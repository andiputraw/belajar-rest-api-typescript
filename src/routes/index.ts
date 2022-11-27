import { Application, Router } from "express";
import { HealthRouter } from "./health";

const _routes: Array<[string, Router]> = [["/health", HealthRouter]];

const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
