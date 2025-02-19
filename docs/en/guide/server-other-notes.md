# Other Notes

## Symbol Library Usage Instructions

### Steps

1. Download the SVG files of the symbol library.
   [symbol-library.svg](../../resources/symbol-library.svg)
2. Import the SVG files from the component library into the local project, with the directory structure as follows:

```
/path/to/project
├── include/
│ ├── Gaia.h
│ └── ...
└── lib/
   └── libgaia-server.a
└── symbol.svg
```

3. Set the SVG file path

```cpp
GSvg::svgPath = "/path/to/symbol.svg"
```

4. Use the addSvg method to render the required symbol

Symbol library information is as follows：
![Symbol Library](../../resources/symbol-library.svg)

:::info Explain
The user can import SVG files for rendering according to their needs.
:::
