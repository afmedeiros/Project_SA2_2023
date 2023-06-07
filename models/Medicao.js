import { Sequelize } from "Sequelize";
import connection from '../config/db.js';
import Empresa from "./Empresa.js";
import Setor from "./Setor.js";

const Medicao = connection.define(
    'medicao',
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
    },
);

Medicao.belongsTo(Empresa, {
    foreignKey: 'idEmpresa'
})

Medicao.belongsTo(Setor, {
    foreignKey: 'idSetor'
})

export default Medicao;