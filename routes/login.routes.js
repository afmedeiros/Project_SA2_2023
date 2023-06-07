
import express from 'express';
import bcrypt from 'bcrypt';
import Empresa from '../models/Empresa.js';
import Funcionarios from '../models/Funcionario.js';
import jwt from 'jsonwebtoken';

const login = express.Router();

//leva a rota de login
login.post('/', async (req, res) => {
    const { email, password } = req.body;
    let user = {}

    const registeredUser = await Empresa.findOne(
        { where: { email}}
    ).catch(
        (err) => {
            console.log("Error: ", err)
        }
    );

    const registered = await Funcionarios.findOne(
        { where: { email}}
    ).catch(
        (err) => {
            console.log("Error: ", err)
        }
    );

    for(let i=0;i<=5;i++){
        if ( !registeredUser ) {
            
        }else{
            user = registeredUser
            break
        }
        
        if ( !registered ) {

        }else{
            user = registered
            break
        }
    }

    if (user.email != email) {
        i = 0
        return res
            .status(400)
            .json({ message: "Email ou senha inválidos!" })
    }

    if ( !bcrypt.compareSync(password, user.password)) {
        i = 0
        return res
            .status(400)
            .json({ message: "Email ou senha inválidos!" })
    }

    const token = jwt.sign(
        {
            id: user.id,
            name: user.name,
            admin: user.admin
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    )

    res.json(
        {
            message: ("Bem-vindo " + user.name + " !"),
            token: token
        }
    )

});

export default login;
