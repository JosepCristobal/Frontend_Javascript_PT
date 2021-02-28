# Frontend Javascript
## Práctica de Frontend con Javastript.


### Objetivo 

Dessarrollar una aplicación de frontend para una programa de compra-venta de productos de segunda mano, donde habrá compradores que expondrán sus necesidades y vendedores que expondrán sus productos.

### Requisitos mínimos
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

