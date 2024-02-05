# guia para crearlo desde 0

##  backend: 

    npm init -y  (el -y es para que se configure automaticamente)

## instalar dependencias que necesites, pueden ser mas o menos.

    npm install bcrypt cookie-parser cors express express-validator mongoose morgan jsonwebtoken helmet mongodb zod

    npm install nodemon cross-env dotenv --save-dev

## estructura del backend

backend/

src/: Carpeta principal para el código fuente de la aplicación.

config/: Carpeta para archivos de configuración, como variables de entorno, configuración de base de datos, etc.

controllers/: Carpeta para controladores que manejan la lógica de negocio de tu aplicación, como la autenticación, la creación de publicaciones y comentarios.

database/: Carpeta para archivos relacionados con la conexión y configuración de la base de datos.

libs/: Carpeta para módulos y utilidades personalizadas que puedas necesitar en tu aplicación.

middlewares/: Carpeta para middleware personalizado que se puede utilizar en las rutas de tu aplicación, por ejemplo, para la autenticación de usuarios.

models/: Carpeta para definir los modelos de datos de tu aplicación, como los modelos de usuario, publicación y comentario.

routes/: Carpeta para definir las rutas de tu aplicación, que dirigen las solicitudes HTTP a los controladores correspondientes.

schemas/: Carpeta para definir los esquemas de datos utilizando una biblioteca como Mongoose, que define la estructura y validación de los datos almacenados en la base de datos.

app.js: Archivo principal que configura y arranca tu aplicación Express.

index.js: Archivo de entrada principal que importa y ejecuta la aplicación Express desde app.js.

dentro de backend/ estará node_modules, src, .env, .gitignore, package-lock.json y package.json.

## manual de cada dependencia, que son y para que sirven?:

Las dependencias son paquetes de código externo que tu aplicación necesita para funcionar correctamente. Son necesarias porque te permiten reutilizar código, ahorrar tiempo de desarrollo, construir aplicaciones más escalables y mantener tu aplicación actualizada y segura con el trabajo realizado por otros desarrolladores.


codigo para instalar algunas dependencias y otras en modo desarrollador devDependencies:
   npm install bcrypt cookie-parser cors express express-validator mongoose morgan jsonwebtoken helmet mongodb zod

   npm install nodemon cross-env dotenv --save-dev

bcrypt: Librería para encriptar contraseñas de manera segura en aplicaciones Node.js.

cookie-parser: Middleware de Express para analizar cookies en las solicitudes HTTP.

cors: Middleware de Express para habilitar el intercambio de recursos entre diferentes orígenes en aplicaciones web.

express: Framework web de Node.js que simplifica la creación de aplicaciones y APIs.

express-validator: Middleware de validación de solicitudes para Express.

mongoose: ODM (Object-Document Mapping) para MongoDB en Node.js, que facilita la interacción con la base de datos MongoDB.

morgan: Middleware de logging para Express, que registra las solicitudes HTTP en la consola del servidor.

jsonwebtoken: Librería para generar y verificar tokens JWT (JSON Web Tokens) en aplicaciones Node.js.

helmet: Middleware de seguridad para Express, que ayuda a proteger aplicaciones web configurando cabeceras HTTP de manera segura.

mongodb: Driver oficial de MongoDB para Node.js, que permite interactuar con una base de datos MongoDB desde una aplicación Node.js.

zod: Biblioteca de validación de esquemas para JavaScript y TypeScript.

DevDependencies:

nodemon: Utilidad que reinicia automáticamente la aplicación Node.js cuando se detectan cambios en el código fuente, útil durante el desarrollo.

cross-env: Herramienta que permite establecer variables de entorno de manera independiente del sistema operativo.

dotenv: Módulo que facilita la carga de variables de entorno desde un archivo .env en aplicaciones Node.js, útil para configurar variables de entorno en entornos de desarrollo.

quedaria algo así en el package.json:
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "helmet": "^7.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.3.0",
    "mongoose": "^8.0.2",
    "morgan": "^1.10.0",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "cross-env": "^7.0.3",
    "dotenv": "^16.3.1",
    "nodemon": "^3.0.1"
  }

---------
## resumen de los pasos a seguir para terminar el proyecto:

Después de haber configurado la estructura básica de tu aplicación y haber instalado todas las dependencias necesarias, aquí hay algunos pasos que podrías considerar para continuar:

Configuración de la base de datos: Si aún no lo has hecho, configura la conexión a tu base de datos. Puedes utilizar MongoDB junto con Mongoose para definir modelos de datos y gestionar la interacción con la base de datos.

Desarrollo de modelos: Define los modelos de datos necesarios para tu aplicación, como modelos de usuario, publicación y comentario. Esto implica definir la estructura de tus datos y las relaciones entre ellos.

Desarrollo de controladores y rutas: Implementa la lógica de negocio de tu aplicación en los controladores y define las rutas correspondientes en Express para manejar las solicitudes HTTP. Por ejemplo, podrías tener controladores para el registro de usuarios, inicio de sesión, creación de publicaciones, comentarios, etc.

Implementación de autenticación: Desarrolla la funcionalidad de autenticación para permitir que los usuarios inicien sesión en tu aplicación. Puedes utilizar JSON Web Tokens (JWT) para autenticar a los usuarios y proteger las rutas que requieran autenticación.

Desarrollo de vistas (opcional): Si estás desarrollando una aplicación web con un frontend, podrías comenzar a desarrollar las vistas de tu aplicación utilizando un motor de plantillas como EJS, o incluso considerar el uso de un framework frontend como React o Vue.js.

Pruebas unitarias y de integración: Una vez que hayas implementado funcionalidades clave, considera escribir pruebas unitarias y de integración para garantizar que tu código funcione como se espera y para detectar posibles errores o fallos de regresión.

Optimización y seguridad: A medida que avances en el desarrollo, asegúrate de optimizar tu aplicación para el rendimiento y aplicar prácticas de seguridad, como protección contra ataques CSRF, SQL injection, etc.

Documentación: Documenta tu código y las API de tu aplicación para facilitar su mantenimiento y para que otros desarrolladores puedan entender y utilizar tu aplicación.

fin del resumen.
-------------

creación conexión a la base de datos de mongodb con express.

- app.js
- index.js
- db.js
- config.js
- .env

## app:
```js
import express from "express";

const app = express();
app.use(express.json());

export default app;
```
Con explicación linea por linea
```js
// Importa el módulo 'express' para crear una aplicación Express
import express from "express";

// Crea una nueva instancia de la aplicación Express
const app = express();

// Configura la aplicación Express para que pueda analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Exporta la aplicación Express para que pueda ser utilizada en otros archivos
export default app;
```

## index:
```js
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
```
Con explicación linea por linea
```js
// Importa la aplicación Express creada en app.js
import app from "./app.js";

// Importa la función connectDB y la configuración del puerto desde otros archivos
import { connectDB } from '../src/database/db.js'
import { settingDotEnvPort } from "./config/config.js";

// Llama a la función connectDB para conectar a la base de datos
connectDB();

// Obtiene el puerto de la configuración
const { port } = settingDotEnvPort();

// Inicia el servidor Express y muestra un mensaje en la consola cuando esté escuchando en el puerto especificado
app.listen(port, () => {
  console.log('Server on port', port);
});
```

## db:
```js
import mongoose from "mongoose";
import {settingDotEnvDb} from "../config/config.js";

const { db } = settingDotEnvDb();
export const connectDB = async () => {
  try {
    await mongoose.connect(db.localhost);
    console.log(">>> DB is connected")
  } catch (error) {
    console.log(error);
  }
};
```
Con explicación linea por linea
```js
// Importa la biblioteca 'mongoose' para interactuar con la base de datos MongoDB
import mongoose from "mongoose";

// Importa la función de configuración de la base de datos desde otro archivo
import { settingDotEnvDb } from "../config/config.js";

// Define la función para conectar a la base de datos
export const connectDB = async () => {
  try {
    // Obtiene la URL de la base de datos desde la configuración
    const { db } = settingDotEnvDb();
    
    // Conecta a la base de datos utilizando la URL proporcionada
    await mongoose.connect(db.localhost);
    
    // Muestra un mensaje en la consola indicando que la base de datos está conectada
    console.log(">>> DB is connected")
  } catch (error) {
    // Captura cualquier error y lo muestra en la consola
    console.log(error);
  }
};
```

## config:
```js
import dotenv from "dotenv"; 

dotenv.config();

//puerto 
export const settingDotEnvPort = () => {
  return { port: process.env.PORT };
};
//base de datos 
export const settingDotEnvDb = () => {
  return {
    db: {
      host: process.env.DB_HOST, localhost: process.env.DB_LOCALHOST,
    },
  };
};
```
Con explicación linea por linea
```js
// Importa la biblioteca 'dotenv' para cargar variables de entorno desde un archivo .env
import dotenv from "dotenv"; 

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Define una función para obtener la configuración del puerto desde las variables de entorno
export const settingDotEnvPort = () => {
  return { port: process.env.PORT };
};

// Define una función para obtener la configuración de la base de datos desde las variables de entorno
export const settingDotEnvDb = () => {
  return {
    db: {
      host: process.env.DB_HOST, localhost: process.env.DB_LOCALHOST,
    },
  };
};
```

## .env estructura basica:
```js
PORT=numero del puerto ejemplo 8080 9090 3000 4000 6000

FRONTEND_URL=http://localhost:5173

DB_LOCALHOST="mongodb://127.0.0.1:27017/nombredeladb"

SECRET=secretpassword      

TOKEN_SECRET=secretpassword2 


PORT: Este es el puerto en el que se ejecutará tu servidor Express. El valor 4000 es comúnmente utilizado para aplicaciones web locales, pero puedes cambiarlo si es necesario.

FRONTEND_URL: Esta variable puede ser útil si tu aplicación backend necesita comunicarse con un frontend. Aquí has configurado una URL de frontend local en el puerto 5173. Asegúrate de que esta URL coincida con la ubicación de tu frontend si es relevante para tu proyecto.

DB_LOCALHOST: Esta variable define la URL de conexión a tu base de datos MongoDB local. La URL mongodb://127.0.0.1:27017/
crudredsocial indica que la base de datos se encuentra en localhost en el puerto 27017 y se llama "crudredsocial". Asegúrate de que esta URL coincida con la configuración de tu base de datos local.

SECRET y TOKEN_SECRET: Estas son cadenas de texto utilizadas para firmar y verificar tokens JWT en tu aplicación. Asegúrate de que estas cadenas sean lo suficientemente seguras y únicas para proteger tus tokens.
```
