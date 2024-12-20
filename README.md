Actividad: Implementando Hooks en un E-Commerce 
Objetivo: Definir pruebas de Cypress que utilicen diferentes tipos de hooks para interactuar con el sitio.

Importante: No es necesario desarrollar la lógica del caso de prueba dentro del bloque it. Solo debemos definir la estructura de los casos de prueba, los distintos tipos de hooks y las acciones que podrían ejecutarse en cada uno de ellos, sin implementar la lógica específica.

Recomendaciones:

Crea una carpeta donde alojarás tu proyecto llamado cypress-ecommerce.

Desde la carpeta, abre una terminal o consola para poder crear un nuevo proyecto Cypress.

Ejecuta los comandos necesarios:

npm init -y 

npm install cypress@9.7.0 --save-dev --save-exact --force  

npx cypress open 

Abre el proyecto desde tu editor de código.

Configura tu archivo cypress.json: Edita el mismo para incorporar la url Base correspondiente.  

Define al menos 10 casos de prueba divididos en al menos 2 especificaciones diferentes, cada uno con sus respectivos hooks debidamente organizados
