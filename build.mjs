import * as esbuild from "esbuild";
import { execSync } from "child_process";
import fs from "fs";

// Clean dist folder
if (fs.existsSync("dist")) {
    fs.rmSync("dist", { recursive: true });
}
fs.mkdirSync("dist");

// Generate type declarations
console.log("📝 Generating type declarations...");
execSync(
    "npx tsc --emitDeclarationOnly --declaration --declarationDir dist --project tsconfig.build.json",
    {
        stdio: "inherit",
    }
);

// Build ESM
console.log("📦 Building ESM...");
await esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    sourcemap: true,
    format: "esm",
    outfile: "dist/index.mjs",
    external: [
        "react",
        "react-dom",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
    ],
    target: ["es2020"],
    jsx: "automatic",
});

// Build CJS
console.log("📦 Building CJS...");
await esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    sourcemap: true,
    format: "cjs",
    outfile: "dist/index.js",
    external: [
        "react",
        "react-dom",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
    ],
    target: ["es2020"],
    jsx: "automatic",
});

console.log("✅ Build complete!");
