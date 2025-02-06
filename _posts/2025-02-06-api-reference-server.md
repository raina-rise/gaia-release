# API使用说明
1. gaia实例创建
   ```
   GaiaMgr gaiaMgr; // gaia实例管理器 
   Gaia &gaia = GaiaMgr::getGaiaInstance(gaiaId); // 创建gaia实例 
   auto geometryMgr = gaia.getGeometryMgr(gaiaId); // 图元对象管理类 
   GeometryFactory geometryFactory = gaia.getGeometryFactory(gaiaId); // 用于收集图元对象
  
2. 自定义图元渲染对象
   ```
   geometryFactory.addRect(id: string, x: double, y: double, width: int, height: int, keepWidth: bool, lineWidth: double, rectType: STROKE | FILL, color: rgba, zIndex: int)
   geometryFactory.addPath(id: string, fromX: double, fromY: double, toX: double, toY: double, keepWidth: bool, lineWidth: double, color: rgba, zIndex: int)
   geometryFactory.addText(id: string, content: string, x: double, y: double, keepSize: bool, fontSize: int, zIndex: int)
   geometryFactory.addImage(id: string, x: double, y: double, width: int, height: int， imageBase64: string, zIndex: int)
   geometryFactory.addSvg(id: string, x: double, y: double, width: int, height: int，elementId: string, zIndex: int)
   ```
3. 单核或多核渲染
   ```
   geometryMgr->renderWithSingleCore(level, indexList);
   geometryMgr->renderWithMultiCore(level, indexList);
   level: int (图像层级参数，level越大，图像越细节)
   indexList: std::vector<int> (所需渲染瓦片索引值)
   ```
    单核或多核渲染方法返回每个瓦片图Base64格式字符串与瓦片图宽高信息。  

4. 销毁gaia实例
   ```
   gaia.destoryGeometryMgr(gaiaId)
   ```