import { Cliente, Producto, Compra } from "../Models/productos.js";

const getProductos = async(req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(400).json({ mensaje: error });

    }
}

const getProducto = async(req, res) => {
    const { idProducto } = req.params;
    try {
        const producto = await Producto.findByPk(idProducto);
        res.status(200).json([producto]);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
}

const postProductos = async(req, res) => {
    const { nombre, detalle, precio, imagen } = req.body;
    try {
        const newProducto = await Producto.create({
            nombre,
            detalle,
            precio,
            imagen
        });
        res.status(200).json(newProducto);
    } catch (error) {
        res.status(200).json({ mensaje: error });
    }
};


const putProductos = async(req, res) => {
    const { idProducto } = req.params;
    const { nombre, detalle, precio, imagen } = req.body;
    try {
        const oldProducto = await Producto.findByPk(idProducto);
        oldProducto.nombre = nombre;
        oldProducto.detalle = detalle;

        oldProducto.precio = precio;
        oldProducto.imagen = imagen;
        const modProducto = oldProducto.save();
        res.status(200).json(modProducto);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
}

const deleteProductos = async(req, res) => {
    const { idProducto } = req.params;
    try {
        const respuesta = await Producto.destroy({
            where: {
                idProducto,
            }
        });
        res.status(200).json({ mensaje: "Registro eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: `${error}` });
    }
};

//////////
const getClientes = async(req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

const getCliente = async(req, res) => {
    const { idCliente } = req.params;
    try {
        const cliente = await Producto.findByPk(idCliente);
        res.status(200).json([cliente]);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
}

///////

////



const postClientes = async(req, res) => {
    const { nombre, correo, telefono, clave, admin } = req.body;
    try {
        const newCliente = await Cliente.create({
            nombre,
            correo,
            telefono,
            clave,
            admin
        });
        res.status(200).json(newCliente);
    } catch (error) {
        res.status(200).json({ mensaje: error });
    }
};

const putClientes = async(req, res) => {
    const { idCliente } = req.params;
    const { nombre, correo, telefono } = req.body;
    try {
        const oldCliente = await Cliente.findByPk(idCliente);
        oldCliente.nombre = nombre;
        oldCliente.correo = telefono;
        oldCliente.telefono = telefono;
        const modCliente = oldCliente.save();
        res.status(200).json(modCliente);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

const deleteClientes = async(req, res) => {
    const { idCliente } = req.params;
    try {
        const respuesta = await Cliente.destroy({
            where: {
                idCliente,
            }
        });
        res.status(200).json({ mensaje: "Cliente eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: `${error}` });
    }
};



const getCompra = async(req, res) => {
    const { idCompra } = req.params;
    try {
        const compra = await Compra.findByPk(idCompra);
        res.status(200).json([compra]);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
}
const getCompras = async(req, res) => {
    try {
        const compras = await Compra.findAll();
        res.status(200).json(compras);
    } catch (error) {
        res.status(400).json({ mensaje: error });

    }
};


const postCompras = async(req, res) => {
    const {
        nombre_cli,
        correo_cli,
        telefono_cli,
        nombre_pro,
        cantidad,
        precio
    } = req.body;
    try {
        const newCompra = await Compra.create({

            nombre_cli,
            correo_cli,
            telefono_cli,
            nombre_pro,
            cantidad,
            precio
        });
        res.status(200).json(newCompra);
    } catch (error) {
        res.status(200).json({ mensaje: error });
    }
};

const deleteCompras = async(req, res) => {
    const { idCompra } = req.params;
    try {
        const respuesta = await Compra.destroy({
            where: {
                idCompra,
            }
        });
        res.status(200).json({ mensaje: "Compra eliminada" });
    } catch (error) {
        res.status(400).json({ mensaje: `${error}` });
    }
};



const buscarProductos = async(req, res) => {
    const { nombre } = req.body;

    try {
        const producto = await Producto.findOne({
            where: {
                nombre: nombre,
            },
        });
        if (!producto) {
            return res.status(401).json({ mensaje: "Producto no encontrado" });
        }

        if (producto.nombre !== nombre) {
            return res.status(401).json({ mensaje: "Producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};


const validarCliente = async(req, res) => {
    const { nombre, clave } = req.body;

    try {
        const cliente = await Cliente.findOne({
            where: {
                nombre: nombre,
                clave: clave,
            },
        });


        if (!cliente) {
            return res.status(401).json({ mensaje: "Datos incorrectos" });
        }


        res.status(200).json(cliente);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

export { getCompra, 
        validarCliente, 
        buscarProductos, 
        getProductos,
        postProductos, 
        putProductos, 
        deleteProductos, 
        getProducto, 
        getClientes, 
        getCliente, 
        postClientes, 
        putClientes, 
        deleteClientes, 
        getCompras, 
        postCompras, 
        deleteCompras };