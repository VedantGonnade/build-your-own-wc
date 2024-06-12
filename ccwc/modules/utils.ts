import chalk from "chalk";

export function displayErrorAndExit(message: string): void {
  console.error(chalk.red(message));
  process.exit(1);
}