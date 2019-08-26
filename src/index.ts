#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import program from 'commander';
import figlet from 'figlet';
import path from 'path';

program
    .version('0.0.1')
    .description("An CLI to build helenjs app")
    .option('-n, new <project-name>', 'New Helen Project')
    .parse(process.argv);

clear();
// tslint:disable-next-line:no-console
console.log(
    chalk.red(figlet.textSync('helenjs', { horizontalLayout: 'full' }))
)

// tslint:disable-next-line:no-console
console.log(program.help())

