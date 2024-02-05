import app from "./app.js";
import { connectDB } from '../src/database/db.js'
import { settingDotEnvPort } from "./config/config.js";

// Llama a la función connectDB para conectar a la base de datos
connectDB();

const { port } = settingDotEnvPort();

// Inicia el servidor y muestra un mensaje en la consola
app.listen(port, () => {
  console.log('Server on port', port);
});


/* import app from "./app.js";
import {settingDotEnvPort} from "./config/config.js";

const { port } = settingDotEnvPort();
app.listen(port, console.log('Server on port', port))

import app from "./app.js";
import {connectDB} from '../src/database/db.js'
import {settingDotEnvPort} from "./config/config.js";
connectDB();
const { port } = settingDotEnvPort();
app.listen(port, console.log('Server on port', port))
 */