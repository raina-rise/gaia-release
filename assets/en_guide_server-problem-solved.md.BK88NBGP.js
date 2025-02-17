import{_ as r,c as o,o as i,ag as t}from"./chunks/framework.Dx5c5edu.js";const h=JSON.parse('{"title":"Problem Solved","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/server-problem-solved.md","filePath":"en/guide/server-problem-solved.md"}'),n={name:"en/guide/server-problem-solved.md"};function a(l,e,s,d,c,u){return i(),o("div",null,e[0]||(e[0]=[t('<h1 id="problem-solved" tabindex="-1">Problem Solved <a class="header-anchor" href="#problem-solved" aria-label="Permalink to &quot;Problem Solved&quot;">​</a></h1><p><code>Gaia-server</code> aims to address performance bottlenecks when rendering large-scale graphics on the client by using server rendering and a tiled image design to achieve the following goals:</p><h2 id="_1-efficient-rendering" tabindex="-1">1. Efficient Rendering <a class="header-anchor" href="#_1-efficient-rendering" aria-label="Permalink to &quot;1. Efficient Rendering&quot;">​</a></h2><ul><li><strong>Problem</strong>：Rendering large-scale graphics on the client puts heavy computational pressure on the system, resulting in slow rendering speeds.</li><li><strong>Solution</strong>： <code>Gaia-server</code>offloads the rendering task to the server, utilizing high-performance computing resources to significantly improve rendering speed.</li></ul><h2 id="_2-high-resolution-support" tabindex="-1">2. High-Resolution Support <a class="header-anchor" href="#_2-high-resolution-support" aria-label="Permalink to &quot;2. High-Resolution Support&quot;">​</a></h2><ul><li><strong>Problem</strong>：In high-resolution scenarios, clients often face performance bottlenecks, leading to suboptimal rendering effects.</li><li><strong>Solution</strong>：<code>Gaia-server</code>supports multi-level rendering, allowing users to select different levels based on their needs to optimize both rendering effects and performance.</li></ul><h2 id="_3-flexible-updates" tabindex="-1">3. Flexible Updates <a class="header-anchor" href="#_3-flexible-updates" aria-label="Permalink to &quot;3. Flexible Updates&quot;">​</a></h2><ul><li><strong>Problem</strong>：Traditional rendering methods require re-rendering the entire graphic whenever there is a change in the content, resulting in wasted resources.</li><li><strong>Solution</strong>：<code>Gaia-server</code> supports tiled rendering, updating only the areas where content has changed, avoiding unnecessary resource consumption.</li></ul><h2 id="_4-multi-core-optimization" tabindex="-1">4. Multi-Core Optimization <a class="header-anchor" href="#_4-multi-core-optimization" aria-label="Permalink to &quot;4. Multi-Core Optimization&quot;">​</a></h2><ul><li><strong>Problem</strong>： Single-threaded rendering cannot fully utilize the computational power of modern multi-core CPUs.</li><li><strong>Solution</strong>：<code>Gaia-server</code> supports multi-core rendering, leveraging parallel computing capabilities of multi-core CPUs to enhance rendering performance.</li></ul>',10)]))}const p=r(n,[["render",a]]);export{h as __pageData,p as default};
