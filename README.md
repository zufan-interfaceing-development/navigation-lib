# File Structure

mkdir <projectName>
cd <projectName>
    npm init
    npm install react react-dom --save-dev
    mkdir src
    cd src
        mkdir component
        cd component
            touch index.js
## Add Storybook:
npx sb init
## Mod package.json
+   "main": "dist/index.js",
+   "module": "dist/index.es.js",

+   "devDependencies": {
        "react": "^18.1.0",
        "react-dom": "^18.1.0"
    }
+   "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "storybook": "export SET NODE_OPTIONS=--openssl-legacy-provider && start-storybook -p 6006",
        "build-storybook": "export SET NODE_OPTIONS=--openssl-legacy-provider && build-storybook",
        "build-lib": "export SET NODE_OPTIONS=--openssl-legacy-provider && rollup -c"
    },



npm install rollup rollup-plugin-babel @rollup/plugin-node-resolve rollup-plugin-peer-deps-external --save-dev

npm install @babel/preset-react
npm install rollup-plugin-postcss --save-dev

touch rollup.config.js

# To Build
npm run build-lib
It should create a dist folder