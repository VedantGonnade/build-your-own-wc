#!/usr/bin/env ts-node

import chalk from "chalk";
import { calculateByteSize, calculateLineCount } from "./modules/operations.ts";
import { displayErrorAndExit } from "./modules/utils.ts";

const args: string[] = process.argv.slice(2);

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

if (option === "-c") {
  const result: string = calculateByteSize(fileName);
  if (result) console.log(chalk.green(result));
  else displayErrorAndExit("Byte size of the text cannot be calculated");
} else if (option === "-l") {
  const result = calculateLineCount(fileName);
  if (result) console.log(chalk.green(result));
  else displayErrorAndExit("Line count of the text cannot be calculated");
} else {
  displayErrorAndExit(
    `Invalid option: ${option}. Valid options are '-c' for byte size and '-l' for line count`
  );
}
