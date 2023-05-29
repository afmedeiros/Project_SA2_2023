
import express from 'express';
import bcrypt from 'bcrypt';
import Empresa from '../models/Empresa.js';
import jwt from 'jsonwebtoken';


const login = express.Router();

//leva a rota de login
login.post('/', async (req, res) => {
    const { email, password } = req.body;

    const registeredUser = await Empresa.findOne(
        { where: { email}}
    ).catch(
        (err) => {
            console.log("Error: ", err)
        }
    );

    if ( !registeredUser ) {
         return res
             .status(400)
             .json({ message: "Email ou senha inválidos!" })
    }

    if ( !bcrypt.compareSync(password, registeredUser.password)) {
        return res
            .status(400)
            .json({ message: "Email ou senha inválidos!" })
    }

    const token = jwt.sign(
        {
            id: registeredUser.id,
            name: registeredUser.name,
            admin: registeredUser.admin
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );

    res.json(
        {
            message: ("Bem-vindo " + registeredUser.name),
            token: token
        }
    )

});

export default login;
