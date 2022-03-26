## Node with Typescrpt
#### To Create the Node application with TypeScript follow this steps
> Here we are Setting up the followings in Node Application
1. Node
2. Express
3. EJS
4. 
2. Nodemon
4. Build Solution

#### Initializing project
> npm init -y
> npm init @eslint/config
#### Dependencies
> npm i <package>
1. express
2. ejs 
3. express-ejs-layouts
4. dotenv
5. mysql2
6. sequelize
```javascript
npm i --save express ejs express-ejs-layouts dotenv mysql2 sequelize
```

#### DevDependencies
> npm i <package> --save-dev
1. typescript
2. eslint
3. tslint
4. nodemon
5. ts-node 
6. shelljs 
7. fs-extra 
8. rimraf
9. npm-run-all
###### Full Command
```javascript
npm i --save-dev typescript eslint tslint nodemon ts-node shelljs fs-extra rimraf npm-run-all
```
##### Equivalent Types DevDependencies
1. @types/node 
2. @types/express
3. @types/ejs 
4. @types/express-ejs-layouts
5. @types/dotenv
6. @types/shelljs 
7. @types/fs-extra
8. @types/mysql
9. @types/sequelize
###### Full Command
```javascript
npm i --save-dev @types/node @types/express @types/ejs @types/express-ejs-layouts @types/dotenv @types/shelljs @types/fs-extra @types/mysql @types/sequelize
```


#### Configuration
0. .gitignore
1. tsconfig.json
2. index.ts
3. .env
4. package.json
5. tslint.json
6. .eslintrc.json

##### NOTES
> Must Configuration
> package.json
```json
 "main": "dist/index.js",
  "scripts": {
    "clean": "rimraf dist/",
    "copy-assets": "ts-node tools/copyAssests",
    "lint": "tslint -c tslint.json -p tsconfig.json --fix",
    "tsc": "tsc",
    "build": "npm-run-all clean lint tsc copy-assets",
    "dev:start": "npm-run-all build start",
    "dev": "nodemon --watch src -e ts,ejs --exec npm run dev:start",
    "start": "node .",
    "test": "echo \"Error: no test specified\" && exit 1"

  },
  "include": [
    "src/**/*"
  ],
  "compilerOptions": {
    "sourceMap": true,
    "target": "esnext",
    "outDir": "./dist",
    "baseUrl": "."
  },
```

