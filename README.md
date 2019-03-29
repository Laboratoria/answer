## Productos

* `answer`: Módulo `answer` que exporte una función que retorna `42`.
* `answer-api`: Servidor Node.js con endpoint que use módulo `answer`.
* `answer-ui`: Interfaz web que use módulo `answer`.
* `answer-cli`: Herramienta de terminal (CLI tool) que use `answer`.

## Set up

### Dev `1`:

1. Inicializar proyecto:
   ```sh
   git init
   npm init
   ```
2. Crear `README.md`, `.gitignore` y `.editorconfig`:
   ```sh
   echo "# answer" > README.md
   echo 'node_modules/
   coverage/' > .gitignore
   echo 'root = true

   [*]
   indent_style = space
   indent_size = 2
   charset = utf-8
   trim_trailing_whitespace = true
   insert_final_newline = true' > .editorconfig
   ```
3. Instalar dependencias:
   ```sh
   npm i --save-dev eslint eslint-config-airbnb-base eslint-plugin-import jest
   ```
4. Crear archivo `.eslintrc` con configuración de ESLint:
   ```sh
   echo '{
     "extends": "airbnb-base"
   }' > .eslintrc
   ```
5. Agregar `npm-scripts` en `package.json`:
   ```json
   {
     "scripts": {
       "pretest": "eslint .",
       "test": "jest --verbose --coverage"
     }
   }
   ```
6. Crear repo _upstream_ en GitHub (`Laboratoria/answer`).
7. Configurar remoto _upstream_:
   ```sh
   git remote add upstream git@github.com:Laboratoria/answer.git
   ```
8. Primer commit y push
   ```sh
   git add .
   git commit -m "initial commit"
   git push -u upstream master
   ```
9. Habilitar build en Travis
10. Agregar archivo `.travis.yml` con configuración de Travis:
    ```sh
    echo '' > .travis.yml
    ```
10. Forkear.
11. Configurar remotos de `git`:
    ```sh
    git remote add origin git@github.com:lupomontero/answer.git
    git push -u origin master
    ```
12. Crear rama `develop`:
    ```sh
    git checkout -b develop
    git push -u origin develop
    git push -u upstream develop
    ```

### Dev `n`:

1. Forkear repo.
2. Clonar repo.
   ```sh
   git clone git@github.com:someone/answer.git
   ```
3. Configurar remotos de `git`
   ```sh
   git remote add upstream git@github.com:Laboratoria/answer.git
   ```
4. Instalar dependencias:
   ```sh
   npm i
   ```

***

## New features

1. Hacer propuesta de feature (issue)
2. Actualizar rama de `develop` en fork:
   ```sh
   git checkout develop
   git pull upstream develop
   ```
2. Crear rama
   ```sh
   git checkout -b feat/foo develop
   ```
3. Escribir pruebas unitarias
4. Implementar features
5. Empujar rama a fork
   ```sh
   git push origin feat/foo
   ```
5. Enviar PR y solicitar code review

***

## Release

* Version in `package.json`
* Git tag
* GitHub release
