# Frontend Javascript
## Práctica de Frontend con Javastript.


## Objetivo 

Dessarrollar una aplicación de frontend para una programa de compra-venta de productos de segunda mano, donde habrá compradores que expondrán sus necesidades y vendedores que expondrán sus productos.

## Requisitos mínimos
Deberemos contar con las siguientas páginas y funcionalidades:

#### Página de listado de anuncios
* En la página principal deberemos tener un listado de anuncios. Cada anuncio deberá tener como mínimo una foto(opcional), nombre, precio y si es compra o venta.
	* Los anuncios se cargarán desde el backend que nos han facilitado para esta práctica.
	* Deberán de gestionarse todos los posibles estados éxito/error.
* Al pulsar sobre un anuncio, se deberá enviar al usuario a una página de detalle de este anuncio..
* Si el usuario está autenticado, deberemos permitir al usuario la creación de nuevos anuncios a través de una página nueva creada para este fin.

#### Página de detalle de un anuncio
* En el detalle de un anuncio se deberá mostrar una foto (si la tiene), nombre, precio y si es compra o venta.
* En este detalle se deberá gestionar todos los estados posibles éxito, carga y error.
* Si el usuario está autenticado y el anuncio le pertenece, deberá mostrar un botón que permita eliminar el anuncio, previa confirmación del usuario.

#### Página para crear un anuncio
* En la página para crear un anuncio se deberá mostrar al usuario un formulario con los siguientes campos:
* El anuncio se enviará al backend para ser guardado.
* Se deberá gestionar todos los estados posibles, éxito, carga y error.

#### Página de login
* La página de login deberá mostrar un formulario solicitando el nombre y la contraseña.
* En la validación, el usuario obtendrá un token y se guardará para ser utilizado en las transacciones que así lo requiera el backend.
* Se deberán gestionar todos los estado de éxito-error.

#### Página de registro
* La página de registro deberá mostrar lo mismo que la de login.
* Cuando el usuario envíe el formulario, deberá registrar al usuario en el backend.
* Se deberá gestionar todos los estados posibles, éxito, carga, error.

### Requisitos opcionales
* Gestionar la paginación de anuncios.
* Implementar un buscador de anuncios.
* Permitir editar un anuncio, sólo si el usuario autenticado es el propietario del anuncio.
* Permitir el filtrado de anuncios usando tags.
* Hacer que los tags sean dinámicos.

### Otros
* Se deberá acompañar con el proyecto, una carpeta con imágenes de los anuncios de prueba.
* Se adjuntará un fichero en formato json con el contenido de anuncios y usuarios.

### Restricciones
* Todo el desarrollo deberá realizarse usando Vanilla JavaScript. No se podrán utilizar librerías de terceros.
* Si está permitido el utilizar librerías o frameworks CSS.

### El Backend
El backend a utilizar será sparrest.js el cual nos ofrece un completo API REST para simular un backend real.


## Desarrollo del proyecto
En nuestro código hemos incluido comentarios para poder hacer un seguimiento y clarificar que hace cada una de nuestras funcionalidades.

Hemos intendado dejar un código limpio y claro, estructurandolo de la forma más adecuada y siguiendo los criterios aprendidos en este módulo.

Los componentes a destacar utilizados en nuestro proyecto son:

* Visual Studio Code v1.53.0 como entorno de desarrollo.
* Sparrest.js  como nuestro servidor de aplicaciones.
* Bulma como librería CSS para acelerar el proceso de maquetación.
* db.json fichero en formato json como base de datos.
* Chrome como navegador y debugger para nuestra aplicación.
* Nuestro proyecto ha sido desarrollado en un Macbook con MacOS Catalina v10.15.7

### Puesta en marcha
* Se acompaña al proyecto una carpeta con todas la imágenes que deberán ser copiadas en la carpeta public del proyecto sparrest.js. Las imágenes se encuentran en la carpeta del poryecto en resources/images/anuncios.
* También se acompaña un fichero db.json que se encuentra en la carpeta resources. Este fichero lo deberemos copiar en la carpeta principal de sparrest.js. Contiene toda la información necesaria en formato json para poder arrancar la aplicación con anuncios y usuarios.
* La pruebas de la aplicación se han realizado a través de nuestro entorno de desarrollo de Visua Studio Code, arrancando como servidor de páginas web BrowserSync desde el propio VS. y accediendo a la aplicación a través de un navegador, en nuestro caso Chrome.(http://localhost:3000).

### Funcionalidades desarrolladas

Al entrar en nuestra aplicación lo primero que nos encontramos es una página con anuncios y la posibilidad de registrarse o loguearse.

Página principal con anuncios Login o Registro:
<p align="center">
<img src="https://github.com/JosepCristobal/Nodepop_WebX_PT/blob/master/nodepop/public/images/ResultSearchTot.png?raw=true" alt="Resultado API sin filtro" width="500"/>
</p>


Página de Login para entrar a gestionar nuevos anuncios o borrarlos
<p align="center">
<img src="https://github.com/JosepCristobal/Nodepop_WebX_PT/blob/master/nodepop/public/images/ResultSearchTot.png?raw=true" alt="Resultado API sin filtro" width="500"/>
</p>

Una vez autenticados, los botones de la página principal se sustituyen por los de "Nuevo anuncio" y "Exit".
El primero nos llevará a una pantalla para gestionar nuevos anuncios y el botón Exit, borrará el token guardado en nuestro local y nos situará a la pantalla inicial pendientes de loguearse.

Botones una vez autenticado:
<p align="center">
<img src="https://github.com/JosepCristobal/Nodepop_WebX_PT/blob/master/nodepop/public/images/ResultSearchTot.png?raw=true" alt="Resultado API sin filtro" width="500"/>
</p>


Estando el la página inicial, si hacemos un "Doble Click" encima de la fotografía de un anuncio, la aplicación nos llevará a la página de detalle del anuncio. Si estuvieramos autenticados y el anuncio fuera de nuestra propiedad, nos permitirá borrarlo y si no estamos autenticados, sólo veremos el botón volver para retroceder a la página principal.
En la pantalla de detalle nos aparecerá más información referente a anuncio que en la pantalla principal.

Muestra de pantalla de detalle con posibilidad de borrado.
<p align="center">
<img src="https://github.com/JosepCristobal/Nodepop_WebX_PT/blob/master/nodepop/public/images/ResultSearchTot.png?raw=true" alt="Resultado API sin filtro" width="500"/>
</p>

Desde la pantalla principal y estando autenticados, tendermos la posibilidad de crear nuevos anuncios, para ello pulsaremos en el boton "Nuevo anuncio".

En la pantalla de alta de nuevos anuncios tendremos las siguientes características:

* Campos Nombre, Clasificación y descripción son obligatorios. El botón publicar no se activará hasta que los tres tengan los datos correctos.
* Hemos incluido en el tipo de transacción un selector para recoger un solo valor.
* Para la Clasificación de producto hemos incluido un multi selector donde podremos recoger varios valores para la clasificación de nuestro producto.
* Se incluye un botón de volver para poder navegar a la pantalla principal sin crear un nuevo anuncio.
* Tambien diponemos del boton Publicar, que nos permitirá guardar un nuevo anuncio.
* Y el botón que nos permitirá la captura de ficheros de fotografías para incluir en nuestro anuncio.


Pantalla de alta de nuevos anuncios
<p align="center">
<img src="https://github.com/JosepCristobal/Nodepop_WebX_PT/blob/master/nodepop/public/images/ResultSearchTot.png?raw=true" alt="Resultado API sin filtro" width="500"/>
</p>



