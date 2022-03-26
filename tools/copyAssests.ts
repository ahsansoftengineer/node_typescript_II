import * as shell from 'shelljs'
// Copy all the View Templates
shell.cp("-R", "src/views", "dist/")
shell.cp("-R", "src/public", "dist/")