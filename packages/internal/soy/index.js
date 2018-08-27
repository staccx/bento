const fs = require("fs")
const path = require("path")
const globby = require("globby")
const program = require("commander")
const chalk = require("chalk")

program
  .description(
    "Check packages' dependencies and devDependencies against a template"
  )
  .option("-t, --taste <path>", "check dependencies of packages under path")
  .option("-b, --bottle <file>", "specify template path")
  .option("-p, --pour", "update misaligned dependencies")
  .option("-v, --verbose", "print good packages")
  .parse(process.argv)

const rootDir = path.resolve(program.taste)
const template = path.resolve(
  program.bottle ? program.bottle : "./package.json"
)

console.log(chalk.yellow("> Using template", template))
console.log(chalk.yellow("> Tasting directory", rootDir))
console.log()

const pinned = require(template)

const doCheck = async () => {
  const paths = await globby([
    `${rootDir}/**/package.json`,
    `!${rootDir}/**/node_modules`
  ])

  let dirtyPackageCounter = 0

  paths.forEach(path => {
    const pkg = require(path)
    let updatedDependencies = false
    for (let depType of ["dependencies", "devDependencies"]) {
      for (let dep in pinned[depType]) {
        const pinnedVersion = pinned[depType][dep]
        if (pkg[depType] && pkg[depType][dep]) {
          const packageVersion = pkg[depType][dep]
          if (pinnedVersion !== packageVersion) {
            console.log(
              program.pour ? chalk.green("☑") : chalk.red("☐"),
              chalk.bold(pkg.name) + ":",
              dep,
              "->",
              chalk.green(pinnedVersion),
              chalk.gray(packageVersion)
            )
            pkg[depType][dep] = pinnedVersion
            updatedDependencies = true
          }
        }
      }
    }
    if (updatedDependencies) {
      dirtyPackageCounter++
      if (program.pour) {
        fs.writeFileSync(path, JSON.stringify(pkg, null, 2) + "\n")
      }
    } else if (program.verbose) {
      console.log(chalk.bold.green(pkg.name))
    }
  })
  return dirtyPackageCounter
}

doCheck().then(dirty => {
  console.log()
  if (dirty) {
    console.log(chalk.red(dirty, "packages need soy!"))
  } else {
    console.log(chalk.green("Everything tastes good!"))
  }
})
