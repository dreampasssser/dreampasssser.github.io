---
title: 基础
---

# 基础

Markdown 中的公式是用 $\LaTeX$ 语言来写的，由于有时会在 `.md` 文件中插入公式，为方便查找，统一整理到此处。

Markdown 中的公式一般可以分为两种类型：**行内公式** 和 **块级公式**。

行内公式可与其它内容共占一行，写在两个 `$` 之间，如 `$y=ax+b$` ，显示为 $y=ax+b$ 。

块级公式独占新的一行，写在两个 `$$` 之间，如 `$$y=ax+b$$` ，显示为

$$
y=ax+b
$$

若想给公式编号，可以在公式后添加 `\tag{编号}` ，如 `$$y=ax+b\tag{2}$$` ，显示为

$$
y=ax+b\tag{2}
$$

## 上下标

`^` 表示上标， `_` 表示下标。上下标可以嵌套，也可以同时使用。如 `$x_1^2$` ，显示为 $x_1^2$ 。

## 分组

如果某一部分的内容多于一个字符，需要用 `{}` 将其括成一个整体，这一使用极为广泛。如 $x^{10}$ 应写为 `$x^{10}$` ，而不是 `$x^10$` ，后者会显示为 $x^10$ 。

## 括号

此处把括号及与其类似符号整理到一起。

|   代码    |   显示    |   代码    |   显示    |        代码         |        显示         |
| :-------: | :-------: | :-------: | :-------: | :-----------------: | :-----------------: |
|    `(`    |    $($    |    `)`    |    $)$    |        `(x)`        |        $(x)$        |
|    `[`    |    $[$    |    `]`    |    $]$    |        `[x]`        |        $[x]$        |
|   `\{`    |   $\{$    |   `\}`    |   $\}$    |       `\{x\}`       |       $\{x\}$       |
| `\langle` | $\langle$ | `\rangle` | $\rangle$ | `\langle x \rangle` | $\langle x \rangle$ |
| `\lvert`  | $\lvert$  | `\rvert`  | $\rvert$  |  `\lvert x \rvert`  |  $\lvert x \rvert$  |
| `\lVert`  | $\lVert$  | `\rVert`  | $\rVert$  |  `\lVert x \rVert`  |  $\lVert x \rVert$  |
| `\lceil`  | $\lceil$  | `\rceil`  | $\rceil$  |  `\lceil x \rceil`  |  $\lceil x \rceil$  |
| `\lfloor` | $\lfloor$ | `\rfloor` | $\rfloor$ | `\lfloor x \rfloor` | $\lfloor x \rfloor$ |

若要显示与邻近公式自适应大小的括号，用 `\left` 和 `\right` 加上要使用的括号来表示，上面列出的符号都适用，以大括号为例，

`$$\{ \frac{x}{y} \}$$` 显示为 $\displaystyle \{ \frac{x}{y} \}$ 。

`$$\left\{ \frac{x}{y} \right\}$$` 显示为 $\displaystyle \left\{ \frac{x}{y} \right\}$ 。

::: details 小贴士
此处使用了 `$$` 符号，公式却只是显示了块级公式的大小而没有独占一行，是因为实际使用的是 `$\displaystyle$` , `\displaystyle`
可以把行内公式显示成块级公式，与之相反的是 `\textstyle` ，它可以把块级公式显示成行内公式。下面是一个两者来回切换的例子：

```latex
$$
\sum_{n=1}^\infty \frac{1}{n^2} \to
\textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
\displaystyle \sum_{n=1}^\infty \frac{1}{n^2}
$$
```

$$
\sum_{n=1}^\infty \frac{1}{n^2} \to
\textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
\displaystyle \sum_{n=1}^\infty \frac{1}{n^2}
$$

:::

## 分数

有如下几种写法：

- 分子分母都是单个字符时，可这样简写 `$$\frac ab$$` ，显示为

  $$\frac ab$$

  分子分母多于一个字符时使用分组 `\frac{分子}{分母}`，如 `$$\frac{a+1}{b+1}$$` ，显示为

  $$\frac {a+1} {b+1}$$

- 如果分子分母很复杂，可以使用 `分子 \over 分母`，如 `$$a+c+1 \over b+c+1$$` ，显示为

  $$a+c+1 \over b+c+1$$

- 如果是连分数，应该使用 `\cfrac` 代替 `\frac` 或 `\over` ，`\cfrac` 与 `\frac` 用法一致，如

  ```latex
  $$
  x = a_0 + \cfrac{1^2}{a_1 + \cfrac{2^2}{a_2 + \cfrac{3^2}{a_3 +
  \cfrac{4^2}{a_4 + \cdots}}}}
  $$
  ```

  显示为

  $$
  x = a_0 + \cfrac{1^2}{a_1 + \cfrac{2^2}{a_2 + \cfrac{3^2}{a_3 +
  \cfrac{4^2}{a_4 + \cdots}}}}
  $$

## 根式

用 `\sqrt[根指数，缺省时为2]{被开方数}` 表示，如

- `$\sqrt{n}$` ，显示为 $\sqrt{n}$ 。
- `$\sqrt[3]{n}$` ，显示为 $\sqrt[3]{n}$ 。

## 求和

用 `\sum_{下标}^{上标}{被加数}` 表示。下面是求和及一些与其用法相似的符号：

|   含义   |   代码    |   显示    |        含义        |   代码    |   显示    |
| :------: | :-------: | :-------: | :----------------: | :-------: | :-------: |
|    和    |  `\sum`   |  $\sum$   |         积         |  `\prod`  |  $\prod$  |
|   交集   | `\bigcap` | $\bigcap$ |        并集        | `\bigcup` | $\bigcup$ |
|   积分   |  `\int`   |  $\int$   |  封闭曲线上的积分  |  `\oint`  |  $\oint$  |
| 二重积分 |  `\iint`  |  $\iint$  |  封闭曲面上的积分  | `\oiint`  | $\oiint$  |
| 三重积分 | `\iiint`  | $\iiint$  | 封闭曲面体上的积分 | `\oiiint` | $\oiiint$ |

- `$$\sum_{k=1}^n{a_k}$$` 显示为 $\displaystyle \sum_{k=1}^{n}{a_k}$ 。

- `$$\prod_{k=1}^{n}{k}$$` 显示为 $\displaystyle \prod_{k=1}^{n}{k}$ 。

- `$$\bigcap_{k=1}^{n}{A_k}$$` 显示为 $\displaystyle \bigcap_{k=1}^{n}{A_k}$ 。

- `$$\int_{1}^{+\infty}{f(x) \, \mathrm{d}x}$$` 显示为 $\displaystyle \int_{1}^{+\infty}{f(x) \, \mathrm{d}x}$ 。

如果需要用到多行上下标，可以用下面的方法：

- 使用 `\substack` ，两行之间用 `\\` 分隔，居中显示。如

  ```latex
  $$
  \sum_{\substack{
    0\leq j\leq n \\
    0\leq k\leq 100
  }}{(a_j+b_k)}
  $$
  ```

  显示为

  $$
  \sum_{\substack{
    0\leq j\leq n \\
    0\leq k\leq 100
  }}{(a_j+b_k)}
  $$

- 使用 `subarray` 环境，可以自己选择对齐方式，`l` 、`c` 、`r` 分别表示左对齐、居中对齐、右对齐，如

  ```latex
  $$
  \sum_{\begin{subarray}{l}
      0\leq j\leq n \\
      0\leq k\leq 100
    \end{subarray}
  }{(a_j+b_k)}
  $$
  ```

  显示为

  $$
  \sum_{\begin{subarray}{l}
      0\leq j\leq n \\
      0\leq k\leq 100
    \end{subarray}
  }{(a_j+b_k)}
  $$
