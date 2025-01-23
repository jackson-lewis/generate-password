#!/usr/bin/env node

import { program } from 'commander'
import chalk from 'chalk'
import generate from '@/generate'
import { copyToClipboard } from '@/clipboard'
import { DEFAULT_LENGTH } from '@/consts'

program
  .option('--length [len]', 'Length of the password', `${DEFAULT_LENGTH}`)
  .option('--lowercase', 'Use lowercase characters', true)
  .option('--uppercase', 'Use uppercase characters', true)
  .option('--numeric', 'Use numeric characters', true)
  .option('--special', 'Use special characters', false)
  .action((options) => {
    const password = generate(
      Number(options.length),
      options.lowercase,
      options.uppercase,
      options.numeric,
      options.special
    )

    copyToClipboard(password)

    console.log(chalk.green(password))
  })

program.parse()