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

const funcionario = express.Router();

//rota para lista de usuario
funcionario.get('/verify', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

//rota para registro de usuario 
funcionario.post('/register', async (req, res) => {

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

funcionario.get('/find', async (req, res) => {

    const funcionarios = await Funcionario.findAll().catch(
        (err) => {
            console.log(err)
        }
    );

    if (funcionarios){
        return res.json({funcionarios})
    } else {
        return null
    }
});

funcionario.post('/delete', async (req, res) => {

    const id = req.body.id;

    const funcionarios = await Funcionario.findOne({
        where: { id }
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    funcionarios.destroy()

    if (funcionarios){
        return res.json({ message: "Funcionario deletado com sucesso!" })
    } else {
        return null
    }
});

export default funcionario;

