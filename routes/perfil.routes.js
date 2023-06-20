import express from 'express';
import Empresa from '../models/Empresa.js'
import Funcionario from '../models/Funcionario.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const verifyToken = (token, res) => {
    jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, authData) => {
            if (err) {

                res.sendStatus(403)

            } else {

                res.json({ authData })

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
perfil.post('/senhaUpdate', async (req, res) => {

    const { admin, email, password, newPassword, confirmacao } = req.body;

    if (newPassword === confirmacao) {
        if (!admin) {
            const senhaEmpresa = await Empresa.findOne({
                where: { email }
            }).then(async (resp) => {
                if (bcrypt.compareSync(password, resp.password)) {

                resp.password = newPassword
                const novaSenha = await resp.save().catch((err) => {
                    console.log("Error:", err)
                    res
                        .status(500)
                        .json({ error: "Não foi possivel salvar a alteração" })
                })

                if (novaSenha) {
                    console.log(novaSenha);
                    res.json({ message: "Alteração salva!" })
                }

            } else {
                res.json({ message: "Nova senha ou confirmação estão incorretas!" })
            }
            })
            
        } else if (admin) {
            const senhaFuncionario = await Funcionario.findOne({
                where: { email }
            }).then(async (resp) => {
                if (bcrypt.compareSync(password, resp.password)) {

                resp.password = newPassword
                const novaSenha = await resp.save().catch((err) => {
                    console.log("Error:", err)
                    res
                        .status(500)
                        .json({ error: "Não foi possivel salvar a alteração" })
                })

                if (novaSenha) {
                    console.log(novaSenha);
                    res.json({ message: "Alteração salva!" })
                }

            } else {
                res.json({ message: "Nova senha ou confirmação estão incorretas!" })
            }
            })
            
        } 
    } else {
            res.json({ message: "Nova senha ou confirmação estão incorretas!" })
        }
});

// perfil.post('/emailUpdate', async (req, res) => {

//     const { admin, email, novoEmail } = req.body;

//     if (!admin) {
//         const emailEmpresa = await Empresa.findOne({
//             where: { email }
//         }).then(async (resp) => {
//             if (email, resp.email) {
//             resp.email = novoEmail
//             const newEmail = await resp.save().catch((err) => {
//                 console.log("Error:", err)
//                 res
//                     .status(500)
//                     .json({ error: "Não foi possivel salvar a alteração" })
//             })
//             if (newEmail) {
//                 console.log(newEmail);
//                 res.json({ message: "Alteração salva!" })
//             }
//         }
//         })
        
//     } else if (admin) {
//         const emailFuncionario = await Funcionario.findOne({
//             where: { email }
//         }).then(async (resp) => {
//             if (email, resp.email) {
//             resp.email = novoEmail
//             const newEmail = await resp.save().catch((err) => {
//                 console.log("Error:", err)
//                 res
//                     .status(500)
//                     .json({ error: "Não foi possivel salvar a alteração" })
//             })
//             if (newEmail) {
//                 console.log(newEmail);
//                 res.json({ message: "Alteração salva!" })
//             }
//         }
//         })
        
//     } 
// });

export default perfil;