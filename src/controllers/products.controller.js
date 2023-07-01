import {getConnection, sql, queris} from "../database";

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
    const result = await pool.request().query(queris.getAllProducts); //con el pool se hace una peticion de consulta a la base de datos
    res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const createNewProduct = async (req, res) => {
    
    const { name, description} = req.body
    let { quantity } = req.body

    if (name == null || description == null) {
        return res.status(400).json({msg: "Petición Erronea. Por Favor Llene Todos Los Campos"})
    }

    if (quantity == null) quantity = 0;

    try {
        const pool = await getConnection();
    
        await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .query(queris.addNewProduct);

        res.json({name, description, quantity});
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()
    const result = await pool
    .request()
    .input("id", id)
    .query(queris.getProductById)

    res.send(result.recordset[0]);
}

export const deleteProductById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()
    const result = await pool
    .request()
    .input("id", id)
    .query(queris.deleteProductById)

    res.sendStatus(204);
}

export const getTotalProducts = async (req, res) => {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queris.getTotalProducts)

    res.json(result.recordset[0][""])
}

export const updateProductById = async (req, res) => {
    
    const { name, description, quantity } = req.body;
    const { id } = req.params
    
    if (name == null || description == null || quantity == null) {
        return res.status(400).json({msg: "Petición Erronea. Por Favor Llene Todos Los Campos"})
    }

    const pool = await getConnection()
    await pool.request()
    .input("name", sql.VarChar, name)
    .input("description", sql.Text, description)
    .input("quantity", sql.Int, quantity)
    .input("id", sql.Int, id)
    .query(queris.updateProductById)

    res.json({name, description, quantity})
}