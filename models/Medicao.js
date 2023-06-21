import { Sequelize } from "Sequelize";
import connection from '../config/db.js';
import Funcionario from '../models/Funcionario.js';
import Setor from '../models/Setor.js'

//PROBLEMA COM O IDSALA (PQ COLOCOU, QUAL O USO DO IDSALA - SERIA IDSETOR)?
//MUDEI PARA TRUE ALLOWNULL PARA PODER TESTAR E GRAVAR BD

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
            allowNull: true,
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


export default Medicao;