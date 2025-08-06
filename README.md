# RodBe: Shareable TypeScript Configurations 🧙‍♂️

## Overview

This package provides shareable TypeScript configuration files to be extended in a **TypeScript v5** project. It is structured to support different environments with specific TypeScript compiler options.

## Pre-requisites

- TypeScript >= 5.0.0


## Exported Configurations

The `package.json` exports **many configurations** that can be used depending on the needs of your project:


### By environment

| Type   | Description                                   | Example                                                            |
|--------|-----------------------------------------------|--------------------------------------------------------------------|
| DOM    | Environments where DOM types are required     | Web application like vanilla, react, etc Web Module like libraries |
| NO-DOM | Environments where DOM types are not required | Node.js server-side applications.                                  |


### Use cases

| Compiler | Type   | Application | How to import?                           | Example                   |
|----------|--------|-------------|------------------------------------------|---------------------------|
| Bundler  | DOM    | App         | @rodbe/tsconfig/bundler/dom/app/react    | React                     |
| Bundler  | DOM    | App         | @rodbe/tsconfig/bundler/dom/app/next     | Next.js                   |
| Bundler  | DOM    | Lib         | @rodbe/tsconfig/bundler/dom/lib          | JS module                 |
| Bundler  | NO-DOM | App         | @rodbe/tsconfig/bundler/no-dom/app       | CLI                       |
| Bundler  | NO-DOM | Lib         | @rodbe/tsconfig/bundler/no-dom/lib       | Node.js module            |


## Usage

You can extend these configurations in your `tsconfig.json` file like so:

```json
{
  // extends the appropriate configuration based on your needs (see above "how to import" col)
  "extends": "@rodbe/tsconfig/bundler/no-dom/app",
  "compilerOptions": {
    "baseUrl": ".",
    // Your custom options
  }
}
```

### For React
```json
{
  // extends the appropriate configuration based on your needs (see above "how to import" col)
  "extends": "@rodbe/tsconfig/bundler/dom/app/react",
  "compilerOptions": {
    "baseUrl": ".",
    "types": ["vite/client", "react", "node"] // if you use vite
    // Your custom options
  }
}
```

### For Next.js
```json
{
  // extends the appropriate configuration based on your needs (see above "how to import" col)
  "extends": "@rodbe/tsconfig/bundler/dom/app/next",
  "compilerOptions": {
    "baseUrl": "."
    // Your custom options
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]
}
```

Make sure to choose the appropriate configuration based on whether you need DOM types or not.

## Additional Information

- **Homepage**: [GitHub Repository](https://github.com/rodbe-io/tsconfig)
- **Issues**: [Report Issues](https://github.com/rodbe-io/tsconfig/issues)
- **License**: MIT