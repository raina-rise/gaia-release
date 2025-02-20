# 客户端API使用说明

**API**

| 参数        | 说明             | 类型                                  | 是否必填 | 默认值                  |
| ----------- | ---------------- | ------------------------------------- | -------- | ----------------------- |
| tileData    | 瓦片信息         | `TileDataProps[]`                     | true     |                         |
| tileConfig  | 瓦片基础配置     | `ITileConfig`                         | true     |                         |
| canvasSize  | canvas画布大小   | `ICanvasSize`                         | false    | width: 200, height: 200 |
| handlewheel | 滚轮事件回调     | `(event: TileMapEventInfo) => void`   | false    |                         |
| onDragMove  | 鼠标拖动事件回调 | `  (event: TileMapEventInfo) => void` | false    |                         |
| onTileClick | 鼠标点击事件回调 | `(event: TileMapEventInfo) => void`   | false    |                         |

**TileDataProps**

| 参数           | 说明               | 类型     | 是否必填 |
| -------------- | ------------------ | -------- | -------- |
| index          | 瓦片图索引         | `number` | true     |
| blockBase64Str | 瓦片图base64字符串 | `string` | true     |

**ITileConfig** 

| 参数                  | 说明                           | 类型                     | 是否必填 | 默认值 |
| --------------------- | ------------------------------ | ------------------------ | -------- | ------ |
| tileSwitchLevel       | 缩放时分辨率切换的等级         | `number`                 | false    | 1      |
| tilesNumPerResolution | 每种分辨率x，y轴上的瓦片图数量 | `ITilesNum[]丨ITilesNum` | true     |        |

**ITilesNum**

| 参数 | 说明            | 类型     | 是否必填 |
| ---- | --------------- | -------- | -------- |
| x    | x轴上的图片数量 | `number` | true     |
| y    | y轴上的图片数量 | `number` | true     |

**ICanvasSize**
| 参数   | 说明       | 类型   | 是否必填 | 默认值 |
| ------ | ---------- | ------ | -------- | ------ |
| width  | canvas宽度 | number | `false`  | 200    |
| height | canvas高度 | number | `false`  | 200    |

**TileMapEventInfo**
| 参数             | 说明                 | 类型                           | 是否必填 |
| ---------------- | -------------------- | ------------------------------ | -------- |
| type             | 事件类型             | `"Wheel"丨"Click"丨"DragMove"` | true     |
| viewPort         | 视图的起点坐标       | `Location`                     | true     |
| zoomLevel        | 缩放级别             | `number`                       | true     |
| visibleIndexList | 可视区域瓦片索引列表 | `number[]`                     | true     |
| curResolution    | 当前分辨率的等级     | `number`                       | true     |
| mouseInfo        | 鼠标信息             | `Location`                     | false    |


**Location**

| 参数 | 说明    | 类型     | 是否必填 |
| ---- | ------- | -------- | -------- |
| x    | x轴坐标 | `number` | true     |
| y    | y轴坐标 | `number` | true     |