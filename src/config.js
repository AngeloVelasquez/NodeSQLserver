import { config } from "dotenv" //con esto nos encargamos de saber si existen variables de entorno
config();

export default {
    port: process.env.PORT || 3000
}
/*
vamos a exportar la configuracion de un puerto y la vamos
a guardar en una variable de entorno
*/