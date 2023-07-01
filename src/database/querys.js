
export const queris = {
    getAllProducts: "SELECT * FROM products",
    addNewProduct: "INSERT INTO products (name, description, quantity) VALUES (@name, @description, @quantity)",
    getProductById: "SELECT * FROM products WHERE id = @id",
    deleteProductById: "DELETE FROM [webstore].[dbo].[products] WHERE id = @id",
    getTotalProducts: "SELECT COUNT (*) FROM products",
    updateProductById: "UPDATE products SET Name = @name, Description = @description, Quantity = @quantity WHERE id = @id"
}