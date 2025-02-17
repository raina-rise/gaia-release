import{_ as s}from"./chunks/symbol-library.CCgUtyCi.js";import{_ as e,c as i,o as t,ag as n}from"./chunks/framework.Dx5c5edu.js";const b=JSON.parse('{"title":"其他说明","description":"","frontmatter":{},"headers":[],"relativePath":"guide/server-other-notes.md","filePath":"guide/server-other-notes.md"}'),l={name:"guide/server-other-notes.md"};function p(o,a,r,c,h,d){return t(),i("div",null,a[0]||(a[0]=[n(`<h1 id="其他说明" tabindex="-1">其他说明 <a class="header-anchor" href="#其他说明" aria-label="Permalink to &quot;其他说明&quot;">​</a></h1><h2 id="元件库使用说明" tabindex="-1">元件库使用说明 <a class="header-anchor" href="#元件库使用说明" aria-label="Permalink to &quot;元件库使用说明&quot;">​</a></h2><h3 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-label="Permalink to &quot;步骤&quot;">​</a></h3><ol><li>下载元件库的 SVG 文件 <a href="../resources/symbol-library.svg">symbol-library.svg</a></li><li>将元件库 SVG 文件导入本地项目，目录结构为：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/path/to/project</span></span>
<span class="line"><span>├── include/</span></span>
<span class="line"><span>│ ├── Gaia.h</span></span>
<span class="line"><span>│ └── ...</span></span>
<span class="line"><span>└── lib/</span></span>
<span class="line"><span>   └── libgaia-server.a</span></span>
<span class="line"><span>└── symbol.svg</span></span></code></pre></div><ol start="3"><li>设置 SVG 文件路径</li></ol><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GSvg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::svgPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/path/to/symbol.svg&quot;</span></span></code></pre></div><ol start="4"><li>使用 addSvg 方法渲染所需元件</li></ol><p>元件库信息如下： <img src="`+s+'" alt="Symbol Library"></p><div class="info custom-block"><p class="custom-block-title">说明</p><p>用户可根据需求自行引入 SVG 文件进行渲染</p></div>',10)]))}const m=e(l,[["render",p]]);export{b as __pageData,m as default};
