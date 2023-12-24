---
title: nodejs 版本管理
---

# nodejs 版本管理

笔者是在 windows 上安装的，记录一下踩到的坑。

## nvm for windows

主要参照这里的步骤 [nvm.uihtm.com](https://nvm.uihtm.com/) 。不过有几点需要注意：

- 安装 nvm for wondows 之前先卸载已经安装的 nodejs 。

- 安装过程中设置的 nvm 安装路径会在 settings.txt 中写入 root 配置，设置的 Node.js Symlink
  会在 settings.txt 中写入 path 配置。

  安装完后更换国内镜像源，不要使用命令行 `nvm node_mirror [url]` 和 `nvm npm_mirror [url]` ，
  这会导致 settings.txt 中已经写入的 path 丢失，然后 Node.js Symlink 就设置到 root 下了，
  而你的环境变量还保持着安装时设置的 Node.js Symlink ，这会导致就算后续安装了 node ，
  运行 `node -v` 时还是无法找到。

  应该直接在 nvm 的根目录下找到 settings.txt 文件，直接去里边添加

  ```
  node_mirror: https://npmmirror.com/mirrors/node/
  npm_mirror: https://npmmirror.com/mirrors/npm/
  ```

  其他会修改到 settings.txt 文件的命令最好也不要用，就直接去 settings.txt 里面改 。

- 用 `nvm use version` 切换 node 版本时，要用管理员权限运行终端，不然会报 `exit status 1` 错误。
  切换成功后会生成一个上边设置过的 Node.js Symlink（具体设置的路径，即 settings.txt 中的 path）文件夹，
  这个文件夹是带快捷方式图标的。

## pnpm

如果已经安装了 nodejs ，也需要先卸载掉。然后独立安装 pnpm ，再用 pnpm 安装 nodejs 并管理 nodejs 的版本。
笔者也试过在有 nodejs 的情况下，用 npm 安装 pnpm ，再用 `pnpm env use -g version` 安装 nodejs ，
不幸的是失败了，安装不上，会报如下的错误：

```sh
 ERR_INVALID_ARG_TYPE  The "path" argument must be of type string. Received undefined
```

- windows 上使用 PowerShell 安装 pnpm（同样也是使用独立脚本安装时升级 pnpm 的命令）

  ```sh
  iwr https://get.pnpm.io/install.ps1 -useb | iex
  ```

- 安装并使用 nodejs（需要管理员权限运行终端）

  安装并使用最新版本的 nodejs（--global, -g）

  ```sh
  pnpm env use -g latest
  ```

  安装并使用 LTS 版本的 nodejs

  ```sh
  pnpm env use -g lts
  ```

  安装并使用 v16 的 nodejs

  ```sh
  pnpm env use -g 16
  ```

  安装完成后需要重启终端方可使用。重启终端后可使用 `node -v` 、`npm -v` 查看正在使用的 nodejs 与 npm 版本。

- 列出已安装的 nodejs 版本（list, ls）

  ```sh
  pnpm env ls
  ```

  前面标星号的是正在使用的

  ```sh
  * 18.13.0
    19.4.0
  ```

- 移除指定版本的 nodejs（remove, rm）

  ```sh
  pnpm env rm -g 19.4.0
  ```

`pnpm` 可能不太好输入，可以使用较短的别名来代替它，比如：`pn` 。用管理员权限打开 PowerShell 窗口，执行：

```sh
notepad $profile.AllUsersAllHosts
```

这会打开（若没有则新建）`profile.ps1` 文件，将下面的内容写入其中：

```ps1
set-alias -name pn -value pnpm
```

保存文件并关闭窗口。为了使别名生效，可能需要关闭所有打开的 PowerShell 窗口。

这是 pnpm 官方网站中文版 [pnpm.io/zh](https://pnpm.io/zh/installation)，更多的内容可以去官网查找。
