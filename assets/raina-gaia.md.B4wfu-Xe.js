import{_ as e,c as o,o as i,ag as r}from"./chunks/framework.Dx5c5edu.js";const t="/gaia-release/assets/work_diagram.BuXZLwi4.png",c="/gaia-release/assets/demo1.BjYxwrFG.png",h=JSON.parse('{"title":"什么是 Raina Gaia?","description":"","frontmatter":{},"headers":[],"relativePath":"raina-gaia.md","filePath":"raina-gaia.md"}'),d={name:"raina-gaia.md"};function n(s,a,l,p,g,_){return i(),o("div",null,a[0]||(a[0]=[r('<h1 id="什么是-raina-gaia" tabindex="-1">什么是 Raina Gaia? <a class="header-anchor" href="#什么是-raina-gaia" aria-label="Permalink to &quot;什么是 Raina Gaia?&quot;">​</a></h1><p><code>Raina Gaia</code>是一款高性能大规模图形渲染与图形处理工具，由<strong>服务端渲染引擎</strong><code>Gaia-server</code>和<strong>客户端渲染引擎</strong><code>Gaia-client</code>组成，两者结合为用户提供流畅的图形渲染与交互体验。</p><ul><li><code>Gaia-server</code>是<code>Raina Gaia</code>的服务端渲染引擎，旨在解决客户端大规模图形渲染的性能瓶颈问题，提供高效、灵活的渲染能力。</li><li><code>Gaia-client</code>是<code>Raina Gaia</code>的客户端渲染引擎，旨在处理服务端返回的渲染结果，提供瓦片图拼接、图形交互等功能。</li></ul><p><strong>工作原理图</strong></p><p><img src="'+t+'" alt="work_diagram"></p><p><strong>流程说明</strong></p><ol><li><strong>客户端请求</strong> 客户端向服务端发送渲染请求</li><li><strong>服务端渲染引擎</strong> 服务端根据客户端请求生成瓦片图，并返回渲染结果</li><li><strong>客户端渲染引擎</strong> 客户端将瓦片图合成为最终图形显示，并支持图形交互功能</li></ol><h2 id="服务端渲染引擎" tabindex="-1">服务端渲染引擎 <a class="header-anchor" href="#服务端渲染引擎" aria-label="Permalink to &quot;服务端渲染引擎&quot;">​</a></h2><p><code>Gaia-server</code>支持 <code>矩形(rect)</code>、<code>路径(path)</code>、<code>文本(text)</code>、<code>图片(image)</code>或<code>svg</code> 五种基础图元对象的渲染，支持多层级的渲染，支持单核渲染和多核渲染模式等功能。</p><p><code>Gaia-server</code>需要用户提供渲染图元的数据信息，根据用户定义的<code>矩形(rect)</code>、<code>路径(path)</code>、<code>文本(text)</code>、<code>图片(image)</code>或<code>svg</code>属性信息，输出对应的渲染图，渲染效果示例下：</p><blockquote><p>该图为服务端渲染瓦片图拼接后的结果。</p></blockquote><p><img src="'+c+'" alt="demo1"></p><h2 id="客户端渲染引擎" tabindex="-1">客户端渲染引擎 <a class="header-anchor" href="#客户端渲染引擎" aria-label="Permalink to &quot;客户端渲染引擎&quot;">​</a></h2><p><code>Gaia-client</code>能够将服务端返回的瓦片图无缝拼接成完整的渲染图形，提供丰富的图形交互功能，根据用户的缩放操作动态地切换层级，提供高分辨率的渲染结果。</p>',14)]))}const u=e(d,[["render",n]]);export{h as __pageData,u as default};
