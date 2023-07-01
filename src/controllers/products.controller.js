import {getConnection, sql} from "../database/connection";

export const getProducts = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM products"); //con el pool se hace una peticion de consulta a la base de datos
    res.json(result.recordset);
};

export const createNewProduct = async (req, res) => {
    
    const { name, description} = req.body
    let { quantity } = req.body

    if (name == null || description == null) {
        return res.status(400).json({msg: "Petición Erronea. Por Favor Llene Todos Los Campos"})
    }

    if (quantity == null) quantity = 0;

    const pool = await getConnection();
    
    await pool.request()
    .input("name", sql.VarChar, name)
    .input("description", sql.Text, description)
    .input("quantity", sql.Int, quantity)
    .query("INSERT INTO products (name, description, quantity) VALUES (@name, @description, @quantity)")

    res.json({name, description, quantity});
};