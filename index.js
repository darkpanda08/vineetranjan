#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const dim = chalk.dim
const italic = chalk.italic
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse
const githubClr = chalk.hex(`#6cc644`).bold.inverse
const purple = chalk.hex(`#6937ff`).bold.inverse

welcome({
    title: `Vineet Ranjan`,
    tagLine: `Heyy, nice to meet you !`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#6937ff`,
    color: `#000000`,
    bold: true,
    clear: true
})

console.log(`${italic(`I'm a student pursuing Bachelor of Engineering in Electrical and Electronics Engineering I'm a Electrical and Electronics Engineering Student who thrives to learn new technologies and work on them. My interests range from Web Development, programming to electrical and electronics designs.`)}

${twitterClr(` Twitter `)}: ${dim(`https://twitter.com/vineetranjan08`)}
${githubClr(` GitHub `)}: ${dim(`https://github.com/darkpanda08`)}
${purple(` Website `)}: ${dim(`https://thedarkpanda.tech`)}

`)