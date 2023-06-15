import express from 'express';
import Medicao from '../models/Medicao.js';

const user = express.Router();

user.post('/register', async (req, res) => {

    const { idFuncionario, salaSetor, medicao, comment } = req.body;

    // const alreadyExistUser = await Funcionario.findOne(
    //     { where: { email }}
    // ).catch((err) => console.log("Error: ", err))

    // if (alreadyExistUser) {
    //     console.log("Usuário existente: " + alreadyExistUser)
    //     return res
    //         .status(409)
    //         .json({ message: "E-mail ja utilizado por outro usuário." })
    // }


    const newUser = new Medicao({ idFuncionario, salaSetor, medicao, comment })

    const savedUser = await newUser.save().catch((err) =>{
                                console.log("Error: ", err)
                                res
                                .status(500)
                                .json({error: "Não foi possival salvar a medição"})
                            })

    if (savedUser) {
        console.log(savedUser);
        res.json({ message: "Medição salva!" })
    }

});


export default user;