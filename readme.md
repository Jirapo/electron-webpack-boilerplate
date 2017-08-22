# electron-webpack-boilerplate
A very simple react electron application workflow。

Inspired by [Poling](https://github.com/Jirapo) 

Optimized by [Tommy Troy Lin](https://github.com/tommytroylin)

## Installation

```bash

npm i -r https://registry.taobao.org
``` 

or 

```bash

npm i
``` 

## Development

1. `npm run dev`

start `webpack` for bundling `main` and `renderer`

2. open another terminal, `npm start`

start electron app

## Bundle & Production

`npm run build`

then use the following commands:

* `npm run pack` bundle without installation package
* `npm run pack:mac` bundle and create macOS (.dmg) package
* `npm run pack:win` bundle and create window (.exe) package


## Modification
### add/remove vendor
modify `vendors` array in file `webpack/vendor.prod.config.babel.js`

