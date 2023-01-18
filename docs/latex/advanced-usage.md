---
title: 高级用法
---

# 高级用法

此处整理的用法一般写成 `\begin{environment}...\end{environment}` 形式，`environment` 用具体的词去替换。

## 表格

用 `array` 环境，在 `\begin{array}` 后面紧接着定义每一列的格式，`l`、`c`、`r`、`|`
分别代表左对齐、居中对齐、右对齐、垂直分割线，每一个符号都是可选的，若都没有，默认居中对齐、无垂直分割线。
单元格之间以 `&` 分隔以区分列，行之间以 `\\` 分隔。若要加水平分割线，可以把 `\hline` 加在行之间。如

```latex
$$
\begin{array}{c|lcr}
n & \text{Left} & \text{Center} & \text{Right} \\
\hline
1 & 0.24 & 1 & 125 \\
2 & -1 & 189 & -8 \\
3 & -20 & 2000 & 1+10i
\end{array}
$$
```

显示为

$$
\begin{array}{c|lcr}
n & \text{Left} & \text{Center} & \text{Right} \\
\hline
1 & 0.24 & 1 & 125 \\
2 & -1 & 189 & -8 \\
3 & -20 & 2000 & 1+10i
\end{array}
$$

`array` 还可以嵌套来创建一批表格，如

```latex
$$
% outer vertical array of arrays
\begin{array}{c}
  % inner horizontal array of arrays
  \begin{array}{cc}
    % inner array of minimum values
    \begin{array}{c|cccc}
      \text{min} & 0 & 1 & 2 & 3 \\
      \hline
      0 & 0 & 0 & 0 & 0 \\
      1 & 0 & 1 & 1 & 1 \\
      2 & 0 & 1 & 2 & 2 \\
      3 & 0 & 1 & 2 & 3
    \end{array}
    &
    % inner array of maximum values
    \begin{array}{c|cccc}
      \text{max} & 0 & 1 & 2 & 3 \\
      \hline
      0 & 0 & 1 & 2 & 3 \\
      1 & 1 & 1 & 2 & 3 \\
      2 & 2 & 2 & 2 & 3 \\
      3 & 3 & 3 & 3 & 3
    \end{array}
  \end{array}
  \\
  % inner array of delta values
  \begin{array}{c|cccc}
    \Delta & 0 & 1 & 2 & 3 \\
    \hline
    0 & 0 & 1 & 2 & 3 \\
    1 & 1 & 0 & 1 & 2 \\
    2 & 2 & 1 & 0 & 1 \\
    3 & 3 & 2 & 1 & 0
  \end{array}
\end{array}
$$
```

显示为

$$
\begin{array}{c}
  \begin{array}{cc}
    \begin{array}{c|cccc}
      \text{min} & 0 & 1 & 2 & 3 \\
      \hline
      0 & 0 & 0 & 0 & 0 \\
      1 & 0 & 1 & 1 & 1 \\
      2 & 0 & 1 & 2 & 2 \\
      3 & 0 & 1 & 2 & 3
    \end{array}
    &
    \begin{array}{c|cccc}
      \text{max} & 0 & 1 & 2 & 3 \\
      \hline
      0 & 0 & 1 & 2 & 3 \\
      1 & 1 & 1 & 2 & 3 \\
      2 & 2 & 2 & 2 & 3 \\
      3 & 3 & 3 & 3 & 3
    \end{array}
  \end{array}
  \\
  \begin{array}{c|cccc}
    \Delta & 0 & 1 & 2 & 3 \\
    \hline
    0 & 0 & 1 & 2 & 3 \\
    1 & 1 & 0 & 1 & 2 \\
    2 & 2 & 1 & 0 & 1 \\
    3 & 3 & 2 & 1 & 0
  \end{array}
\end{array}
$$

## 矩阵

- 用 `matrix` 环境，元素之间用 `&` 分隔，行之间用 `\\` 分隔，如

  ```latex
  $$
  \begin{matrix}
  1 & x & x^2 \\
  1 & y & y^2 \\
  1 & z & z^2 \\
  \end{matrix}
  $$
  ```

  显示为

  $$
  \begin{matrix}
  1 & x & x^2 \\
  1 & y & y^2 \\
  1 & z & z^2 \\
  \end{matrix}
  $$

- 若要加括号，可以使用 `\left(...)\right` 的形式，也可以把 `matrix` 换成

  `pmatrix` &emsp; $\begin{pmatrix}1 & 2 \\ 3 & 4\end{pmatrix}$ &emsp;&emsp;
  `bmatrix` &emsp; $\begin{bmatrix}1 & 2 \\ 3 & 4\end{bmatrix}$ &emsp;&emsp;
  `Bmatrix` &emsp; $\begin{Bmatrix}1 & 2 \\ 3 & 4\end{Bmatrix}$

  `vmatrix` &emsp;&ensp; $\begin{vmatrix}1 & 2 \\ 3 & 4\end{vmatrix}$ &emsp;&emsp;&ensp;
  `Vmatrix` &emsp; $\begin{Vmatrix}1 & 2 \\ 3 & 4\end{Vmatrix}$

- 若想省略一些条目，可以使用 `\cdots` $\cdots$ 、`\vdots` $\vdots$ 、`\ddots` $\ddots$ ，如

  ```latex
  $$
  \begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots  & \vdots& \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n
  \end{pmatrix}
  $$
  ```

  显示为

  $$
  \begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots  & \vdots& \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n
  \end{pmatrix}
  $$

- 若想展示增广矩阵，可以使用前面提到的 `array` 环境，如

  ```latex
  $$
  \left(
  \begin{array}{cc|c}
  1 & 2 & 3 \\
  4 & 5 & 6
  \end{array}
  \right)
  $$
  ```

  显示为

  $$
  \left(
  \begin{array}{cc|c}
  1 & 2 & 3 \\
  4 & 5 & 6
  \end{array}
  \right)
  $$

- 若想展示行内的小的矩阵，可以使用 `\bigl(\begin{smallmatrix}...\end{smallmatrix}\bigr)` ，如

  ```latex
  $\bigl( \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \bigr)$
  ```

  显示为 $\bigl( \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \bigr)$

## 对齐的等式或方程

用 `aligned` 环境，在需要对齐的地方加一个 `&` 符号，通常放在 `=` 前面，需要换行的地方使用 `\\` 。若要在每行加一些说明，可以使用 `\text{说明文字}` 加在后面，中间用 `&` 隔开，一个 `&` 是右对齐，两个 `&` 是左对齐，说明文字全中文的话则不需要使用 `text{}` ，格式也没有影响。

```latex
$$
\begin{aligned}
(X \cap Y) - (X \cap Z) &= (X \cap Y) \cap (\overline{X \cap Z}) &&[差集定义] \\
&= (X \cap Y) \cap (\overline{X} \cup \overline{Z}) &&[集合的德·摩根定律] \\
&= ((X \cap Y) \cap \overline{X}) \cup ((X \cap Y) \cap \overline{Z}) &&[分配律] \\
&= ((Y \cap X) \cap \overline{X}) \cup ((X \cap Y) \cap \overline{Z}) &&[交换律] \\
&= (Y \cap (X \cap \overline{X})) \cup (X \cap (Y \cap \overline{Z})) &&[结合律] \\
&= (Y \cap \varnothing) \cup (X \cap (Y - Z)) &&[补余律、差集定义] \\
&= \varnothing \cup (X \cap (Y - Z)) &&[零律] \\
&= X \cap (Y - Z) &&[同一律]
\end{aligned}
$$
```

显示为

$$
\begin{aligned}
(X \cap Y) - (X \cap Z) &= (X \cap Y) \cap (\overline{X \cap Z}) &&[差集定义] \\
&= (X \cap Y) \cap (\overline{X} \cup \overline{Z}) &&[集合的德·摩根定律] \\
&= ((X \cap Y) \cap \overline{X}) \cup ((X \cap Y) \cap \overline{Z}) &&[分配律] \\
&= ((Y \cap X) \cap \overline{X}) \cup ((X \cap Y) \cap \overline{Z}) &&[交换律] \\
&= (Y \cap (X \cap \overline{X})) \cup (X \cap (Y \cap \overline{Z})) &&[结合律] \\
&= (Y \cap \varnothing) \cup (X \cap (Y - Z)) &&[补余律、差集定义] \\
&= \varnothing \cup (X \cap (Y - Z)) &&[零律] \\
&= X \cap (Y - Z) &&[同一律]
\end{aligned}
$$

## 方程组

- 用 `cases` 环境，以大括号为准左对齐，如

  ```latex
  $$\begin{cases}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y=d_2 \\
  a_3x=d_3
  \end{cases}
  $$
  ```

  显示为

  $$
  \begin{cases}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y=d_2 \\
  a_3x=d_3
  \end{cases}
  $$

- 用 `array` 环境和 `\left\{...\right.` ，可以自由调整对齐方式，`l` 、`c` 、`r` ，若还需要以 $=$ 对齐，可以直接在 $=$ 前加 `&` ，如

  ```latex
  $$
  \left\{
  \begin{array}{c}
  a_1x+b_1y+c_1z=d_1+e_1 \\
  a_2y+b_2z=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{array}
  \right.
  $$
  ```

  显示为

  $$
  \left\{
  \begin{array}{l}
  a_1x+b_1y+c_1z=d_1+e_1 \\
  a_2y+b_2z=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{array}
  \right.
  $$

  ```latex
  $$
  \left\{
  \begin{array}{ll}
  a_1x+b_1y+c_1z&=d_1+e_1 \\
  a_2y+b_2z&=d_2 \\
  a_3x+b_3y+c_3z&=d_3
  \end{array}
  \right.
  $$
  ```

  显示为

  $$
  \left\{
  \begin{array}{ll}
  a_1x+b_1y+c_1z&=d_1+e_1 \\
  a_2y+b_2z&=d_2 \\
  a_3x+b_3y+c_3z&=d_3
  \end{array}
  \right.
  $$

- 用 `aligned` 环境和 `\left\{...\right.` ，以 $=$ 为准对齐，如

  ```latex
  $$
  \left\{
  \begin{aligned}
  a_1x+b_1y+c_1z &=d_1+e_1 \\
  a_2x+b_2y&=d_2 \\
  a_3x+b_3y+c_3z &=d_3
  \end{aligned}
  \right.
  $$
  ```

  显示为

  $$
  \left\{
  \begin{aligned}
  a_1x+b_1y+c_1z &=d_1+e_1 \\
  a_2x+b_2y&=d_2 \\
  a_3x+b_3y+c_3z &=d_3
  \end{aligned}
  \right.
  $$

- 如果方程之间显得过于紧凑，可以用 `\\[2ex]` 来代替 `\\` ，`2ex` 中的 `2` 可以是任意合适的数字，下面是使用与不使用时的对比效果。

  ```latex
  $$
  \begin{cases}
  a_1x+b_1y+c_1z=\displaystyle\frac{p_1}{q_1} \\
  a_2x+b_2y+c_2z=\displaystyle\frac{p_2}{q_2} \\
  a_3x+b_3y+c_3z=\displaystyle\frac{p_3}{q_3}
  \end{cases}
  $$
  ```

  显示为

  $$
  \begin{cases}
  a_1x+b_1y+c_1z=\displaystyle\frac{p_1}{q_1} \\
  a_2x+b_2y+c_2z=\displaystyle\frac{p_2}{q_2} \\
  a_3x+b_3y+c_3z=\displaystyle\frac{p_3}{q_3}
  \end{cases}
  $$

  ```latex
  $$
  \begin{cases}
  a_1x+b_1y+c_1z=\displaystyle\frac{p_1}{q_1} \\[3ex]
  a_2x+b_2y+c_2z=\displaystyle\frac{p_2}{q_2} \\[3ex]
  a_3x+b_3y+c_3z=\displaystyle\frac{p_3}{q_3}
  \end{cases}
  $$
  ```

  显示为

  $$
  \begin{cases}
  a_1x+b_1y+c_1z=\displaystyle\frac{p_1}{q_1} \\[3ex]
  a_2x+b_2y+c_2z=\displaystyle\frac{p_2}{q_2} \\[3ex]
  a_3x+b_3y+c_3z=\displaystyle\frac{p_3}{q_3}
  \end{cases}
  $$

## 分类函数

用 `f(x)=` 加上上边的方程组形式的内容（除去等号及以后部分），如

```latex
$$
f(n)=
\begin{cases}
n/2,  & \text{if }n\text{ is even} \\
3n+1, & \text{if }n\text{ is odd}
\end{cases}
$$
```

显示为

$$
f(n)=
\begin{cases}
n/2,  & \text{if }n\text{ is even} \\
3n+1, & \text{if }n\text{ is odd}
\end{cases}
$$

## 交换图表

用 `CD` 环境。

`@>>>` 表示向右的箭头 &nbsp; `@<<<` 表示向左的箭头 &nbsp; `@VVV` 表示向下的箭头 &nbsp; `@AAA` 表示向上的箭头

`@=` 表示横向的双线 &emsp;&nbsp; `@|` 表示竖向的双线 &emsp;&nbsp; `@.` 表示没有线和箭头

`@>>>` 和 `@<<<` 中间可以添加文字，添加在第一个 `>` 或 `<` 后边的显示在箭头上边，添加在第二个 `>` 或 `<` 后边的显示在箭头下边。

`@VVV` 和 `@AAA` 中间可以添加文字，添加在第一个 `V` 或 `A` 后边的显示在箭头左边，添加在第二个 `V` 或 `A` 后边的显示在箭头右边。

```latex
$$
\begin{CD}
A @>a>> B \\
@VbVV = @VVcV \\
C @>>d> D
\end{CD}
$$
```

显示为

$$
\begin{CD}
A @>a>> B \\
@VbVV = @VVcV \\
C @>>d> D
\end{CD}
$$

```latex
$$
\begin{CD}
A @>>> B @>{\text{very long label}}>> C \\
@. @AAA @| \\
D @= E @<<< F
\end{CD}
$$
```

显示为

$$
\begin{CD}
A @>>> B @>{\text{very long label}}>> C \\
@. @AAA @| \\
D @= E @<<< F
\end{CD}
$$
