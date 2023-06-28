import express from "express"
import config from "./config"

const app = express()

let port;

//settings *Sirve para configurar el puerto*
app.set("port", config.port)

export default app