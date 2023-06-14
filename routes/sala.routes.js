import express from 'express';
import Setor from '../models/Setor.js';
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

const sala = express.Router();

//rota para lista de usuario
sala.get('/verify', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

//rota para registro de usuario 
sala.post('/register', async (req, res) => {

    const { setor, sala, idEmpresa } = req.body;

    const newSetor = new Setor({ setor, sala, idEmpresa })

    const savedSetor = await newSetor.save().catch((err) =>{
                                console.log("Error: ", err)
                                res
                                .status(500)
                                .json({error: "Não foi possivel cadastrar o usuário"})
                            })

    if (savedSetor) {
        console.log(savedSetor);
        res.json({ message: "Obrigado pelo cadastro!" })
    }

});

export default sala;