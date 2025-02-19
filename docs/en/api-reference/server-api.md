# Server API Reference

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

## Gaia class

### 1. Gaia Instance Creation and Destruction Methods

```cpp
1. Method
Gaia &getInstance(int id);
void destroyInstance(int id);
2. Example
int gaiaId = 1;
Gaia &gaia = Gaia::getInstance(gaiaId);
```

### 2. Create render object method

- **Rect**

```cpp
1. Method
void addRect(const std::string &id, double x, double y, int width, int height, bool keepWidth, double lineWidth, RectType rectType, Color color, int zIndex);
2. Example
gaia.addRect('rect1', 0, 0, 10, 10);
```

**Parameter Description**

| Parameter Name | Type          | Description                                                                                                                                                                      |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**         | `std::string` | The required field, the unique identifier of the rectangle.                                                                                                                      |
| **x**          | `double`      | The required x-coordinate of the top-left corner of the rectangle.                                                                                                               |
| **y**          | `double`      | The required y-coordinate of the top-left corner of the rectangle.                                                                                                               |
| **width**      | `int`         | Required, the width of the rectangle.                                                                                                                                            |
| **height**     | `int`         | Required, the height of the rectangle.                                                                                                                                           |
| **keepWidth**  | `bool`        | Optional, default value is `true`. If set to`true`, the width of the rectangle will remain unchanged during scaling; otherwise, the width will change with scaling.              |
| **lineWidth**  | `double`      | Optional, the width of the rectangle border, in `px`. The default value is 1.                                                                                                    |
| **rectType**   | `RectType`    | Optional, the type of the rectangle. `FILL`(Fill Rectangle) or `STROKE`(Stroke rectangle). The default value is `STROKE`                                                         |
| **color**      | `Color`       | Optional, the color of the rectangle, `rgba`value.It can be either the fill color or the stroke color, depending on the `rectType`. The default value is `{1.0, 0.5, 0.0, 1.0}`. |
| **zIndex**     | `int`         | Optional, the rendering layer of the rectangle. The larger the value, the higher the rectangle is displayed. The default value is 0.                                             |

- **Path**

```cpp
1. Method
void addPath(const std::string &id, double fromX, double fromY, double toX, double toY, bool keepWidth, double lineWidth, Color color, int zIndex);
2. Example
gaia.addPath('path1', 0, 0, 8, 8);
```

**Parameter Description**

| Parameter Name | Type          | Description                                                                                                                                                                |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**         | `std::string` | The required unique identifier of the path.                                                                                                                                |
| **fromX**      | `double`      | Required, the x-coordinate of the starting point of the path. y                                                                                                            |
| **fromY**      | `double`      | Required, the y-coordinate of the starting point of the path.                                                                                                              |
| **toX**        | `double`      | Required, the x-coordinate of the ending point of the path.                                                                                                                |
| **toY**        | `double`      | Required, the y-coordinate of the ending point of the path.                                                                                                                |
| **keepWidth**  | `bool`        | Optional, default value is `true`. If set to`true`,the width of the rectangle remains unchanged during scaling; otherwise, the width will change according to the scaling. |
| **lineWidth**  | `double`      | Optional, the width of the path, in `px`. The default value is 1.                                                                                                          |
| **color**      | `Color`       | Optional, the color of the path, `rgba` value. The default value `{0.0, 0.0, 1.0, 1.0}`.                                                                                   |
| **zIndex**     | `int`         | Optional, the rendering layer of the path. The larger the value, the higher the path is displayed. The default value is 0.                                                 |

- **Text**

```cpp
1. Method
void addText(const std::string &id, const std::string &content, double x, double y, bool keepSize, double fontSize, int zIndex);
2. Example
gaia.addText('text1', 'Text content', 15, 20);
```

**Parameter Description**

| Parameter Name | Type          | Description                                                                                                                                                |
| -------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**         | `std::string` | The required field, the unique identifier of the text.                                                                                                     |
| **content**    | `std::string` | Required, text content.                                                                                                                                    |
| **x**          | `double`      | Required, the x-coordinate of the top-left corner of the text.                                                                                             |
| **y**          | `double`      | Required, the y-coordinate of the top-left corner of the text.                                                                                             |
| **keepSize**   | `bool`        | Optional, default value is `true`. If set to `true`, the text size will remain unchanged during scaling; otherwise, the size will change with the scaling. |
| **fontSize**   | `double`      | Optional, the font size, in `px`. The default value is 8.                                                                                                  |
| **zIndex**     | `int`         | Optional, the rendering layer of the text. The larger the value, the higher the text will be displayed. The default value is 0.                            |

- **Image**

```cpp
1. Method
void addImage(const std::string &id, double x, double y, int width, int height, const std::string &imageBase64, int zIndex);
2. Example
gaia.addImage('image1', 5, 10, 'iVBORw0KGgoAAAANSUhEUgA...')
```

_Note: The image needs to be converted to Base64 format. _

**Parameter Description**

| Parameter Name  | Type          | Description                                                                                                                       |
| --------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **id**          | `std::string` | The required, unique identifier of the image.                                                                                     |
| **x**           | `double`      | The required x-coordinate at the top-left corner of the image.                                                                    |
| **y**           | `double`      | The required y-coordinate at the top-left corner of the image.                                                                    |
| **width**       | `int`         | Required, the width of the image.                                                                                                 |
| **height**      | `int`         | Required, the height of the image.                                                                                                |
| **imageBase64** | `std::string` | Required, image parsed into Base64 format.                                                                                        |
| **zIndex**      | `int`         | Optional, the rendering layer of the image. The larger the value, the higher the image will be displayed. The default value is 0. |

- **svg**

```cpp
1. Method
void addSvg(const std::string &id, double x, double y, int width, int height, const std::string &elementId, int zIndex);
2. Example
gaia.addSvg('svg1', 30, 25, 100, 100, 'AND2');
```

**Parameter Description**

| Parameter Name | Type          | Description                                                                                                                                 |
| -------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**         | `std::string` | The required unique identifier for the SVG image.                                                                                           |
| **x**          | `double`      | The required x-coordinate of the top-left corner of the SVG image.                                                                          |
| **y**          | `double`      | The required y-coordinate of the top-left corner of the SVG image.。                                                                        |
| **width**      | `int`         | Required, the width of the SVG image.                                                                                                       |
| **height**     | `int`         | Required, the height of the SVG image.                                                                                                      |
| **elementId**  | `std::string` | Required, id of a specific element in the SVG image.                                                                                        |
| **zIndex**     | `int`         | Optional, the rendering layer of the image. The higher the value, the more prominently the image will be displayed. The default value is 0. |

### 3. Rendering Method

- **Single-core Rendering Method**

```cpp
RenderResult renderWithSingleCore(int level, const std::vector<int> &indexList);
```

- **Multi-core Rendering Method**

```cpp
RenderResult renderWithSingleCore(int level, const std::vector<int> &indexList);
```

_Note: The single-core and multi-core rendering methods return the tiled map in string format, which requires the user to use the client rendering engine for concatenation. To view the rendering effect, please use the render method (which defaults to the multi-core rendering mode internally)._

- **render Method**

```cpp
void render(const std::string &baseFileName);
```

_The return parameter structure of single-core or multi-core rendering methods:_

```cpp
struct RenderResult{
    std::map<int, std::string> blocksRes;
    double blockWidth;
    double blockHeight;
};
```

**Parameter Description**

| Parameter Name   | Type                         | Description                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **level**        | `int`                        | The level parameter is used to control the degree of detail in the rendering. It can be set to `1`、`2` or `3`，with higher levels providing more detailed rendering. The specific explanation is as follows: <br> - `1`: Basic level, fastest rendering speed, least detail.<br> - `2`: Medium level, balancing rendering speed and detail. <br> - `3`: Highest level, slowest rendering speed, but most detailed. |
| **indexList**    | `std::vector<int>`           | The array of index values for the required render modules.                                                                                                                                                                                                                                                                                                                                                          |
| **baseFileName** | `std::string`                | Generate the file name for the rendered image.                                                                                                                                                                                                                                                                                                                                                                      |
| **blockRes**     | `std::map<int, std::string>` | The index value of each block and the Base64 format of the rendered image.                                                                                                                                                                                                                                                                                                                                          |
| **blockWidth**   | `double`                     | The width of each block.                                                                                                                                                                                                                                                                                                                                                                                            |
| **blockHeight**  | `double`                     | The height of each block.                                                                                                                                                                                                                                                                                                                                                                                           |

## Util class

### 1. The method to get the number of tiles

```cpp
int getSideNumberOnLevel(int level);
```

**Method Description**<br>
This method is used to get the corresponding number of tiles based on the specified `level`. It is used for layered rendering, returning different numbers of tiles for different levels.

- When level=1, return 4
- When level=2, return 64
- When level=3, return 1024

### 2. PNG Image Parsing Method

```cpp
std::string parseToBase64(const unsigned char *pngData, size_t input_length);
```

**Method Description**<br>
This method is used to parse a PNG image into a base64 string format.

**Parameter Description**<br>

- pngData: the byte data corresponding to a PNG image
- input_length: the size of PNG image

**Example**

```cpp
// 1. Open PNG file.
std::ifstream file("image.png", std::ios::binary);
if (!file) {
   std::cout << "Failed to open file!" << std::endl;
}

// 2. Read the file content into a byte array.
std::vector<unsigned char> pngData((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
file.close();

// 3. Call the parseToBase64 method to encode it.
std::string base64Str = Util::parseToBase64(pngData.data(), pngData.size());
```
