import express from 'express';
import Funcionario from '../models/Funcionario.js';
import jwt from 'jsonwebtoken';

const verifyToken = (token, res) => {
    jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, authData) => {
            if (err) {

                res.sendStatus(403)

            } else {

                res.json({authData})

            };
        }
    )
};

const user = express.Router();

//rota para lista de usuario
user.get('/verify', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

//rota para registro de usuario 
user.post('/register', async (req, res) => {

    const { name, email, password, admin, idEmpresa } = req.body;

    const alreadyExistUser = await Funcionario.findOne(
        { where: { email }}
    ).catch((err) => console.log("Error: ", err))

    if (alreadyExistUser) {
        console.log("Usuário existente: " + alreadyExistUser)
        return res
            .status(409)
            .json({ message: "E-mail ja utilizado por outro usuário." })
    }


    const newFunc = new Funcionario({ name, email, password, admin, idEmpresa })

    const savedFunc = await newFunc.save().catch((err) =>{
                                console.log("Error: ", err)
                                res
                                .status(500)
                                .json({error: "Não foi possivel cadastrar o funcionario"})
                            })

    if (savedFunc) {
        console.log(savedFunc);
        res.json({ message: "Funcionario cadastrado!" })
    }

});

export default user;

