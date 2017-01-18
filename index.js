#!/usr/bin/env node
const fs = require('fs');
const resolve = require('path').resolve;

const destDir = resolve(process.cwd(), process.argv[ 2 ]);  // Destination
const srcDir = resolve(__dirname, 'template');              // Template Source

const copyFiles = (src, dest) => {
  // Make the destination directory
  fs.existsSync(dest) ? true : fs.mkdirSync(dest);

  // Read the source directory for files
  // Here, it's the template folder included with the project
  fs.readdirSync(src).forEach(file => {
    const srcFile = resolve(src, file);   // Get the source file's path
    const destFile = resolve(dest, file); // Get the destination file's path

    if (fs.statSync(srcFile).isDirectory())
      // The source file is a directory
      // Call the copyFiles() function on the subdirectory
      // This recursively processes all subdirectories in the source directory
      copyFiles(srcFile, destFile)
    else
      // The source file is not a directory
      // Create a write stream from srcFile to destFile
      fs.writeFileSync(destFile, fs.readFileSync(srcFile));
  });
};

copyFiles(srcDir, destDir);

// If the program has made it this far, then it should have worked.
console.log('Done!');
