# Cypress-with-Cucumber-and-POM
Project Template of Cypress with Cucumber and POM

- El directorio "POM-alternative" se supone que es el directorio "cypress" si tomamos ese modelo de POM
- Borrar el mencionado directorio en caso de que se determine que ese modelo POM no aporta nada.

Re-ver:
- Scripts en package.json:
    "cypress:pom": "cypress open --spec cypress/e2e/POM-alternative/e2e/PageObjectModel/FreeRangePOM.cy.js"
    Y en general: Todos los scripts desde "cypress:execution" inclusive hacia abajo, los de arriba si funcionan.
    <<IMP>>: Ver como ejecutar solo una feature o solo un spec (supuestamente el spec se ejecuta con --spec <ruta del spec>)

- Reportes:
    Se agrego "mochawesome". Se agrega: reporter:'mochawesome' dentro del archivo "cypress.config.js"
    Se ejecuta mediante: npm run cypress:run
    Por defecto graba screenshots y videos en sus respectivos directorios (fueron agregados al .gitignore).
    Ver como agregar opciones para enriquecerlo.
