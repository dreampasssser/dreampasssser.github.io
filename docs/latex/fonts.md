---
title: 字体
---

# 字体

## 字体类型

以黑板粗体为例，格式是这样的：`$\mathbb{AB}$` ，显示为 $\mathbb{AB}$ 。

### 黑板粗体（blackboard bold）

用 `\mathbb` 或 `\Bbb` ，仅用于大写字母，如

$$\Bbb{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

### 粗体（boldface）

用 `\mathbf` ，如

$$\mathbf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

$$\mathbf{abcdefghijklmnopqrstuvwxyz}$$

对于基于表达式的字符，使用 `\boldsymbol` 代替， 如 $\boldsymbol{\alpha}$ 。

### 斜体（italics）

用 `\mathit` ，这也是公式中默认的字体，如

$$\mathit{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

$$\mathit{abcdefghijklmnopqrstuvwxyz}$$

### 加粗斜体（boldfaced italics）

用 `\pmb` ，如

$$\pmb{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

$$\pmb{abcdefghijklmnopqrstuvwxyz}$$

### 打字机字体（typewriter）

用 `\mathtt` ，如

$$\mathtt{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

$$\mathtt{abcdefghijklmnopqrstuvwxyz}$$

### 罗马字体（roman）

用 `\mathrm` ，如

$$\mathrm{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

$$\mathrm{abcdefghijklmnopqrstuvwxyz}$$

### 无衬线字体（sans-serif）

用 `\mathsf` ，如

$$\mathsf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

$$\mathsf{abcdefghijklmnopqrstuvwxyz}$$

### 书法字体（calligraphic）

用 `\mathcal` ，仅用于大写字母，如

$$\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

### 手写体（script）

用 `\mathscr` ，仅用于大写字母，如

$$\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

### 德国尖角字体（旧德文风格）（Fraktur）

用 `\mathfrak` ，如

$$\mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$$

$$\mathfrak{abcdefghijklmnopqrstuvwxyz}$$

## 字体大小

以 large 为例，格式是这样的：`$\large{LaTeX}$` ，显示为 $\large{LaTeX}$ 。

字体大小从小到达依次有这些：`\tiny` 、`\scriptsize` 、`\footnotesize` 、`\small` 、`\normalsize` 、
`\large` 、`\Large` 、`\LARGE` 、`\huge` 、`\Huge` ，如

$$
\tiny{LaTeX} \\
\scriptsize{LaTeX} \\
\footnotesize{LaTeX} \\
\small{LaTeX} \\
\normalsize{LaTeX} \\
\large{LaTeX} \\
\Large{LaTeX} \\
\LARGE{LaTeX} \\
\huge{LaTeX} \\
\Huge{LaTeX}
$$

## 字体颜色

用 `\color{色值}{字符}` ，其中色值可以用 red 、green 等常用颜色，也可以用十六进制 rgb 形式，如

`\color{red}{F=ma}` 显示为 $\color{red} F=ma$ ，`\color{#228B22}{F=ma}` 显示为 $\color{#228B22}{F=ma}$ 。

<!-- 此外，还有其他几种写法：

`\textcolor{#228B22}{F=ma}` 显示为

$$ \textcolor{#228B22}{F=ma} $$

`\colorbox{red}{$F=ma$}` 显示为

$$
\colorbox{red}{$F=ma$}
$$

`\fcolorbox{red}{aqua}{$F=ma$}` 显示为

$$
\fcolorbox{yellow}{red}{$F=ma$}
$$ -->
