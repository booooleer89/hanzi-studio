# Third-party notices

## Hanzi Lookup

This project uses the unmodified JavaScript WebAssembly glue from [gugray/hanzi_lookup](https://github.com/gugray/hanzi_lookup) and loads its WebAssembly module from the same project at runtime. The module performs handwritten Chinese character recognition locally in the browser. The library is licensed under GNU LGPL 3.0; see [LICENSE-LGPL-3.0.txt](./LICENSE-LGPL-3.0.txt).

The embedded character stroke data is derived from Make Me a Hanzi and Arphic fonts. Its redistribution terms are in [LICENSE-APL.txt](./LICENSE-APL.txt).

Upstream revision: 01f90c3ab99a8fadf0696c28e5eb097223c500db
Upstream WebAssembly module: https://cdn.jsdelivr.net/gh/gugray/hanzi_lookup@01f90c3ab99a8fadf0696c28e5eb097223c500db/web_demo/hanzi_lookup_bg.wasm
