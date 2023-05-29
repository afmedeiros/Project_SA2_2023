import { Sequelize } from "Sequelize";
import connection from '../config/db.js';
import Empresa from "./Empresa.js";

const Setor = connection.define(
    'setor',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        idEmpresa: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'empresas',
                key: 'id'
            }
        }
    }
);

Setor.belongsTo(Empresa, {
    foreignKey: 'idEmpresa'
})

export default Setor;