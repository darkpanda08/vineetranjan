#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')

welcome({
    title: pkgJSON.name,
    tagLine: `Heyy, nice to meet you !`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
})

console.log(`
Vineet Ranjan - Student

I'm a student pursuing Bachelor of Engineering in Electrical and Electronics Engineering I'm a Electrical and Electronics Engineering Student who thrives to learn new technologies and work on them. My interests range from Web Development, programming to electrical and electronics designs.

🐥 Twitter: https://twitter.com/vineetranjan08
📖 GitHub: https://github.com/darkpanda08
🏢 LinkedIn: https://linkedin.com/in/darkpanda08
🌐 Website: https://thedarkpanda.tech

`)