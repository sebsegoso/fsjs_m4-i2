import { Articulo } from "./classes/articulo.js";
import { Proveedor } from "./classes/Proveedor.js";
import { consoleLog } from "./dom.js";

const tomates = new Articulo({
  nombre: "Tomates San Marzano 2.5kg",
  precio: 15000,
});
const harina = new Articulo({
  nombre: "Harina Caputo Pizzería 25kg",
  precio: 53990,
});
const semola = new Articulo({ nombre: "Semola Caputo 1kg", precio: 15000 });
const proveedor1 = new Proveedor({
  nombre: "Leefod",
  email: "contacto@leefod.cl",
  telefono: "5699846531",
  articulos: [tomates, harina, semola],
});

const soju = new Articulo({ nombre: "Soju original", precio: 3000 });
proveedor1.agregarArticulo(soju);
consoleLog(proveedor1.getInfoProveedor());
consoleLog(proveedor1.calcularImpuesto());
