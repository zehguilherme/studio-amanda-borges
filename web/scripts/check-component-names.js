const fs = require("node:fs");
const path = require("node:path");

const componentsDirectory = path.resolve(__dirname, "../src/components");
const pascalCase = /^[A-Z][A-Za-z0-9]*$/;
const failures = [];

function namedExports(source) {
  return [...source.matchAll(/export\s+(?:default\s+)?(?:function|const|class)\s+([A-Za-z_$][\w$]*)/g)].map(
    (match) => match[1]
  );
}

for (const entry of fs.readdirSync(componentsDirectory, { withFileTypes: true })) {
  if (entry.name === "icons") continue;

  const componentPath = path.join(componentsDirectory, entry.name);
  if (!entry.isDirectory()) {
    failures.push(`${entry.name}: components must be PascalCase directories`);
    continue;
  }

  if (fs.readdirSync(componentPath).length === 0) continue;

  if (!pascalCase.test(entry.name)) failures.push(`${entry.name}: directory must be PascalCase`);

  const indexPath = path.join(componentPath, "index.jsx");
  if (!fs.existsSync(indexPath)) {
    failures.push(`${entry.name}: missing index.jsx`);
  } else if (!namedExports(fs.readFileSync(indexPath, "utf8")).some((name) => pascalCase.test(name))) {
    failures.push(`${entry.name}/index.jsx: expected a named PascalCase export`);
  }

  for (const file of fs.readdirSync(componentPath)) {
    const testMatch = file.match(/^(.+)\.test\.js$/);
    if (testMatch && testMatch[1] !== entry.name) {
      failures.push(`${entry.name}/${file}: test must be named ${entry.name}.test.js`);
    }
  }
}

const iconsDirectory = path.join(componentsDirectory, "icons");
if (fs.existsSync(iconsDirectory)) {
  for (const entry of fs.readdirSync(iconsDirectory, { withFileTypes: true })) {
    if (!entry.isFile() || path.extname(entry.name) !== ".jsx") {
      failures.push(`icons/${entry.name}: icons must be PascalCase .jsx files`);
      continue;
    }

    const iconName = path.basename(entry.name, ".jsx");
    if (!pascalCase.test(iconName)) failures.push(`icons/${entry.name}: file must be PascalCase`);

    const exports = namedExports(fs.readFileSync(path.join(iconsDirectory, entry.name), "utf8"));
    if (!exports.some((name) => pascalCase.test(name))) {
      failures.push(`icons/${entry.name}: expected a named PascalCase export`);
    }
  }
}

if (failures.length) {
  process.stderr.write(`${failures.join("\n")}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write("Component naming and structure check passed.\n");
}
