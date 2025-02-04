# Gaia-大规模图形渲染引擎
### 版本：v1.0.0
### 发布日期：2024.12.27

## 项目简介
Gaia是一个高性能的几何渲染引擎，分为服务端渲染和客户端渲染两部分。服务端渲染引擎负责快速的图形渲染，客户端渲染引擎负责图形的拼接处理操作，提供高效、灵活的渲染能力。

## 一、服务端渲染引擎
### 介绍
   服务端渲染引擎支持rect、path、text、image、svg五种基础图元对象的渲染，支持单核渲染和多核渲染模式，提供高效的大规模图形渲染能力。
### 使用说明
下载release页面的gaia-release.tar.gz压缩包，该压缩包包含项目的预编译文件，用户可以直接下载并使用这些文件进行开发或集成。 
压缩包gaia-release.tar.gz包含以下文件和目录：
1. include/文件夹
   包含项目的所有头文件，用户可以将次目录添加到项目的包含路径中，用于调用项目的接口。
2. lib/文件夹
   包含项目的静态库文件，用户可以将此目录添加到项目的库路径中，用于链接项目库。

将解压后的include文件夹和lib文件夹引入到项目中，如需渲染image或svg格式的图形，将对应图形数据文件放在include文件夹的同级目录下，即可完成渲染功能。
#### API使用说明
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
   
## 二、客户端渲染引擎
todo
