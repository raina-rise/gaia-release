# Quick Start

## Server Rendering Engine

### 1. Download the `Gaia-Server` Installation Package

- Visit the release page and download the `gaia-release.tar.gz` archive.<br>
  [Download link](https://github.com/raina-rise/gaia-release/releases)
- Extract the file to obtain the static library file libgaia-server.a and the include folder.<br>

The directory structure after extraction is as follows:

```
/path/to/project
├── include/
│ ├── Gaia.h
│ └── ...
└── lib/
   └── libgaia-server.a
```

### 2. Install Dependencies

`Gaia-server` depends on the following third-party librarites. Please ensure that these dependencies are installed on the system :

- **Cairo**：Used for 2D graphics rendering, version: `1.15.12`
- **librsvg**：Used for SVG image processing, version: `2.40.20`<br>

### 3. Integrate Gaia-server Into the Project

Integrate the static library and header files of `Gaia-server` into the project and link the relevant libraries during compilation. <br>

**Example: Using CMake Integration**

```cmake
# Set the header file path for Gaia-server
include_directories(/path/to/project/include)

# Set the static library path for Gaia-server
link_directories(/path/to/project/lib)

# Link the Gaia-server static library and dependency libraries
target_link_libraries(target_name gaia-server cairo librsvg-2.0)
```

### 4. Usage Example

```cpp
// The following header files are from Gaia-server
#include "include/Gaia.h"
#include "include/Util.d"

int main(){
  // Input parameters
  int level; // Rendering level：1、2 or 3
  int gaiaId;
  std::vector<int> indexList; // The default tiles for the current level
  bool isSingleCore = false; // Enable multi-core rendering by default

  Gaia &gaia=Gaia::getInstance(gaiaId);

  // Add rect object
  gaia.addRect('rect1', 10, 15, 80, 80);

  // Add path object
  gaia.addPath('path1', 0, 0, 15, 10);
  // Add text object
  gaia.addText('text1', 'Text information', 12, 25);
  // Add image object
  gaia.addImage('image1', 5, 10, 'iVBORw0KGgoAAAANSUhEUgA...');
  // Add svg object
  gaia.addSvg('svg1', 30, 25, 100, 100, 'AND2');
  // If you add a SVG object，you need to import the file path of the SVG.
  GSvg::svgPath = "/path/to/symbol.svg"

  // Call the rendering method to return the base64 string of the tile map, which needs to be concatenated and displayed by the client rendering engine.
  RenderResult result;
  if (isSingleCore) {
    // Single-core
    result = gaia.renderWithSingleCore(level, indexList);
  } else {
    // Multi-core
    result = gaia.renderWithMultiCore(level, indexList);
  }

  // The render method can directly display the result, making it easier for users to view.
  std::string fileName = "imageTest";
  gaia.render(fileName);

}
```

## Client Rendering Engine

todo
