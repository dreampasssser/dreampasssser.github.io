---
title: 特殊符号
---

# 特殊符号

## 大小相关

|    代码     |    显示     |    代码     |    显示     |   代码    |   显示    |   代码   |   显示   |
| :---------: | :---------: | :---------: | :---------: | :-------: | :-------: | :------: | :------: |
|     `<`     |     $<$     |     `>`     |     $>$     |   `\ll`   |   $\ll$   |  `\gg`   |  $\gg$   |
|   `\leq`    |   $\leq$    |   `\geq`    |   $\geq$    |  `\lll`   |  $\lll$   |  `\ggg`  |  $\ggg$  |
| `\geqslant` | $\leqslant$ | `\geqslant` | $\geqslant$ |    `=`    |    $=$    | `\equiv` | $\equiv$ |
|  `\propto`  |  $\propto$  |             |             | `\approx` | $\approx$ |  `\neq`  |  $\neq$  |

## 加减乘除模

| 代码  | 显示  | 代码  | 显示  |   代码   |   显示   |  代码   |  显示   |
| :---: | :---: | :---: | :---: | :------: | :------: | :-----: | :-----: |
|  `+`  |  $+$  |  `-`  |  $-$  | `\times` | $\times$ | `\div`  | $\div$  |
| `\pm` | $\pm$ | `\mp` | $\mp$ | `\cdot`  | $\cdot$  | `\bmod` | $\bmod$ |

`\cdot` 是点乘，如 `$x\cdot y$` 显示为 $x\cdot y$ 。

`\bmod` 是求模，如 `$a\bmod b$` 显示为 $a\bmod b$ 。

`\pmod` 则用于同余式中，如 `$a\equiv b\pmod 7$` 显示为 $a\equiv b\pmod 7$ 。

## 几何相关

|    代码     |    显示     |     代码     |     显示     |  代码   |  显示   |   代码   |   显示   |
| :---------: | :---------: | :----------: | :----------: | :-----: | :-----: | :------: | :------: |
| `\parallel` | $\parallel$ | `\nparallel` | $\nparallel$ | `\perp` | $\perp$ | `\angle` | $\angle$ |
| `\triangle` | $\triangle$ |   `\cong`    |   $\cong$    | `\sim`  | $\sim$  |          |          |

全等与相似符号，横着的 S 在国内与国外教材中方向是反着的，现在有 `\backsim` $\backsim$ ，但没有 `\backcong` 。

## 集合相关

|    代码    |    显示    |    代码    |    显示    |     代码      |     显示      |      代码      |      显示      |
| :--------: | :--------: | :--------: | :--------: | :-----------: | :-----------: | :------------: | :------------: |
|   `\cap`   |   $\cap$   |   `\cup`   |   $\cup$   | `\varnothing` | $\varnothing$ | `\overline{A}` | $\overline{A}$ |
|   `\in`    |   $\in$    |   `\ni`    |   $\ni$    |   `\notin`    |   $\notin$    |    `\notni`    |    $\notni$    |
| `\preceq`  | $\preceq$  | `\succeq`  | $\succeq$  |  `\subseteq`  |  $\subseteq$  |  `\supseteq`   |  $\supseteq$   |
| `\npreceq` | $\npreceq$ | `\nsucceq` | $\nsucceq$ | `\nsubseteq`  | $\nsubseteq$  |  `\nsupseteq`  |  $\nsupseteq$  |
|  `\prec`   |  $\prec$   |  `\succ`   |  $\succ$   |   `\subset`   |   $\subset$   |   `\supset`    |   $\supset$    |
|  `\nprec`  |  $\nprec$  |  `\nsucc`  |  $\nsucc$  | `\not\subset` | $\not\subset$ | `\not\supset`  | $\not\supset$  |

`\mid` 可以表示集合 $\{x\mid x是偶数\}$ 中的 $\mid$ 。

`\lvert A \rvert` 可以表示 A 集合的势 $\lvert A \rvert$ 。

## 逻辑相关

|   代码    |   显示    |   代码    |   显示    |    代码    |    显示    |     代码     |     显示     |
| :-------: | :-------: | :-------: | :-------: | :--------: | :--------: | :----------: | :----------: |
|  `\land`  |  $\land$  |  `\lor`   |  $\lor$   |  `\lnot`   |  $\lnot$   |    `\neg`    |    $\neg$    |
| `\forall` | $\forall$ | `\exists` | $\exists$ | `\because` | $\because$ | `\therefore` | $\therefore$ |

## 二项式系数

|       代码       |              显示               |       代码        |               显示               |
| :--------------: | :-----------------------------: | :---------------: | :------------------------------: |
| `n+1 \choose 2k` | $\displaystyle{n+1 \choose 2k}$ | `\binom{n+1}{2k}` | $\displaystyle{\binom{n+1}{2k}}$ |

二项式系数其实就是组合数，有些书中也写成 $C(n+1, 2k)$。大学之前的书中一般写成 $C_{n+1}^{2k}$ 。

## 箭头

|              代码               |         显示          |                 代码                 |         显示          |
| :-----------------------------: | :-------------------: | :----------------------------------: | :-------------------: |
|     `\to` or `\rightarrow`      |         $\to$         |      `\gets` or `$\leftarrow$`       |        $\gets$        |
|        `\longrightarrow`        |   $\longrightarrow$   |          `$\longleftarrow$`          |   $\longleftarrow$    |
|          `\Rightarrow`          |     $\Rightarrow$     |            `$\Leftarrow$`            |     $\Leftarrow$      |
| `\Longrightarrow` or `\implies` |   $\Longrightarrow$   | `$\Longleftarrow$` or `$\impliedby$` |   $\Longleftarrow$    |
|       `$\leftrightarrow$`       |   $\leftrightarrow$   |         `$\Leftrightarrow$`          |   $\Leftrightarrow$   |
|     `$\longleftrightarrow$`     | $\longleftrightarrow$ |  `$\Longleftrightarrow$` or `\iff`   | $\Longleftrightarrow$ |
|           `\uparrow`            |      $\uparrow$       |            `$\downarrow$`            |     $\downarrow$      |
|           `\Uparrow`            |      $\Uparrow$       |            `$\Downarrow$`            |     $\Downarrow$      |
|         `\updownarrow`          |    $\updownarrow$     |           `$\Updownarrow$`           |    $\Updownarrow$     |
|            `\mapsto`            |       $\mapsto$       |            `\longmapsto`             |     $\longmapsto$     |

## 省略号

|    代码    |   显示   |                            备注                            |
| :--------: | :------: | :--------------------------------------------------------: |
|  `\dots`   | $\dots$  | 根据后一个符号位置自动定位，$a,b,\dots,z$ 和 $a+b+\dots+z$ |
| `$\cdots$` | $\cdots$ |                           居中的                           |
| `$\ldots$` | $\ldots$ |                           靠下的                           |
| `$\vdots$` | $\vdots$ |                           竖着的                           |
| `$\ddots$` | $\ddots$ |                           斜着的                           |

## 空格

|    代码    |    代码     | 显示        |
| :--------: | :---------: | :---------- |
|    `\,`    |   `a\,b`    | $a\,b$      |
|   `$\;$`   |   `a\;b`    | $a\;b$      |
| `$\quad$`  | `a\quad b`  | $a\quad b$  |
| `$\qquad$` | `a\qquad b` | $a\qquad b$ |

## 顶部底部符号

### 大小不变的

|    代码     |    显示     |    代码     |    显示     |      代码      |      显示      |    代码     |    显示     |
| :---------: | :---------: | :---------: | :---------: | :------------: | :------------: | :---------: | :---------: |
|  `\bar{a}`  |  $\bar{a}$  | `\acute{a}` | $\acute{a}$ |  `\check{a}`   |  $\check{a}$   | `\grave{a}` | $\grave{a}$ |
| `\tilde{a}` | $\tilde{a}$ | `\breve{a}` | $\breve{a}$ |   `\hat{a}`    |   $\hat{a}$    |  `\vec{a}`  |  $\vec{a}$  |
|  `\dot{a}`  |  $\dot{a}$  | `\ddot{a}`  | $\ddot{a}$  | `\mathring{a}` | $\mathring{a}$ |             |             |

### 大小可变的

|            代码            |            显示            |            代码             |            显示             |
| :------------------------: | :------------------------: | :-------------------------: | :-------------------------: |
|    `\overbrace{a+b+c}`     |    $\overbrace{a+b+c}$     |    `\underbrace{a+b+c}`     |    $\underbrace{a+b+c}$     |
|    `\overgroup{a+b+c}`     |    $\overgroup{a+b+c}$     |    `\undergroup{a+b+c}`     |    $\undergroup{a+b+c}$     |
| `\overlinesegment{a+b+c}`  | $\overlinesegment{a+b+c}$  | `\underlinesegment{a+b+c}`  | $\underlinesegment{a+b+c}$  |
|     `\overline{a+b+c}`     |     $\overline{a+b+c}$     |     `\underline{a+b+c}`     |     $\underline{a+b+c}$     |
|     `\overline{a+b+c}`     |     $\overline{a+b+c}$     |     `\underline{a+b+c}`     |     $\underline{a+b+c}$     |
|  `\overrightarrow{a+b+c}`  |  $\overrightarrow{a+b+c}$  |   `\overleftarrow{a+b+c}`   |   $\overleftarrow{a+b+c}$   |
| `\underrightarrow{a+b+c}`  | $\underrightarrow{a+b+c}$  |  `\underleftarrow{a+b+c}`   |  $\underleftarrow{a+b+c}$   |
| `\overleftrightarrow{a+b}` | $\overleftrightarrow{a+b}$ | `\underleftrightarrow{a+b}` | $\underleftrightarrow{a+b}$ |
|      `\widecheck{ab}`      |      $\widecheck{ab}$      |       `\widehat{ab}`        |       $\widehat{ab}$        |
|      `\widetilde{ab}`      |      $\widetilde{ab}$      |                             |                             |

`$\stackrel{top}{center}$` 和 `$\overset{top}{center}$` 可以在 center 内容上方添加字体小一些的 top 内容。

`$\underset{bottom}{center}$` 可以在 center 内容上方添加字体小一些的 bottom 内容。

```latex
$$
\stackrel{2.0}{\overbrace{a+b+c}}+\overset{3.0}{\overbrace{d+e+f}}
+\underset{4.0}{\underbrace{g+h+i}}
$$
```

$$
\stackrel{2.0}{\overbrace{a+b+c}}+\overset{3.0}{\overbrace{d+e+f}}+\underset{4.0}{\underbrace{g+h+i}}
$$

## 划掉东西

`y+\cancel{x}` $y+\cancel{x}$ &emsp;&ensp; `\cancel{y+x}` $\cancel{y+x}$

`y+\bcancel{x}` $y+\bcancel{x}$ &emsp; `y+\xcancel{x}` $y+\xcancel{x}$

## 需转义的符号

有些符号本身在 LaTeX 中已经有了含义，若需要显示这些符号本身，就要在它们前面加上转义符号 `\` 来使用。

| 代码 | 显示 | 代码 | 显示 |     代码     |     显示     |    代码     |    显示     |
| :--: | :--: | :--: | :--: | :----------: | :----------: | :---------: | :---------: |
| `\{` | $\{$ | `\}` | $\}$ |     `\$`     |     $\$$     |    `\#`     |    $\#$     |
| `\&` | $\&$ | `\_` | $\_$ | `\backslash` | $\backslash$ | `\setminus` | $\setminus$ |

## 其它符号

|     代码     |    显示    |       备注       |   代码   |   显示   |              备注              |
| :----------: | :--------: | :--------------: | :------: | :------: | :----------------------------: |
|   `\infty`   |  $\infty$  |       无穷       |  `\Re`   |  $\Re$   |           复数的实部           |
| `$\aleph_0$` | $\aleph_0$ |   整数集合的势   |  `\Im`   |  $\Im$   |           复数的虚部           |
|  `$\nabla$`  |  $\nabla$  | 梯度(Nabla 算子) | `\prime` | $\prime$ | 导数 `y^{\prime}` $y^{\prime}$ |
| `$\partial$` | $\partial$ |       偏导       |  `\ell`  |  $\ell$  |        手写体小写的 $l$        |
|  `$\imath$`  |  $\imath$  |                  | `\jmath` | $\jmath$ |                                |
