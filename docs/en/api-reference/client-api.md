# Client API Reference
**API**

| Parameter   | Description                | Type                                | Required | Default Value           |
| ----------- | -------------------------- | ----------------------------------- | -------- | ----------------------- |
| tileData    | Tile data                  | `TileDataProps[]`                   | true     |                         |
| tileConfig  | Basic tile configuration   | `ITileConfig`                       | true     |                         |
| canvasSize  | Canvas size                | `ICanvasSize`                       | false    | width: 200, height: 200 |
| handlewheel | Wheel event callback       | `(event: TileMapEventInfo) => void` | false    |                         |
| onDragMove  | Mouse drag event callback  | `(event: TileMapEventInfo) => void` | false    |                         |
| onTileClick | Mouse click event callback | `(event: TileMapEventInfo) => void` | false    |                         |

**TileDataProps**

| Parameter      | Description               | Type     | Required |
| -------------- | ------------------------- | -------- | -------- |
| index          | Tile map index            | `number` | true     |
| blockBase64Str | Base64 string of the tile | `string` | true     |

**ITileConfig**

| Parameter             | Description                                                | Type                     | Required | Default Value |
| --------------------- | ---------------------------------------------------------- | ------------------------ | -------- | ------------- |
| tileSwitchLevel       | Resolution level for switching during zoom                 | `number`                 | false    | 1             |
| tilesNumPerResolution | Number of tiles along the x and y axis for each resolution | `ITilesNum[]丨ITilesNum` | true     |               |

**ITilesNum**

| Parameter | Description                      | Type     | Required |
| --------- | -------------------------------- | -------- | -------- |
| x         | Number of tiles along the x-axis | `number` | true     |
| y         | Number of tiles along the y-axis | `number` | true     |

**ICanvasSize**

| Parameter | Description   | Type     | Required | Default Value |
| --------- | ------------- | -------- | -------- | ------------- |
| width     | Canvas width  | `number` | false    | 200           |
| height    | Canvas height | `number` | false    | 200           |

**TileMapEventInfo**

| Parameter        | Description                      | Type                           | Required |
| ---------------- | -------------------------------- | ------------------------------ | -------- |
| type             | Event type                       | `"Wheel"丨"Click"丨"DragMove"` | true     |
| viewPort         | Starting coordinates of the view | `Location`                     | true     |
| zoomLevel        | Zoom level                       | `number`                       | true     |
| visibleIndexList | List of visible tile indices     | `number[]`                     | true     |
| curResolution    | Current resolution level         | `number`                       | true     |
| mouseInfo        | Mouse information                | `Location`                     | false    |

**Location**

| Parameter | Description       | Type     | Required |
| --------- | ----------------- | -------- | -------- |
| x         | X-axis coordinate | `number` | true     |
| y         | Y-axis coordinate | `number` | true     |
