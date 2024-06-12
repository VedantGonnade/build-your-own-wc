import * as fs from "fs";
import * as path from "path";
import { byteSize } from "./blob.ts";

export function calculateByteSize(args: string[]): string {
  const filename: string = args[1];
  const fileContent: string = fs.readFileSync(path.join("..", filename), "utf-8");
  const size: number = byteSize(fileContent);
  return `${size} ${filename}`
}
