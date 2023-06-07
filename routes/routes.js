
import express from 'express';
import user from './user.routes.js';
import login from './login.routes.js';
import funcionario from './funcionario.routes.js';

const router = express.Router();

//leva a rota do usuario
router.use('/user', user);

//leva a rota do login
router.use('/login', login);

//leva a rota do funcionario
router.use('/funcionario', funcionario);


export default router;

