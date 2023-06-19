//PRECISA ACERTAR A ROTA PRA CADASTRAR SETOR

import express from 'express';
import Setor from '../models/Setor.js';
import jwt from 'jsonwebtoken';
import { Sequelize } from 'sequelize';

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

const setor = express.Router();

//rota para lista de usuario
setor.get('/verify', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

//rota para registro de usuario 
setor.post('/register', async (req, res) => {

    const { setor, sala, idEmpresa } = req.body;

    const newSetor = new Setor({ setor, sala, idEmpresa })

    const savedSetor = await newSetor.save().catch((err) =>{
                                console.log("Error: ", err)
                                res
                                .status(500)
                                .json({error: "Não foi possivel cadastrar o setor!"})
                            })

    if (savedSetor) {
        console.log(savedSetor);
        res.json({ message: "Setor Cadastrado!" })
    }

});

setor.get('/find', async (req, res) => {
    const setors = await Setor.findAll({
        attributes: 
              [Sequelize.fn('DISTINCT', Sequelize.col('setor')), 'setor']
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (setors){
        return res.json({setors})
    } else {
        return null
    }
});

setor.get('/findAll', async (req, res) => {
    const setors = await Setor.findAll().catch(
        (err) => {
            console.log(err)
        }
    );

    if (setors){
        return res.json({setors})
    } else {
        return null
    }
});


setor.get('/findClass', async (req, res) => {

    const setor = req.query.setor;

    const setors = await Setor.findAll(
        { where: { setor: setor }}
    ).catch(
        (err) => {
            console.log(err)
        }
    );

    if (setors){
        return res.json({setors})
    } else {
        return null
    }
});

export default setor;

