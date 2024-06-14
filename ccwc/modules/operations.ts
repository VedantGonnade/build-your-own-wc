import { byteSize } from "./blob.ts";
import chalk from "chalk";
import { FileReadResult, Utils } from "./utils.ts";

const { displayErrorAndExit, readFile } = new Utils();

export class Operations {
  constructor() {}

  public calculateByteSize(fileName: string): void {
    const fileResult: FileReadResult = readFile(fileName);

    if (fileResult.success) {
      const size: number = byteSize(fileResult.content!);
      console.log(chalk.green(`${size} ${fileName}`));
    } else {
      displayErrorAndExit(`ccwc: ${fileName}: No such file or directory`);
    }
  }

  public calculateLineCount(fileName: string): void {
    const fileResult: FileReadResult = readFile(fileName);

    if (fileResult.success) {
      const lines: string[] | undefined = fileResult.content?.split("\r\n");
      console.log(chalk.green(`${lines?.length} ${fileName}`));
    } else {
      displayErrorAndExit(`ccwc: ${fileName}: No such file or directory`);
    }

    return;
  }

  public calculateWordCount(fileName: string): void {
    const fileResult: FileReadResult = readFile(fileName);

    if (fileResult.success) {
      var matches = fileResult.content?.split(/[\s]+/);
      console.log(chalk.green(`${matches?.length} ${fileName}`));
    } else {
      displayErrorAndExit(`ccwc: ${fileName}: No such file or directory`);
    }
  }
}
