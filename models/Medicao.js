import { Sequelize } from "Sequelize";
import connection from '../config/db.js';


const Medicao = connection.define(
    'medicao',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idFuncionario: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        salaSetor: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        medicao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
);



export default Medicao;