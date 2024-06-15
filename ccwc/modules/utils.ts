import chalk from "chalk";
import * as fs from "fs";
import path from "path";

export interface FileReadResult {
  success: boolean;
  content?: string;
}


export class Utils {
  constructor() {}

  public async readPipedInput(input: NodeJS.ReadStream): Promise<string> {
    let data = "";
    for await (const chunk of input) data += chunk;
    return data;
  }

  public displayErrorAndExit(message: string): string {
    return chalk.red(message);
  }

  public displayResultAndExit(
    message: string | number | undefined,
    fileName?: string
  ): void {
    const name = fileName ? fileName : ""
    console.log(chalk.green(`${message} ${name}`));
    process.exit(0);
  }

  public readFile(fileName: string): FileReadResult {
    try {
      const filePath: string = path.resolve(fileName);
      const content = fs.readFileSync(filePath, "utf-8");
      return { success: true, content };
    } catch (error) {
      return {
        success: false,
      };
    }
  }
}
