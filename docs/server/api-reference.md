# API 使用说明

## 调用示例

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

```

## API 详细说明

### Gaia 类

- **方法**

```cpp
// gaia实例创建与销毁API
Gaia &getInstance(int id);
void destroyInstance(int id);

// 收集渲染对象API
void addRect(const std::string &id, double x, double y, int width, int height, bool keepWidth, double lineWidth, RectType rectType, Color color, int zIndex);
void addPath(const std::string &id, double fromX, double fromY, double toX, double toY, bool keepWidth, double lineWidth, Color color, int zIndex);
void addText(const std::string &id, const std::string &content, double x, double y, bool keepSize, double fontSize, int zIndex);
void addImage(const std::string &id, double x, double y, int width, int height, const std::string &imageBase64, int zIndex);
void addSvg(const std::string &id, double x, double y, int width, int height, const std::string &elementId, int zIndex);

// 单核与多核渲染API，返回每个瓦片图 Base64 格式字符串与瓦片图宽高信息
RenderResult renderWithSingleCore(int level, const std::vector<int> &indexList);  // 单核
RenderResult renderWithMultiCore(int level, const std::vector<int> &indexList);   // 多核

// 渲染结果API，直接生成png图片，该方法主要用于测试
void render(const std::string &baseFileName);
```

### Util 类

- **方法**

```cpp
int getSideNumberOnLevel(int level);
```
