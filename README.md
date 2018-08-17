## Rollup code-splitting issue

This repo is a minimal reproduction of a rollup code-splitting issue.

Run `yarn build` to build the chunks. They are outputted to the `public` folder.

Run `yarn start` to start an http server on port 8080. Navigate to http://localhost:8080 to see the runtime error from the malformed chunks.

## Details

`public/main-a.js` ends up looking like this

```javascript
'use strict';

var __chunk_1 = require('./chunk-d05ed4fb.js');

__chunk_1.Other.doSomething();
Broken.doSomething();
```

where `Broken` is not defined.

`Broken` should be exported out of `__chunk_1` but it is not.