#!/usr/bin/env ts-node
import chalk from "chalk";
import { calculateByteSize } from "./operations/calculateBytesize.ts";

const args = process.argv.slice(2)

if (process.argv.length == 2) {
  console.error(chalk.red("No argument error: Please provide atleast one argument"));
  process.exit(1);
}

if (args[0] == "-c") {
  const result = calculateByteSize(args)
  if (result) console.log(chalk.green(result))
  else {
    console.error(chalk.red("Bytesize of the text cannot be calculated"))
  }
}
