#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .description('Compare two configureation files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(filepath1, filepath2);
  });

program.parse();