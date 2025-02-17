# Problem Solved

`Gaia-server` aims to address performance bottlenecks when rendering large-scale graphics on the client by using server rendering and a tiled image design to achieve the following goals:

## 1. Efficient Rendering

- **Problem**：Rendering large-scale graphics on the client puts heavy computational pressure on the system, resulting in slow rendering speeds.
- **Solution**： `Gaia-server`offloads the rendering task to the server, utilizing high-performance computing resources to significantly improve rendering speed.

## 2. High-Resolution Support

- **Problem**：In high-resolution scenarios, clients often face performance bottlenecks, leading to suboptimal rendering effects.
- **Solution**：`Gaia-server`supports multi-level rendering, allowing users to select different levels based on their needs to optimize both rendering effects and performance.

## 3. Flexible Updates

- **Problem**：Traditional rendering methods require re-rendering the entire graphic whenever there is a change in the content, resulting in wasted resources.
- **Solution**：`Gaia-server` supports tiled rendering, updating only the areas where content has changed, avoiding unnecessary resource consumption.

## 4. Multi-Core Optimization

- **Problem**： Single-threaded rendering cannot fully utilize the computational power of modern multi-core CPUs.
- **Solution**：`Gaia-server` supports multi-core rendering, leveraging parallel computing capabilities of multi-core CPUs to enhance rendering performance.
