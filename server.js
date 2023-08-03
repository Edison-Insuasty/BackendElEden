import express from 'express';
import { router } from './Routes/routes.js';
import { sequelize } from './Database/database.js';

import cors from 'cors';
//Crear isntancia
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.set('port', 3000);

//test a base de datos
const testBd = async() => {
    try {
        await sequelize.authenticate();
        console.log("Conexion con exito");
        app.listen(app.get('port'), () => {
            console.log(`Escuchando por puertpo ${app.get('port')}`);
        });
    } catch (error) {
        console.log(`Error al relzar conexion ${error}`);
    }
};
testBd();