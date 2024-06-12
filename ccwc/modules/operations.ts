import * as fs from "fs";
import * as path from "path";
import { byteSize } from "./blob.ts";

export function calculateByteSize(fileName: string): string {
  const fileContent: string = readFile(fileName)
  const size: number = byteSize(fileContent);
  return `${size} ${fileName}`
}

export function calculateLineCount(fileName: string): string {
  const fileContent: string = readFile(fileName);
  const lines: string[] = fileContent.split("\n");
  return `${lines.length} ${fileName}`
}


function readFile(fileName: string): string {
  try {
    const filePath: string = path.join("..", fileName);
    return fs.readFileSync(filePath, "utf-8");
  } catch (error: any) {
    return `Error reading file: ${fileName} with error message: ${error.message} `;
  }
}