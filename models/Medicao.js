import { Sequelize } from "Sequelize";
import connection from '../config/db.js';
import Funcionario from '../models/Funcionario.js';
import Setor from '../models/Setor.js'

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
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'funcionarios',
                key: 'id'
            }
        },
        idSala: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'setors',
                key: 'id'
            }
        },
        medicao: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: true
        },
    },
);

Medicao.belongsTo(Funcionario, {
    foreignKey: 'idFuncionario'
})

Medicao.belongsTo(Setor, {
    foreignKey: 'idSala'
})


export default Medicao;