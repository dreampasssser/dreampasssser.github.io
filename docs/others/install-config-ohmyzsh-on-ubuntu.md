---
title: Ubuntu 上安装、配置 oh-my-zsh
---

# Ubuntu 上安装、配置 oh-my-zsh

## 安装 zsh

Ubuntu 一般不会自带 zsh，可以先用 `zsh --version` 检测一下，如果检测不到，再用如下命令安装：

```sh
sudo apt install zsh
```

安装的最后会让你选择是否使用 zsh 作为默认 shell，你可以此时选择是，也可以后面使用如下命令修改默认 shell：

```sh
chsh -s $(which zsh)

# 或直接使用路径
chsh -s /usr/bin/zsh
```

然后需要关闭 shell 再重新打开 shell ，这样修改才会生效。

修改默认 shell 成功后，你应该去 `.bashrc` 中看一下是否有环境变量相关的配置，如果有，需要复制这些配置到 `.zshrc` 中，否则原来安装的与这些环境变量相关的软件无法正常使用。

## 安装 oh-my-zsh

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 或可使用国内源
sh -c "$(curl -fsSL https://gitee.com/mirrors/ohmyzsh/raw/master/tools/install.sh)"
```

## 安装 powerlevel10k 主题

### 克隆主题到本地目录

```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# 或可使用国内源
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

### 在 `~/.zshrc` 中设置主题

```
ZSH_THEME="powerlevel10k/powerlevel10k"
```

### 使主题生效

```sh
source .zshrc
```

然后会出现一系列的选项让你选择，根据你的选择去配置主题样式。

以后如果想修改样式可以运行以下命令重新来选择：

```sh
p10k configure
```

## 安装语法高亮、自动提示插件

### 克隆插件到本地目录

```sh
# 安装 zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# 安装 zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

### 将插件名称添加到 `~/.zshrc` 中的 `plugins` 中

```
plugins=(git zsh-syntax-highlighting zsh-autosuggestions)
```

### 使插件生效

```sh
source .zshrc
```
