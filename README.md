# Bienvenido al test Angular de Adoclic

## Instrucciones de Instalación y Ejecución

Sigue estos pasos para levantar el proyecto localmente:

### 1. Instalar las dependencias

Antes de ejecutar el proyecto, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

### 2. Levantar el servidor de desarrollo
Una vez que se han instalado las dependencias, puedes ejecutar el servidor de desarrollo con el siguiente comando:

```bash
ng serve
```

Esto compilará el proyecto y abrirá una ventana del navegador en http://localhost:4200/. 

### 3. Acceder al proyecto
¡Listo! Ahora deberías poder acceder al proyecto y solucion del challenge en tu navegador mediante la dirección http://localhost:4200/dogjoke.

## Challenge

Para completar este ejercicio de prueba de Angular, sigue los siguientes pasos:

## Instalación de Angular
1. Instala Angular CLI versión 15 en tu entorno de desarrollo.

## Creación del componente "dog-joke"
1. Crea el componente "dog-joke" en tu proyecto Angular.
2. Diseña la maqueta HTML del componente según la imagen proporcionada "dogJoke.jpg".

## Configuración de routing
1. Configura las rutas en tu archivo de enrutamiento para que el componente "dog-joke" se muestre en la URL http://localhost:4200/dogjoke.

## Creación de servicios para consumir las APIs
1. Crea dos servicios en tu proyecto Angular para consumir las siguientes APIs:
   - API de chistes ("Joke"): https://official-joke-api.appspot.com/random_joke
   - API de imágenes de perros ("Img"): https://dog.ceo/api/breeds/image/random
2. Utiliza la información obtenida de estas APIs para completar los datos del componente "dog-joke".

## Actualización automática y manual de la información
1. Implementa una función en el componente "dog-joke" para que se actualice automáticamente cada 20 segundos.
2. Muestra un contador en un botón que indique el tiempo restante para la próxima actualización.
3. Si se presiona el botón, se debe forzar la actualización inmediata de la broma e imagen.

Este ejercicio tiene como objetivo evaluar tus habilidades en Angular, incluyendo la creación de componentes, enrutamiento, consumo de APIs y actualización automática de datos.
