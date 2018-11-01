My simple template for React with webpack apps.

Steps:

### 1. Init yarn

`yarn init`

### 2. Install dependencies 

`yarn add react@16.0.0 react-dom@16.0.1`

`yarn add webpack webpack-cli webpack-dev-server --dev`

`yarn add babel-core babel-loader@7.1.4 babel-plugin-transform-class-properties --dev`

`yarn add babel-preset-env babel-preset-react --dev`

`yarn add style-loader css-loader sass-loader node-sass --dev`

`yarn add normalize.css`

### 3. Add a couple scripts to package.json

```json
"scripts": {
    "build": "webpack",
    "dev-server": "webpack-dev-server"
}
```

### 4. Create webpack config file

`touch webpack.config.js`

Add source and output dirs, rules for Babel and SCSS.

### 5. Create Babel config file

`touch .babelrc`

Add React presets and plug in transform-class-properties

### 6. Create basic folder structure and index.html

Pretty self-explanatory

### 7. Run

`yarn run build`

Should work without errors

### 8. To do

Add a few more bells and whistles from the links below, most notably the 
webpack HTML plugin.

https://medium.com/@jeffrey.allen.lewis/the-ultimate-2018-webpack-4-and-babel-setup-guide-npm-yarn-dependencies-compared-entry-points-866b577da6a

https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1



