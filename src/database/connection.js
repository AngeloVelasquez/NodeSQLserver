import sql from "mssql";
import config from "../config";

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        console.log("Se conecto correctamente a la base de datos 🌭")
        return pool;
    } catch (error) {
        console.error(error);
    }
}

export { sql };