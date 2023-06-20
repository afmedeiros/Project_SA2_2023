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
<<<<<<< HEAD
            allowNull: true,
=======
            allowNull: false,
>>>>>>> 9926e280eff6b93c038c8525fd1cdd1b917869e0
            references: {
                model: 'setors',
                key: 'id'
            }
<<<<<<< HEAD

=======
>>>>>>> 9926e280eff6b93c038c8525fd1cdd1b917869e0
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