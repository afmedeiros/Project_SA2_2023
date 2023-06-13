import express from 'express';
import Relatorio from '../models/Relatorio.js';
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

const relatorio = express.Router();

//rota para lista de usuario
relatorio.get('/verify', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

//rota para registro de usuario 
relatorio.post('/register', async (req, res) => {
    const { name, description, idFuncionario } = req.body;


    const newRelatorio = new Relatorio({ name, description, idFuncionario })

    const savedRelatorio = await newRelatorio.save().catch((err) =>{
                                console.log("Error: ", err)
                                res
                                .status(500)
                                .json({error: "Não foi possivel salvar o relatorio"})
                            })

    if (savedRelatorio) {
        console.log(savedRelatorio);
        res.json({ message: "Relátorio salvo!" })
    }



    
});

relatorio.get('/find', async (req, res) => {
    const relatorios = await Relatorio.findAll().catch(
        (err) => {
            console.log(err)
        }
    );

    if (relatorios){
        return res.json({relatorios})
    } else {
        return null
    }
});

export default relatorio;