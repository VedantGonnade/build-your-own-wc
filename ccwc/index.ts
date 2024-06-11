#!/usr/bin/env ts-node

function byteSize(str: string): number {
  return new Blob([str]).size;
}

if (process.argv.length == 2) {
  console.error("Usage: please provide atleast one argument");
  process.exit(1);
}

console.log(process.argv.length)
console.log(process.argv[0]);
console.log(process.argv[1]);

