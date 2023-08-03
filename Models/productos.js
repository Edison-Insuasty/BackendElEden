import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';
// const sequelize = new Sequelize('sqlite::memory:');

const Producto = sequelize.define('productos', {
        // Model attributes are defined here
        idProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },
        detalle: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },
        precio: {
            type: DataTypes.DOUBLE
                // allowNull defaults to true
        },
        cantidad: {
            type: DataTypes.INTEGER
                // allowNull defaults to true
        },
        imagen: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },

    },

    {
        timestamps: false,
    });

const Cliente = sequelize.define('cliente', {
        // Model attributes are defined here
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },
        correo: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },
        telefono: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },

        clave: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },

        admin: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },
    },

    {
        timestamps: false,
    }

);

const Compra = sequelize.define('compra', {
        // Model attributes are defined here
        idCompra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_cli: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },
        correo_cli: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },
        telefono_cli: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },

        nombre_pro: {
            type: DataTypes.STRING
                // allowNull defaults to true
        },

        cantidad: {
            type: DataTypes.INTEGER
                // allowNull defaults to true
        },
        precio: {
            type: DataTypes.DOUBLE
                // allowNull defaults to true
        },

    },

    {
        timestamps: false,
    }

);
// Compra.belongsTo(Cliente, { foreignKey: "idCliente" });
// Cliente.hasMany(Compra, { foreignKey: "idCliente" });

// Compra.belongsTo(Producto, { foreignKey: "idProducto" });
// Producto.hasMany(Compra, { foreignKey: "idProducto" });


export {
    Producto,
    Cliente,
    Compra
}