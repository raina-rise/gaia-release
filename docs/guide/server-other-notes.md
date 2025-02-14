# 其他说明

## 元件库使用说明

### 步骤

1. 下载元件库的 svg 文件
   [symbol-library.svg](../resources/symbol-library.svg)
2. 将元件库 svg 文件导入本地项目，目录结构为：

```
/path/to/project
├── include/
│ ├── Gaia.h
│ └── ...
└── lib/
   └── libgaia-server.a
└── symbol.svg
```

3. 设置 svg 文件路径:

```cpp
GSvg::svgPath = "/path/to/symbol.svg"
```

4. 使用 addSvg 方法渲染所需元件

元件库信息如下：
![Symbol Library](../resources/symbol-library.svg)

:::info 说明
用户可根据需求自行引入 SVG 文件进行渲染
:::
