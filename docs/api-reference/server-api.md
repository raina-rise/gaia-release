# API 使用说明

<!-- ## 调用示例

```cpp
#include "Gaia.h"
#include "Util.h"

// 入参：level、gaiaId、indexList、isSingleCore
int level;
int gaiaId;
std::vector<int> indexList;
bool isSingleCore = true;

Gaia &gaia = Gaia::getInstance(gaiaId);

// 该示例渲染数据从schematic中获取，用户可根据需求自定义

json imagesData;
auto *hirTreeRoot = GuiManager::GetInstance().GetHircTreeRoot();
if (hirTreeRoot == nullptr) {
   GUI_INFO("hirc tree root is null");
   return json::object();
}
std::string hierarchyTitle = reqJson.at("hierarchyTitle");
HircTreeNode *node = hirTreeRoot->findNode(hierarchyTitle);
auto *hInstance = node->getHInst();
if (hInstance != nullptr) {
   ApiSchematic apiSchematic(hInstance);
   auto graph = apiSchematic.runSchematicV2();
   for (auto &node : graph->getNodes()) {
   if (node->getProto()->libcell.empty()) {
      gaia.addRect(node->name, node->getPos().x, node->getPos().y, static_cast<int>(std::floor(node->getSize().x)),static_cast<int>(std::floor(node->getSize().y)));
   if (!node->isDummy) { geometryFactory.addText(node->name, node->name, node->getPos().x + 2, node->getPos().y + 2);
   }
} else {
   gaia.addSvg(node->name, node->getPos().x, node->getPos().y,static_cast<int>(std::floor(node->getSize().x)),
   static_cast<int>(std::floor(node->getSize().y)), node->getProto()->libcell);
   geometryFactory.addText(node->name, node->name, node->getPos().x + 2, node->getPos().y + 2);
}
}

int lineId = 0;
for (auto &edge : graph->getEdges()) {
   auto startPoint = edge->getSrcPoint();
   for (auto &nextPoint : edge->getBendPoints()) {
      gaia.addPath(std::to_string(lineId), startPoint.x, startPoint.y, nextPoint.x, nextPoint.y);
      lineId++;
      startPoint = nextPoint;
   }
   gaia.addPath(std::to_string(lineId), startPoint.x, startPoint.y, edge->getDstPoint().x, edge->getDstPoint().y);
   lineId++;
}
}

std::filesystem::path currentFilePath = std::filesystem::canonical(__FILE__);
GSvg::svgPath = currentFilePath.parent_path().parent_path().parent_path() / "libs" / "gaia" / "symbol_solid.svg";

RenderResult result;
if (isSingleCore) {
   // 单核
   result = gaia.renderWithSingleCore(level, indexList);
} else {
   // 多核
   result = gaia.renderWithMultiCore(level, indexList);
}

for (const auto &blockRes : result.blocksRes) {
   int index = blockRes.first;
   std::string base64Str = blockRes.second;
   imagesData.push_back({{"index", index}, {"blockBase64Str",base64Str}});
}

``` -->

## Gaia 类

### 1. gaia 实例创建与销毁方法

```cpp
1. 方法
Gaia &getInstance(int id);
void destroyInstance(int id);
2. 示例
int gaiaId = 1;
Gaia &gaia = Gaia::getInstance(gaiaId);
```

### 2. 创建渲染对象方法

- **矩形（rect）**

```cpp
1. 方法
void addRect(const std::string &id, double x, double y, int width, int height, bool keepWidth, double lineWidth, RectType rectType, Color color, int zIndex);
2. 示例
gaia.addRect('rect1', 0, 0, 10, 10);
```

**参数说明**

| 参数名        | 类型          | 描述                                                                                                       |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| **id**        | `std::string` | 必选，矩形的唯一标识符。                                                                                   |
| **x**         | `double`      | 必选，矩形左上角的 x 坐标。                                                                                |
| **y**         | `double`      | 必选，矩形左上角的 y 坐标。                                                                                |
| **width**     | `int`         | 必选，矩形的宽度。                                                                                         |
| **height**    | `int`         | 必选，矩形的高度。                                                                                         |
| **keepWidth** | `bool`        | 可选，默认值为`true`。如果为`true`，则在缩放时保持矩形的宽度不变；否则，宽度会随缩放变化。                 |
| **lineWidth** | `double`      | 可选，矩形边框的宽度，单位为`px`。默认值为 1.                                                              |
| **rectType**  | `RectType`    | 可选，矩形的类型，`FILL`（填充矩形）或`STROKE`（边框矩形）。默认值为`STROKE`                               |
| **color**     | `Color`       | 可选，矩形的颜色，`rgba`值。可以是填充颜色或边框颜色，具体取决于`rectType`。默认值为`{1.0, 0.5, 0.0, 1.0}` |
| **zIndex**    | `int`         | 可选，矩形的渲染层级。数值越大，矩形越靠上显示。 默认值为 0.                                               |

- **路径（path）**

```cpp
1. 方法
void addPath(const std::string &id, double fromX, double fromY, double toX, double toY, bool keepWidth, double lineWidth, Color color, int zIndex);
2. 示例
gaia.addPath('path1', 0, 0, 8, 8);
```

**参数说明**

| 参数名        | 类型          | 描述                                                                                       |
| ------------- | ------------- | ------------------------------------------------------------------------------------------ |
| **id**        | `std::string` | 必选，路径的唯一标识符。                                                                   |
| **fromX**     | `double`      | 必选，路径起始点的 x 坐标。                                                                |
| **fromY**     | `double`      | 必选，路径起始点的 y 坐标。                                                                |
| **toX**       | `double`      | 必选，路径终点的 x 坐标。                                                                  |
| **toY**       | `double`      | 必选，路径终点的 y 坐标。                                                                  |
| **keepWidth** | `bool`        | 可选，默认值为`true`。如果为`true`，则在缩放时保持矩形的宽度不变；否则，宽度会随缩放变化。 |
| **lineWidth** | `double`      | 可选，路径的宽度，单位为`px`。默认值为 1.                                                  |
| **color**     | `Color`       | 可选，路径的颜色，`rgba`值。默认值为`{0.0, 0.0, 1.0, 1.0}`                                 |
| **zIndex**    | `int`         | 可选，路径的渲染层级。数值越大，路径越靠上显示。 默认值为 0.                               |

- **文本（text）**

```cpp
1. 方法
void addText(const std::string &id, const std::string &content, double x, double y, bool keepSize, double fontSize, int zIndex);
2. 示例
gaia.addText('text1', 'Text content', 15, 20);
```

**参数说明**

| 参数名       | 类型          | 描述                                                                                     |
| ------------ | ------------- | ---------------------------------------------------------------------------------------- |
| **id**       | `std::string` | 必选，文本的唯一标识符。                                                                 |
| **content**  | `std::string` | 必选，文本内容。                                                                         |
| **x**        | `double`      | 必选，文本左上角的 x 坐标。                                                              |
| **y**        | `double`      | 必选，文本左上角的 y 坐标。                                                              |
| **keepSize** | `bool`        | 可选，默认值为`true`。如果为`true`，则在缩放时保持文本大小不变；否则，大小会随缩放变化。 |
| **fontSize** | `double`      | 可选，文本的大小，单位为`px`。默认值为 8.                                                |
| **zIndex**   | `int`         | 可选，文本的渲染层级。数值越大，文本越靠上显示。 默认值为 0.                             |

- **图片（image）**

```cpp
1. 方法
void addImage(const std::string &id, double x, double y, int width, int height, const std::string &imageBase64, int zIndex);
2. 示例
gaia.addImage('image1', 5, 10, 'iVBORw0KGgoAAAANSUhEUgA...')
```

_注：需要将图片解析为 Base64 格式_

**参数说明**

| 参数名          | 类型          | 描述                                                         |
| --------------- | ------------- | ------------------------------------------------------------ |
| **id**          | `std::string` | 必选，图片的唯一标识符。                                     |
| **x**           | `double`      | 必选，图片左上角的 x 坐标。                                  |
| **y**           | `double`      | 必选，图片左上角的 y 坐标。                                  |
| **width**       | `int`         | 必选，图片的宽度。                                           |
| **height**      | `int`         | 必选，图片的高度。                                           |
| **imageBase64** | `std::string` | 必选，图片解析为 Base64 格式。                               |
| **zIndex**      | `int`         | 可选，图片的渲染层级。数值越大，图片越靠上显示。 默认值为 0. |

- **svg**

```cpp
1. 方法
void addSvg(const std::string &id, double x, double y, int width, int height, const std::string &elementId, int zIndex);
2. 示例
gaia.addSvg('svg1', 30, 25, 100, 100, 'AND2');
```

**参数说明**

| 参数名        | 类型          | 描述                                                         |
| ------------- | ------------- | ------------------------------------------------------------ |
| **id**        | `std::string` | 必选，svg 对象的唯一标识符。                                 |
| **x**         | `double`      | 必选，svg 图片左上角的 x 坐标。                              |
| **y**         | `double`      | 必选，svg 图片左上角的 y 坐标。                              |
| **width**     | `int`         | 必选，svg 图片的宽度。                                       |
| **height**    | `int`         | 必选，svg 图片的高度。                                       |
| **elementId** | `std::string` | 必选，svg 图片中具体某个元素的 id。                          |
| **zIndex**    | `int`         | 可选，图片的渲染层级。数值越大，图片越靠上显示。 默认值为 0. |

### 3. 渲染方法

- **单核渲染方法**

```cpp
RenderResult renderWithSingleCore(int level, const std::vector<int> &indexList);
```

- **多核渲染方法**

```cpp
RenderResult renderWithSingleCore(int level, const std::vector<int> &indexList);
```

_注：单核渲染方法和多核渲染方法返回瓦片图的字符串形式，需要用户使用客户端渲染引擎进行拼接处理。如需查看渲染效果，请使用 render 方法（内部默认使用多核渲染模式）。_

- **render 方法**

```cpp
void render(const std::string &baseFileName);
```

_单核或多核渲染方法的返回参数结构 :_

```cpp
struct RenderResult{
    std::map<int, std::string> blocksRes;
    double blockWidth;
    double blockHeight;
};
```

**参数说明**

| 参数名           | 类型                         | 描述                                                                                                                                                                                                                                               |
| ---------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **level**        | `int`                        | 层级参数，用于控制渲染的细节程度。取值为 `1`、`2` 或 `3`，层级越大，渲染的图片细节越丰富。具体说明如下：<br> - `1`：基础层级，渲染速度最快，细节最少。<br> - `2`：中等层级，平衡渲染速度和细节。<br> - `3`：最高层级，渲染速度最慢，但细节最丰富。 |
| **indexList**    | `std::vector<int>`           | 所需渲染模块的索引值数组                                                                                                                                                                                                                           |
| **baseFileName** | `std::string`                | 生成渲染图的文件名称                                                                                                                                                                                                                               |
| **blockRes**     | `std::map<int, std::string>` | 每个 Block 的索引值与渲染图的 Base64 格式                                                                                                                                                                                                          |
| **blockWidth**   | `double`                     | 每个 Block 的宽度                                                                                                                                                                                                                                  |
| **blockHeight**  | `double`                     | 每个 Block 的高度                                                                                                                                                                                                                                  |

## Util 类

### 1. 获取瓦片图数量方法

```cpp
int getSideNumberOnLevel(int level);
```

**方法说明**<br>
该方法用于根据指定的层级`level`获取对应的瓦片图数量。用于分层渲染中，根据不同的层级返回不同的瓦片数量。

- 当 level=1 时，返回 4
- 当 level=2 时，返回 64
- 当 level=3 时，返回 1024
