import { byteSize } from "./blob.ts";
import chalk from "chalk";
import { FileReadResult, Utils } from "./utils.ts";

const { displayErrorAndExit, readFile } = new Utils();

export class Operations {
  constructor() {}

  public calculateByteSize(fileName: string): void {
    const {success, content}: FileReadResult = readFile(fileName);

    if (success) {
      const size: number = byteSize(content!);
      console.log(chalk.green(`${size} ${fileName}`));
    } else {
      displayErrorAndExit(`ccwc: ${fileName}: No such file or directory`);
    }
  }

  public calculateLineCount(fileName: string): void {
    const {success, content}: FileReadResult = readFile(fileName);

    if (success) {
      const lines: string[] | undefined = content?.split(/\r?\n/g);
      console.log(chalk.green(`${lines?.length} ${fileName}`));
    } else {
      displayErrorAndExit(`ccwc: ${fileName}: No such file or directory`);
    }

    return;
  }

  public calculateWordCount(fileName: string): void {
    const {success, content}: FileReadResult = readFile(fileName);

    if (success) {
      const words = content?.split(/[\s]+/);
      console.log(chalk.green(`${words?.length} ${fileName}`));
    } else {
      displayErrorAndExit(`ccwc: ${fileName}: No such file or directory`);
    }
  }
}
