# 快速开始

## 服务端渲染引擎

### 1. 下载 Gaia-server 安装包

- 访问 release 页面，下载 `gaia-release.tar.gz` 压缩包<br>
  [下载链接](https://github.com/raina-rise/gaia-release/releases)
- 将文件解压，获取静态库文件`libgaia-server.a`和 include 文件夹<br>

解压后的目录结构如下：

```
/path/to/project
├── include/
│ ├── Gaia.h
│ └── ...
└── lib/
   └── libgaia-server.a
```

### 2. 安装依赖包

`Gaia-server`依赖于以下第三方库，请确保系统中已安装这些依赖：

- **Cairo**：用于 2D 图形渲染，版本号：`1.15.12`
- **librsvg**：用于 SVG 图像处理，版本号：`2.40.20`<br>

**在 Linux 系统上安装依赖**

```cpp
yum install cairo cairo-devel librsvg2 librsvg2-devel
```

### 3. 集成 Gaia-server 到项目中

将`Gaia-server`的静态库和头文件集成到项目中，并在编译时链接到相关库<br>
**示例：使用 CMake 集成**

```cmake
# 设置 Gaia-server 的头文件路径
include_directories(/path/to/project/include)

# 设置 Gaia-server 的静态库路径
link_directories(/path/to/project/lib)

# 链接 Gaia-server 静态库和依赖库
target_link_libraries(target_name gaia-server cairo librsvg-2.0)
```

### 4. 使用示例

```cpp
// 以下头文件来自gaia-server
#include "include/Gaia.h"
#include "include/Util.d"

int main(){
  // 入参
  int level; // 渲染层级：1、2或3
  int gaiaId;
  std::vector<int> indexList; // 默认当前层级全部瓦片图
  bool isSingleCore = false; // 默认开启多核渲染

  Gaia &gaia=Gaia::getInstance(gaiaId);

  // 添加rect对象
  gaia.addRect('rect1', 10, 15, 80, 80);

  // 添加path对象
  gaia.addPath('path1', 0, 0, 15, 10);
  // 添加text对象
  gaia.addText('text1', 'Text information', 12, 25);
  // 添加image对象
  gaia.addImage('image1', 5, 10, 'iVBORw0KGgoAAAANSUhEUgA...');
  // 添加svg对象
  gaia.addSvg('svg1', 30, 25, 100, 100, 'AND2');
  // 若添加svg对象，需要引入svg文件的路径
  GSvg::svgPath = "/path/to/symbol.svg"

  // 调用渲染方法，返回瓦片图的base64字符串，需要通过客户端渲染引擎拼接后展示渲染结果
  RenderResult result;
  if (isSingleCore) {
    // 单核
    result = gaia.renderWithSingleCore(level, indexList);
  } else {
    // 多核
    result = gaia.renderWithMultiCore(level, indexList);
  }

  // render方法可直接展示结果，方便用户查看
  std::string fileName = "imageTest";
  gaia.render(fileName);

}
```

## 客户端渲染引擎
