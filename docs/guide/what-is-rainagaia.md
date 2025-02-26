# 什么是 Raina Gaia?

`Raina Gaia`是一款高性能大规模图形渲染与图形处理工具，由**服务端渲染引擎**`Gaia-server`和**客户端渲染引擎**`Gaia-client`组成，两者结合为用户提供流畅的图形渲染与交互体验。

- `Gaia-server`是`Raina Gaia`的服务端渲染引擎，旨在解决客户端大规模图形渲染的性能瓶颈问题，提供高效、灵活的渲染能力。
- `Gaia-client`是`Raina Gaia`的客户端渲染引擎，旨在处理服务端返回的渲染结果，提供瓦片图拼接、图形交互等功能。

<div class="tip custom-block" style="padding-top: 8px">

只是想尝试一下？跳到[快速开始](./quick-start)。

</div>

**工作原理图**

![work_diagram](../images/work_diagram.png)

:::tip 流程说明:

1. **客户端请求**
   客户端向服务端发送渲染请求
2. **服务端渲染引擎**
   服务端根据客户端请求生成瓦片图，并返回渲染结果
3. **客户端渲染引擎**
   客户端将瓦片图合成为最终图形显示，并支持图形交互功能
   :::

## 使用场景

- **服务端渲染引擎** [使用场景](./server-use-cases.md):

  - 复杂数据可视化
  - 大规模地图渲染
  - 2D 游戏场景

- **客户端渲染引擎** [使用场景](./client-use-cases.md):

  - 在线地图的交互与展示
  - 数据可视化工具的图形交互
  - 图形编辑工具
  - 2D 游戏的图形展示与用户交互

## 性能

与传统的渲染引擎不同，`Raina Gaia`通过服务端多核渲染模式。彻底解决了大规模复杂图形渲染中的性能瓶颈。以下是`Raina Gaia`在性能方面的核心优势：

- **多核渲染模式**<br>
  `Raina Gaia`充分利用多核 CPU 的计算能力，采用瓦片图的设计思想，将渲染任务分配到多个核心并行处理，显著提升渲染速度。无论是百万级还是亿级图形数据，都能高效完成渲染。
- **增量更新**<br>
  `Raina Gaia`支持增量更新，仅渲染发生变化的部分，避免不必要的计算和资源消耗。
  <!-- 【真实数据对比】 -->
- **多层级渲染**<br>
  `Raina Gaia`支持多层级渲染，根据用户的操作动态调整渲染细节。通过客户端缓存机制确保流畅的交互体验。
