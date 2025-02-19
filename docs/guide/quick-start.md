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

将`Gaia-server`的静态库和头文件集成到项目中，并在编译时链接到相关库。<br>

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
// 以下头文件来自 Gaia-server
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
  // 添加SVG对象
  gaia.addSvg('svg1', 30, 25, 100, 100, 'AND2');
  // 若添加SVG对象，需要引入SVG文件的路径
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

### 1. 下载 Gaia-client 安装包

使用npm安装客户端渲染引擎，请确保系统中已安装node.js环境。

```
npm install gaia-client
```

或者直接下载release页面，下载`gaia-client.tar.gz`压缩包，解压后将`dist`文件夹拷贝到项目中。安装包，解压后将`dist`文件夹拷贝到项目中即可。


### 创建组件

```js
<Gaia
  tileData={data}
  tileConfig={{
    tilesNumPerResolution: {x:2, y:2},
  }}
  canvasSize={{ width: 1000, height: 1000 }}
/>
```
我们需要引入Gaia组件,并传入最基础的配置信息，就可以渲染出对应的瓦片图。对应得data数据和tileConfig配置。tileConfig配置项中tilesNumPerResolution属性表示每个分辨率下需要渲染的瓦片数量，这里我们设置成2x2。canvasSize属性表示画布的大小，这里我们设置成1000x1000.如果不设置默认是200x200

tileData所需要的格式如下：
```
[
  {
      "blockBase64Str": "iVBORw0KGgoAAAANSUhEUgAAAIMAAABICAIAAABa0NFGAAAABmJLR0QA/wD/AP+gvaeTAAAB1klEQVR4nO3cz00CQRiH4W+MBRgacAvwwNEDyQ4nb7YABxugApcObGELMLGEoROOXq1gPbiRPxnIwO7AT/d9wgEXNCOvLDOTja5pGoOAm2sPAC1KqKCECkqooISK21O/wXtbrXKMZOjcqbNY54x5bw6cnVRQQgUlVFBCxclzpz1MpfrSde7EVKovnJ1UUEIFJVRQQgUlVFBCBSVUpK7sQrAQ2vtVtfPQ3pfXEdbVqq7Kmfni2kM5U+p7YjrNOgwkr7F/19KssTPhc0IFJVRQQgUlVFBCBSVUxEqEtYX1pQcyeLE19rR+sef3u2L72Gh0mfEMV6xEeT//+nyY7RxbLDa7Gux25BArEeYTs8nusfF4s++EHLiiQAVzJxWUUEEJFZRQQQkVlFBBCRWUUBFbY7vlmz1+lE/bx4rCiqK9z27Hebw37w8+mvqeqOteBjNox6+P4dqOyzn+WvE5oYISKiihghIqKKGCEioooYISKrr+j4IIt+z/Z4prXlOeVZbm3MFHM5Sw1JH9E8l/eccvjuHspIISKiihghIqKKGCEioooYISKiihghIqupb42UvZvlXm+xjYn1GZ33sFzrx1vLYj9tTl4Pad+vh9OTupoIQKSqighIpvctduWGTJHVUAAAAASUVORK5CYII=",
      "index": 0
  },
  {
      "blockBase64Str": "iVBORw0KGgoAAAANSUhEUgAAAIMAAABICAIAAABa0NFGAAAABmJLR0QA/wD/AP+gvaeTAAABcElEQVR4nO3cQW6DMBQA0f8R9zI5Wc3NuBndVFVXtSEOmZZ5yi4RchgwyEHJfd9DANO7B6AvlqCwBIUlKCxBkRHeO71cKbFtjc/M3sReILP9GWcnCktQWILCEhRzz8VE5/TcMn3z3umFDh3lzk4UlqCwBIUlKOZhW8p12Kb+iv1j4MbGlYjBI6MbfeQ5O1HMtf729rLEslwykNtrnBOPxzXDUDTOifV+l+F38TpBYQkKS1BYgsISFJagaJQoJTK7XjWWSwb8bzXWnfp//IvcIspTY7m36cC+1itNrmdAeMWmsASFJSgsQWEJCktQWILCEhRT/8qS604/1Via+6QcWf3JYf8Wkevtnnfq/r6Z0dzNzk4UlqCwBIUlKCxBYQkKS1BYgsISFJagmIYsOt1w3Wm4cf9R4PNOz3F2orAEhSUoLEFhCQpLUFiCwhIUlqCwBIXrTif1PO906MEn151OqrHVfeT3dXaisASFJSgsQfEJ3h4y6zeyPZkAAAAASUVORK5CYII=",
      "index": 1
  },
  {
      "blockBase64Str": "iVBORw0KGgoAAAANSUhEUgAAAIMAAABICAIAAABa0NFGAAAABmJLR0QA/wD/AP+gvaeTAAABXklEQVR4nO3cQQ6CMBQA0dZ4L3szy8nUk+HCxBXU0lIywXlhYYQQcIKQvyDO8xwqxBg+G34/rG86hfles8+T2Ol8L/270C4sQWEJCktQWIJic4nbLcRYWnJIA46TK4dU/kFql61PsRWb+hTbwn8nCktQWILCEhSWoLAEhSUoLEFhCQpLUNSW+Dlucu500NxpA+dOTfx3orAEhSUoLEFhCQpLUFiCwhIUlqBYKpGfIT+PPpC/t1RieuUpNs9PnDvtN3f6XBA5NR6ac6cm14Xvmhuog3dsCktQWILCEhSWoLAEhSUoLEHh3InCuVMv504Yzp1Oxjs2hSUoLEFhCQpLUFiCwhIUlqBw7kTh3KlX/dwppdJ+nDt1qz7fWHxHlnMnCu/YFJagsASFJSgsQWEJiqWnWA2T8+oqr4njPB6ltV4Tx0mpNPAYUyJOQ3Z7agPe76Qm3icoLEFhCQpLULwBqUFae59ZdwgAAAAASUVORK5CYII=",
      "index": 2
  },
  {
      "blockBase64Str": "iVBORw0KGgoAAAANSUhEUgAAAIMAAABICAIAAABa0NFGAAAABmJLR0QA/wD/AP+gvaeTAAABV0lEQVR4nO3cwXGDMBBA0V2GQtKJ1UlKQZTiSix34k6Uc/ApoBk+8X/jEweN4I/B3gPZe48hco2+jFnqEkaf7zRwLR1hCQpLUFiCwhIUU2YM+dQoZ5/Ltc2jfsRGtojboLU+kXcnCktQWILCEhSWoLAEhSUoLEFhCQpLnKG2qG1zzLnTTjXK/mu1ZqzPzYLOnXaq0Wrfe761v1+r+eiOtEMt78d8TlBYgsISFJagsASFJSgsQWEJCktQOHeicO5E4d2JwhIUlqCwBIUlKCxBYQkKS1BYgsISFHMp0dqgxXIdtNAnyohh74vQEd6dKCxBYQkKS1BYgsISFJagsARFRvTluq/va6/6vNfbd5Svs7fyB2W9l3htXiM4PR5n7Ue/pLMOCJ8TFJagsASFJSgsQWEJCktQWIIil+XK/+z+07TjrN1ow2kHhd8JCktQWILCEhSWoLAExQ9ApkFzinEERwAAAABJRU5ErkJggg==",
      "index": 3
  }
]
```
blockBase64Str表示瓦片的base64编码，index表示瓦片的索引，例如这是一个2*2的瓦片图，index分别为0,1,2,3

![瓦片图2x2](../images/client/瓦片图2x2.jpg)


完成上述基本工作以后，我们能够在页面上渲染出一个2x2的瓦片图。当然上述只是最基本的用法，Gaia还提供了更多的功能，比如分辨率切换、增量更新、自定义事件回调等等，用于满足更复杂的场景需求。

### 瓦片图的分辨率切换
以下是一个更复杂的场景，我们希望在初始渲染一个2x2的瓦片图，当我们缩放到一定的数量级后，我们希望去渲染一个8x8，甚至是32x32的瓦片图，这样可以更加清晰地展示图片内容。  


```js
// handlewheel事件回调函数
const handlewheel = (event: TileMapEventInfo) => {
  if (event.curResolution === 0) {
    fetchTileData("data_2x2");
  } else if (event.curResolution === 1) {
    fetchTileData("data_8x8");
  } else {
    fetchTileData("data_32x32");
  }
};

<Gaia
  tileData={data}
  handlewheel={handlewheel}
  tileConfig={{
    tileSwitchLevel: 4,
    tilesNumPerResolution: [
      { x: 2, y: 2 },
      { x: 8, y: 8 },
      { x: 32, y: 32 },
    ],
  }}
  canvasSize={{ width: 1000, height: 1000 }}
/>
```

上述代码我们创建了一个handlewheel事件回调函数，当用户缩放瓦片图时，我们通过判断当前的分辨率的等级，TileMapEventInfo对象中提供的curResolution属性，来判断用户当前的缩放级别。如果当前的分辨率等级为0，我们就去请求2x2的瓦片数据；如果当前的分辨率等级为1，我们就去请求8x8的瓦片数据；如果当前的分辨率等级为2，我们就去请求32x32的瓦片数据,并将请求来的数据保存在data变量中，传递给Gaia。
tileSwitchLevel属性表示当缩放到多少级时，才会触发分辨率切换，这里我们设置成4级。
tilesNumPerResolution属性表示不同分辨率下的瓦片数量，这里我们设置成2x2、8x8、32x32。当用户缩放到4级时，瓦片图会渲染8x8的图片，同理缩小4级，瓦片图会渲染2x2的图片。

![levelChange](../images/client/levelchange.gif)

### 增量更新
由于Gaiaclinet的瓦片更新机制是增量更新，因此我们仅仅传入可视区域的瓦片，而不用重新请求全部瓦片数据，从而提高性能。
```js
const handlewheel = (event: TileMapEventInfo) => {
  fetchData(
    event.visibleIndexList,
    event.curResolution
  );
};
```
TileMapEventInfo对象中提供的visibleIndexList属性，表示当前可视区域的瓦片索引列表，curResolution属性表示当前的分辨率等级，通过这两个属性，我们可以仅仅请求可视区域的瓦片数据，从而提高性能。例如当前可视区域的瓦片索引列表为[0，1]，当前的分辨率等级为0，也就是2x2的瓦片图，我们仅仅需要更新瓦片图为2x2索引为0,1的瓦片数据，而不用更新其余的瓦片数据,当然如果是遇到重复的数据更新，需要用户自己做好处理，防止不必要的数据请求。





