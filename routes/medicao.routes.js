import express from 'express';
import Medicao from '../models/Medicao.js';

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

const medicao = express.Router();

medicao.get('/verify', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

medicao.post('/register', async (req, res) => {

    const { idFuncionario, sala, medicao, comment } = req.body;

    // const alreadyExistUser = await Funcionario.findOne(
    //     { where: { email }}
    // ).catch((err) => console.log("Error: ", err))

    // if (alreadyExistUser) {
    //     console.log("Usuário existente: " + alreadyExistUser)
    //     return res
    //         .status(409)
    //         .json({ message: "E-mail ja utilizado por outro usuário." })
    // }


    const newMedicao = new Medicao({ idFuncionario, sala, medicao, comment })


    const savedMedicao = await newMedicao.save().catch((err) =>{
                                console.log("Error: ", err)
                                res
                                .status(500)
                                .json({error: "Não foi possival salvar a medição"})
                            })

    if (savedMedicao) {
        console.log(savedMedicao);
        res.json({ message: "Medição salva!" })
    }

});

medicao.get('/find', async (req, res) => {
    const medicoes = await Medicao.findAll().catch(
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

export default medicao; 