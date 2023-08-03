
import { Router } from 'express';

import { getProductos, postProductos, putProductos, deleteProductos, getProducto, getClientes, postClientes, putClientes, deleteClientes, getCompras, postCompras, deleteCompras, buscarProductos, validarCliente, getCompra } from '../Controllers/controller.js';

const router = Router();

//Definir Rutas
router.get("/", (req, res) => {
    res.send("GET Pagina Principal Express")
});

router.get("/productos", getProductos);
router.get("/productos/:idProducto", getProducto);
router.post("/productos", postProductos);
router.put("/productos/:idProducto", putProductos);
router.delete("/productos/:idProducto", deleteProductos);

router.get("/clientes", getClientes);
router.post("/clientes", postClientes);
router.put("/clientes/:idCliente", putClientes);
router.delete("/clientes/:idCliente", deleteClientes);

router.get("/compras", getCompras);
router.post("/compras", postCompras);
router.delete("/compras/:idCompra", deleteCompras)
router.get("/compras/:idCompra", getCompra);


router.post("/buscar/", buscarProductos);
router.post("/sesion/", validarCliente);

export { router };