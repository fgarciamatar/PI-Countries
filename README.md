
![Captura de pantalla 2023-11-06 152319](https://github.com/fgarciamatar/PI-Countries/assets/101357034/7e377d06-1fa1-4cad-a5cd-4d796cefff8d)
![Captura de pantalla 2023-11-06 152332](https://github.com/fgarciamatar/PI-Countries/assets/101357034/6d6ea518-b127-4f7c-951c-1574e3ac29af)


# **COUNTRIES** | Proyecto Individual

Proyecto llevado a cabo como parte del programa de formación en Henry. Se trata de una SPA que está construida utilizando tecnologías como React y Redux en el Frontend para la gestión eficiente de estados, y módulos CSS para la gestión de estilos. La SPA contiene 300 tarjetas de países obtenidas a través de una API y guardadas en una BDD y se comunica con un Back End desarrollado en Node.js utilizando Express para gestionar las peticiones del cliente. La aplicación utiliza Sequelize para interactuar con una base de datos PostgreSQL. El usuario puede buscar un pais por nombre, filtrarlo y ordenarlo y crear una Actividad Turística. 



## **📁 INSTRUCCIONES**
Aquí tienes el texto con los incisos y el código con formato de código:

## Como Correr el Proyecto:

1. Clona este repositorio en tu máquina local:
   
   ```shell
   git clone https://github.com/fgarciamatar/PI-Countries.git
   ```

2. Navega a las carpetas client y server del proyecto:
   
   ```shell
   cd client
   cd server
   ```

3. Instala las dependencias necesarias:
   
   ```shell
   npm install
   ```

4. Ejecuta el servidor de desarrollo:

   - Para el cliente (frontend):

   ```shell
   cd client
   npm run dev
   ```

   - Para el servidor (backend):

   ```shell
   cd server
   npm start
   ```

El sitio web estará disponible en: http://localhost:5173/ en tu navegador web.

5. En la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
   DB_USER=usuariodepostgres
   DB_PASSWORD=passwordDePostgres
   DB_HOST=localhost
   ```

6. Reemplaza **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va a ser ignorado en la subida a GitHub, ya que contiene información sensible (las credenciales).

7. Adicionalmente, será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`countries`**. Si no realizas este paso de manera manual, no podrás avanzar con el proyecto.

<br />

---



## **📋 SOBRE LA API**

En este proyecto la API de Countries **correrá localmente desde tu computadora**. De esta manera, siempre tendrás disponible los datos de forma local para poder realizar tu proyecto.

Para lograr que esta API funcione desde tu computadora deberás dirigirte, desde tu terminal, a la carpeta **`server`** y ejecutar el comando:

```bash
   npm start
```

Podrás ver el siguiente mensaje en tu terminal.

``` 
[0] 
[0] > server@1.0.0 server
[0] > nodemon index.js
[0] 
[1] 
[1] > server@1.0.0 api
[1] > echo 'Local API listening on PORT 5000' & json-server --watch api/db.json -p 5000 -q
[1] 
[1] 'Local API listening on PORT 5000' 
[0] [nodemon] 2.0.22
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node index.js`
[0] Server listening on port 3001

```

Esto significa que la API ya está corriendo en tu computadora en el puerto 5000. Es decir que podrás acceder a ella desde la URL **`http://localhost:5000`**. Para poder comunicarte con esta API deberás dejar la terminal levantada.

