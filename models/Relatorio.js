import { Sequelize } from "Sequelize";
import connection from '../config/db.js';
import Funcionario from './Funcionario.js'

const Relatorio = connection.define(
    'relatorio',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idFuncionario: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'funcionarios',
                key: 'id'
            }
        }
    },
);

Relatorio.belongsTo(Funcionario, {
    foreignKey: 'idFuncionario'
})

export default Relatorio;