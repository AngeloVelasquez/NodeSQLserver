import app from "./app"

app.listen(app.get("port")) //aqui uso la variable port que ya definimos en index

console.log("Server on port", app.get("port"))