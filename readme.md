这是一个很简单的react electron 脚手架。

## 安装

```bash

npm i -r https://registry.taobao.org
``` 

or 

```bash

npm i
``` 

## 启动

1. `npm run dev:main`

先产生`main.js` 供 electron 使用。

每次修改main端代码，都必须执行改命令。因为 main 端使用了 es6 模块。


2. `npm run dev`

webpack 监听 renderer 文件。

3. 在另外一个终端执行 `npm start`

启动 electron。

## 打包

首先运行 `npm run build`。

然后根据需要运行:

* `npm run pack` 打包不产生安装包
* `npm run pack:mac` 打包产生dmg安装包
* `npm run pack:win` 打包产生exe安装包

windows 下可能运行 `npm run pack` 失败，那么请替换命令

```json
"pack": "cross-env ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ build --dir",
```

替换成

```json
"pack": "build --dir",
```

打包出来的文件在 `release` 文件夹。


## renderer 打包方案

该分支prod打包使用了 commonchunks.



