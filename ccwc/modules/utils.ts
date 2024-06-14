import chalk from "chalk";
import * as fs from "fs";
import path from "path";

export interface FileReadResult {
  success: boolean;
  content?: string;
}

export class Utils {
  constructor(){}

    public displayErrorAndExit(message: string): void {
    console.error(chalk.red(message));
    process.exit(1);
  }

  public readFile(fileName: string): FileReadResult {
      try {
        const filePath: string = path.resolve(fileName);
        const content = fs.readFileSync(filePath, "utf-8");
        return { success: true, content };
      } catch (error: any) {
        return {
          success: false,
        };
      }
    }

}


