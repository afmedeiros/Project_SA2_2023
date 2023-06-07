import connection from "./config/db.js";
import Setor from "./models/setor.js";
import Empresa from "./models/Empresa.js";


const migrate = async ()=> {
    try {
        const result = await connection.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

migrate();