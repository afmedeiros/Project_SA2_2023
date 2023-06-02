import express from 'express';
import Funcionarios from '../models/Funcionarios';
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
    const { name, cnpj, email, password, admin } = req.body;

    const alreadyExistUser = await Funcionarios.findOne(
        { where: { email }}
    ).catch((err) => console.log("Error: ", err))

    if (alreadyExistUser) {
        console.log("Usuário existente: " + alreadyExistUser)
        return res
            .status(409)
            .json({ message: "E-mail ja utilizado por outro usuário." })
    }

    const newUser = new Funcionarios({ name, cnpj, email, password, admin })

    const savedUser = await newUser.save().catch((err) =>{
                                console.log("Error: ", err)
                                res
                                .status(500)
                                .json({error: "Não foi possivel cadastrar o usuário"})
                            })

    if (savedUser) {
        console.log(savedUser);
        res.json({ message: "Obrigado pelo cadastro!" })
    }

});

export default user;

