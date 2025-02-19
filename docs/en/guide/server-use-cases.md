# Use Cases

`Gaia-server` is a high-performance server rendering engine widely used in the field of graphics rendering, suitable for the following scenarios:

## 1. Data Visualization

- **Scenario Description**：
  Real-time rendering of complex graphics in data visualization, such as EDA layout and routing visualization.
- **Advantages**：
  - Supports multiple primitive types to meet diverse needs.
  - Provides incremental update functionality to reflect data changes in real time.

## 2. Map Rendering

- **Scenario Description**：
  High-performance rendering of large-scale map scenes, such as online map services.
- **Advantages**：
  - Supports multi-level rendering to provide high-resolution maps.
  - Utilizes tile-based map design, rendering only the regions that need to be updated, improving rendering efficiency.

## 3. Game Development

- **Scenario Description**：
  High-performance rendering of 2D game scenes.
- **Advantages**：
  - Supports multi-core rendering to fully utilize hardware resources and accelerate rendering.
  - Provides smooth rendering effects to enhance the gaming experience.

## Example：EDA Field Schematic Layout and Routing Visualization

::: tip Rendering Description

- Number of schematic intersections: 14616
- Number of schematic bends: 2482
- Number of cells in the schematic: 622
- Rendering time with 4 cores: 3.9s
  :::

![add_tree](../../images/add_tree.png)
