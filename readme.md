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

1. `npm run dev:dll`

先产生 dll js 文件，可以使 webpack 构建速度提升。


2. `npm run dev`

webpack 监听 renderer 文件 和 main 文件。

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

renderer 端打包方案尝试过很多种，master 分支上是个人比较满意的方案。

使用 dll 进行 dev 环境的构建，这样可以快速提高开发速度。 因为 electron 的环境的关系，对 prod 环境其实要求不苛刻，不需要长缓存，只需要体积尽可能小。所以没有很多多余的操作，css 需要提出去。



