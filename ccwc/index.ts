#!/usr/bin/env ts-node

import { Operations } from "./modules/operations.ts";
import { Utils} from "./modules/utils.ts";

const args: string[] = process.argv.slice(2);

const operations = new Operations();
const { displayErrorAndExit } = new Utils();

if (args.length === 0) {
  displayErrorAndExit(
    "No argument error: Please provide at least one argument"
  );
}

if (args.length === 1) {
  displayErrorAndExit("No FileName error: Please provide one file name");
}

if (args.length > 2) {
  displayErrorAndExit("Extra argument error: only two arguments are allowed");
}

const option = args[0];
const fileName = args[1];


switch (option) {
  case "-c":
    operations.calculateByteSize(fileName);
    break;
  case "-l":
    operations.calculateLineCount(fileName);
    break;
  case "-w":
    operations.calculateWordCount(fileName);
    break;
  case "-m":
    operations.calculateCharacterCount(fileName);
    break;
  default:
    displayErrorAndExit(
      `Invalid option: ${option}. Valid options are '-c' for byte size and '-l' for line count`
    );
    break;
}
