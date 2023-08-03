import { Sequelize } from "sequelize";
const sequelize = new Sequelize('eden', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
});
export { sequelize }
