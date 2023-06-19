
import express from 'express';
import bcrypt from 'bcrypt';
import Empresa from '../models/Empresa.js';
import Funcionario from '../models/Funcionario.js';
import jwt from 'jsonwebtoken';

const login = express.Router();

//leva a rota de login
login.post('/', async (req, res) => {
    const { email, password } = req.body;
    let user = {}
    let i = 0

    const registeredUser = await Empresa.findOne(
        { where: { email}}
    ).catch(
        (err) => {
            console.log("Error: ", err)
        }
    );

    const registered = await Funcionario.findOne(
        { where: { email}}
    ).catch(
        (err) => {
            console.log("Error: ", err)
        }
    );

    for(i=0;i<=5;i++){
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
            admin: user.admin,
            email: user.email
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
    i = 0

});

export default login;
