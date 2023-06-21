//PRECISA ACERTAR A ROTA PRA CADASTRAR SETOR

import express from 'express';
import Setor from '../models/Setor.js';
import Medicao from '../models/Medicao.js';
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

const med = express.Router();

//rota para lista de usuario
med.get('/verify', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});


//rota para registro de usuario 
med.post('/register', async (req, res) => {

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

med.get('/find', async (req, res) => {
    const setors = await Setor.findAll({
        attributes: 
              [Sequelize.fn('DISTINCT', Sequelize.col('setor')), 'id','setor']
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

med.get('/findAll', async (req, res) => {
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


med.get('/findClass', async (req, res) => {
    console.log(req.query.idSala)
    const idSala = req.query.idSala;

    const medicoes = await Medicao.findAll(
        { where: { idSala: idSala }}, { include: Setor }
    ).catch(
        (err) => {
            console.log(err)
        }
    );

    if (medicoes){
        return res.json({medicoes})
    } else {
        return null
    }
});

export default med;