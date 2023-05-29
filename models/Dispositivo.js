import { Sequelize } from "Sequelize";
import connection from '../config/db.js';
import Empresa from "./Empresa.js";
import Setor from "./Setor.js";

const Dispositivo = connection.define(
    'dispositivo',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idSetor: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'setors',
                key: 'id'
            }
        },
        idEmpresa: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'empresas',
                key: 'id'
            }
        },
        value: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        time: {
            type: Sequelize.TIME,
            allowNull: false
        },
    }
);

Dispositivo.belongsTo(Setor, {
    foreignKey: 'idSetor'
});

Dispositivo.belongsTo(Empresa, {
    foreignKey: 'idEmpresa'
});

export default Dispositivo;