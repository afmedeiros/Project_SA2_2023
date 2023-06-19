import express from 'express';
import Empresa from '../models/Empresa.js'
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

const perfil = express.Router();

//rota para lista de usuario
perfil.get('/verify', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

//rota para registro de usuario 
perfil.post('/senhaUpdate',async (req,res)=>{

    const { email, password } = req.body;

    let response = await Empresa.findOne({
        where:{ email }
    });

    let responses = await Funcionario.findOne({
        where:{ email }
    });

    if ( response ){

        response.password = password
        const response = await response.save().catch   ((err) =>{
            console.log("Error:", err)
            res
            .status(500)
            .json({error: "Não foi possivel salvar a alteração"})
        })

        if (savedPassword) {
            console.lo(savedPassword);
            res.json({ message:"Alteração sala!" })
        }
        
    } else if ( responses ){

        responses.password = password
        const responses = await responses.save().catch   ((err) =>{
            console.log("Error:", err)
            res
            .status(500)
            .json({error: "Não foi possivel salvar a alteração"})
        })

        if (savedPassword) {
            console.lo(savedPassword);
            res.json({ message:"Alteração salva!" })
        }
    }
});

perfil.post('/emailUpdate',async (req,res)=>{

    const { email, NovoEmail } = req.body;

    let response = await Empresa.findOne({
        where:{ email }
    });

    let responses = await Funcionario.findOne({
        where:{ email }
    });

    if ( response ){

        response.email = NovoEmail
        const response = await response.save().catch   ((err) =>{
            console.log("Error:", err)
            res
            .status(500)
            .json({error: "Não foi possivel salvar a alteração"})
        })

        if (response) {
            console.lo(response);
            res.json({ message:"Alteração salva!" })
        }
        
    }

    if ( responses ){

        responses.email = NovoEmail
        const responses = await responses.save().catch   ((err) =>{
            console.log("Error:", err)
            res
            .status(500)
            .json({error: "Não foi possivel salvar a alteração"})
        })

        if (responses) {
            console.lo(responses);
            res.json({ message:"Alteração sala!" })
        }
    }
});

export default perfil;