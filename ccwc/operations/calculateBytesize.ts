import * as fs from "fs";
import * as path from "path";
import { byteSize } from "./blob.ts";

export function calculateByteSize(args: string[]) {
  const filename = args[1];
  const fileContent = fs.readFileSync(path.join("..", filename), "utf-8");
  const size = byteSize(fileContent);
  return `${size} ${filename}`
}
