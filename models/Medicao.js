import { Sequelize } from "Sequelize";
import connection from '../config/db.js';
import Setor from '../models/Setor.js'
import Empresa from "./Empresa.js";

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
        idEmpresa: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'empresas',
                key: 'id'
            }
        },
        idSala: {
            type: Sequelize.INTEGER,
            allowNull: true,
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

Medicao.belongsTo(Empresa, {
    foreignKey: 'idEmpresa'
})

Medicao.belongsTo(Setor, {
    foreignKey: 'idSala'
})

export default Medicao;