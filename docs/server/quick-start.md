# 快速开始

## 1. 下载 Gaia 安装包

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

## 2. 安装依赖包

`Gaia`依赖于以下第三方库，请确保系统中已安装这些依赖：

- **Cairo**：用于 2D 图形渲染，版本号：`1.15.12`
- **librsvg**：用于 SVG 图像处理，版本号：`2.40.20`<br>

**在 Linux 系统上安装依赖**

```cpp
yum install cairo cairo-devel librsvg2 librsvg2-devel
```

## 3. 集成 Gaia 到项目中

将`Gaia`的静态库和头文件集成到项目中，并在编译时链接到相关库<br>
**示例：使用 CMake 集成**

```cmake
# 设置 Gaia 的头文件路径
include_directories(/path/to/project/include)

# 设置 Gaia 的静态库路径
link_directories(/path/to/project/lib)

# 链接 Gaia 静态库和依赖库
target_link_libraries(target_name gaia-server cairo librsvg-2.0)
```
