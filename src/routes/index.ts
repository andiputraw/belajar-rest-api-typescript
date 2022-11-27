import { Application, Router } from "express";
import { HealthRouter } from "./health";
import { ProductRouter } from "./product";

//list url - router biar gampang tambah kurang nya tinggal di loop
//dokumentasi utama tentang router ada di product

const _routes: Array<[string, Router]> = [
  ["/health", HealthRouter],
  ["/product", ProductRouter],
];

//fungsi utama menjalankan fungsi ini

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
