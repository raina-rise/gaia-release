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

## 详细说明

### gaia 实例创建

```cpp
GaiaMgr gaiaMgr; // gaia实例管理器
Gaia &gaia = GaiaMgr::getGaiaInstance(gaiaId); // 创建gaia实例
auto geometryMgr = gaia.getGeometryMgr(gaiaId); // 图元对象管理类
GeometryFactory geometryFactory = gaia.getGeometryFactory(gaiaId); // 用于收集图元对象
```

### 自定义图元渲染对象

```cpp
geometryFactory.addRect(id: string, x: double, y: double, width: int, height: int, keepWidth: bool, lineWidth: double, rectType: STROKE | FILL, color: rgba, zIndex: int)
geometryFactory.addPath(id: string, fromX: double, fromY: double, toX: double, toY: double, keepWidth: bool, lineWidth: double, color: rgba, zIndex: int)
geometryFactory.addText(id: string, content: string, x: double, y: double, keepSize: bool, fontSize: int, zIndex: int)
geometryFactory.addImage(id: string, x: double, y: double, width: int, height: int， imageBase64: string, zIndex: int)
geometryFactory.addSvg(id: string, x: double, y: double, width: int, height: int，elementId: string, zIndex: int)
```

### 单核或多核渲染

```cpp
geometryMgr->renderWithSingleCore(level, indexList);
geometryMgr->renderWithMultiCore(level, indexList);
// level: int (图像层级参数，level越大，图像越细节)
// indexList: std::vector<int> (所需渲染瓦片索引值)
```

- 单核或多核渲染方法返回每个瓦片图 Base64 格式字符串与瓦片图宽高信息。

### 销毁 gaia 实例

```cpp
gaia.destoryGeometryMgr(gaiaId)
```
