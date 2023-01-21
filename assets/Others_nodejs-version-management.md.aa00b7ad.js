import{_ as s,c as n,o as a,d as p}from"./app.ed62d87b.js";const D=JSON.parse('{"title":"nodejs 版本管理","description":"","frontmatter":{"title":"nodejs 版本管理"},"headers":[],"relativePath":"Others/nodejs-version-management.md"}'),l={name:"Others/nodejs-version-management.md"},e=p(`<h1 id="nodejs-版本管理" tabindex="-1">nodejs 版本管理 <a class="header-anchor" href="#nodejs-版本管理" aria-hidden="true">#</a></h1><p>笔者是在 windows 上安装的，记录一下踩到的坑。</p><h2 id="nvm-for-windows" tabindex="-1">nvm for windows <a class="header-anchor" href="#nvm-for-windows" aria-hidden="true">#</a></h2><p>主要参照这里的步骤 <a href="https://nvm.uihtm.com/" target="_blank" rel="noreferrer">nvm.uihtm.com</a> 。不过有几点需要注意：</p><ul><li><p>安装 nvm for wondows 之前先卸载已经安装的 nodejs 。</p></li><li><p>安装过程中设置的 nvm 安装路径会在 settings.txt 中写入 root 配置，设置的 Node.js Symlink 会在 settings.txt 中写入 path 配置。</p><p>安装完后更换国内镜像源，不要使用命令行 <code>nvm node_mirror [url]</code> 和 <code>nvm npm_mirror [url]</code> ， 这会导致 settings.txt 中已经写入的 path 丢失，然后 Node.js Symlink 就设置到 root 下了， 而你的环境变量还保持着安装时设置的 Node.js Symlink ，这会导致就算后续安装了 node ， 运行 <code>node -v</code> 时还是无法找到。</p><p>应该直接在 nvm 的根目录下找到 settings.txt 文件，直接去里边添加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">node_mirror: https://npmmirror.com/mirrors/node/</span></span>
<span class="line"><span style="color:#A6ACCD;">npm_mirror: https://npmmirror.com/mirrors/npm/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>其他会修改到 settings.txt 文件的命令最好也不要用，就直接去 settings.txt 里面改 。</p></li><li><p>用 <code>nvm use version</code> 切换 node 版本时，要用管理员权限运行终端，不然会报 <code>exit status 1</code> 错误。 切换成功后会生成一个上边设置过的 Node.js Symlink（具体设置的路径，即 settings.txt 中的 path）文件夹， 这个文件夹是带快捷方式图标的。</p></li></ul><h2 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h2><p>如果已经安装了 nodejs ，也需要先卸载掉。然后独立安装 pnpm ，再用 pnpm 安装 nodejs 并管理 nodejs 的版本。 笔者也试过在有 nodejs 的情况下，用 npm 安装 pnpm ，再用 <code>pnpm env use -g version</code> 安装 nodejs ， 不幸的是失败了，安装不上，会报如下的错误：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ERR_INVALID_ARG_TYPE</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">The</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">argument</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">must</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">be</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Received</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">undefined</span></span>
<span class="line"></span></code></pre></div><ul><li><p>windows 上使用 PowerShell 安装 pnpm</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">iwr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://get.pnpm.io/install.ps1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-useb</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">iex</span></span>
<span class="line"></span></code></pre></div></li><li><p>安装并使用 nodejs（需要管理员权限运行终端）</p><p>安装并使用最新版本的 nodejs（--global, -g）</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">latest</span></span>
<span class="line"></span></code></pre></div><p>安装并使用 LTS 版本的 nodejs</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lts</span></span>
<span class="line"></span></code></pre></div><p>安装并使用 v16 的 nodejs</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"></span></code></pre></div><p>安装完成后需要重启终端方可使用。重启终端后可使用 <code>node -v</code> 、<code>npm -v</code> 查看正在使用的 nodejs 与 npm 版本。</p></li><li><p>列出已安装的 nodejs 版本（list, ls）</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"></span></code></pre></div><p>前面标星号的是正在使用的</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> 18.13.0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">19.4.0</span></span>
<span class="line"></span></code></pre></div></li><li><p>移除指定版本的 nodejs（remove, rm）</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">19.4.0</span></span>
<span class="line"></span></code></pre></div></li></ul><p><code>pnpm</code> 可能不太好输入，可以使用较短的别名来代替它，比如：<code>pn</code> 。用管理员权限打开 PowerShell 窗口，执行：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">notepad</span><span style="color:#A6ACCD;"> $profile</span><span style="color:#C3E88D;">.AllUsersAllHosts</span></span>
<span class="line"></span></code></pre></div><p>这会打开（若没有则新建）<code>profile.ps1</code> 文件，将下面的内容写入其中：</p><div class="language-ps1"><button title="Copy Code" class="copy"></button><span class="lang">ps1</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">set-alias</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name pn </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">value pnpm</span></span>
<span class="line"></span></code></pre></div><p>保存文件并关闭窗口。为了使别名生效，可能需要关闭所有打开的 PowerShell 窗口。</p><p>这是 pnpm 官方网站中文版 <a href="https://pnpm.io/zh/installation" target="_blank" rel="noreferrer">pnpm.io/zh</a>，更多的内容可以去官网查找。</p>`,15),o=[e];function t(c,r,i,C,d,y){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{D as __pageData,m as default};