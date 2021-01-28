# Web MQTT Client

**Autor**: Agustin Bassi - 2021

## Tabla de contenido

* [Información importante](#Información-importante)
* [Introducción](#introducción)
* [Instalar dependencias](#instalar-dependencias)
* [Descargar el código](#descargar-el-código)
* [Ejecutar la aplicación](#ejecutar-la-aplicación)
* [Colaborar](#colaborar)
* [Licencia](#licencia)

## Información importante

> Para leer artículos relacionados con tecnologías IoT visitar nuestro sitio web [helloiot.net](https://helloiot.net).

> Para ver toda la documentación de los proyectos de manera abarcativa y organizada visitar nuestra [wiki de Hello IoT](https://github.com/hello-iot/documentation/wiki).

> En caso de encontrar algún problema, comentarlo en nuestro [foro de Hello IoT](https://groups.google.com/g/helloiot) para encontrar una solución entre los miembros de la comunidad.

> Muchos de los proyectos implementados en Hello IoT utilizan Visual Studio Code como IDE de desarrollo debido a su potencia y capacidad de instalar extensiones útiles de desarrollo, por lo que se recomienda descargarlo desde [este link](https://code.visualstudio.com/download). 

> Para poder probar el código es necesario contar con un broker MQTT. Consultar nuestra [sección de proyectos](https://www.helloiot.net/pages/projects/) para encontrar información al respecto.

## Introducción

Este proyecto es una Single Page Application (SPA) que se comunica con un broker MQTT através de WebSockets y actúa como una terminal, donde se pueden enviar topics, suscribirse y visualizar los mensajes. 

Funciona en cualquier navegador actual y está implementado utilizando código JavaScript, HTML y CSS. Para la parte de estilos se utiliza [Material Design](). La conexión MQTT se implementa utilizando la biblioteca [Paho MQTT de Eclipse Fundation]().

## Instalar dependencias

Para este proyecto únicamente es necesario un navegador actual, aunque se recomienda que el contenido sea accedido a través de un servidor web. 

Se puede implementar cualquier servidor de preferencia. Si se utiliza Visual Studio Code la extensión [Live Server](https://github.com/ritwickdey/vscode-live-server.git) es un servidor web integrado extremadamente fácil de utilizar.

## Descargar el código

Desde la esquina superior derecha realizar un `fork` de este proyecto a la cuenta personal. Una vez realizado el fork descargar el código con el siguiente comando (poner el usuario de github en la URL):

```
git clone https://github.com/USER/web-mqtt-client.git
```

> En caso de no poseer una cuenta de Github se puede realizar un `clone` directo de este repositorio.

Abrir la carpeta del proyecto desde VS Code luego de la descarga.

## Ejecutar la aplicación

Como primer paso será necesario abrir la aplicación accediendo al servidor web local. Si se instaló Live Server en VSCode hacer click derecho sobre el archivo index.html y seleccionar la opción `Open with Live Server` dentro del menú contextual. Esto abrirá automáticamente la aplicación en el navegador.

> De manera opcional se puede acceder a la aplicación mediante `file://PATH_TO_PROJECT/index.html`.

Para testear que la comunicación con el broker funcione correctamente, dentro de la aplicación realizar las siguientes configuraciones:

1. Configurar la IP y el puerto del host MQTT  y un nombre de cliente en los campos `MQTT host`, `MQTT port` y `MQTT Client` y presionar el botón `CONNECT`.
2. Configurar un `Topic to subscribe` y presionar el boton `SUBSCRIBE` para recibir mensajes desde el broker (por defecto todos los topics '#').
3. Configurar un topic y un payload en los campos `Topic to publish` y `Payload to publish` y presionar el botón `PUBLISH` para enviar el topic al broker. 

Como el cliente ya se encuentra suscripto a todos los topics, en la sección `Logs` aparecerá el topic publicado a modo de `echo`.

En la siguiente figura hay una demostración de las configuraciones necesarias.

![web-mqtt-client-running](doc/mqtt-web-client-running.png)

## Colaborar

Las mejoras son bienvenidas. Para ello es necesario hacer un fork de este proyecto, aplicar las mejoras y enviarlas mediante un pull request. Luego de la revisión, podrán ser incluídas.

Si te gustó el proyecto no dudes en apoyarlo con una `Star`, y si estás interesado en recibir novedades podés aplicar un `Watch`. Estas acciones ayudan a fomentar la participación y creación de nuevos proyectos dentro de [Hello IoT](https://github.com/hello-iot/).

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

![footer](doc/helloiot-footer.png)