import { Sequelize } from "Sequelize";
import connection from '../config/db.js';
import Empresa from "./Empresa.js";
import bcrypt from 'bcrypt';

const Funcionarios = connection.define(
    'funcionarios',
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
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        admin: {
            type: Sequelize.BOOLEAN,
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
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        }
    }
);

Funcionarios.belongsTo(Empresa, {
    foreignKey: 'idEmpresa'
})

export default Funcionarios;