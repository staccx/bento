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
  .option("-w, --wild", "find unmanaged devDependencies")
  .option("-v, --verbose", "be verbose")
  .parse(process.argv)

const rootDir = path.resolve(program.taste)
const template = path.resolve(
  program.bottle ? program.bottle : "./package.json"
)

console.log("Using template", template)
console.log("Tasting directory", rootDir)
console.log()

const pinned = require(template)

const doCheck = async () => {
  const paths = await globby([
    `${rootDir}/**/package.json`,
    `!${rootDir}/**/node_modules`
  ])

  let dirtyPackageCounter = 0
  const wildStats = {}

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
              chalk.bold.yellow(pkg.name) + ":",
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
    if (program.wild) {
      for (let dep in pkg.devDependencies) {
        if (!pinned[dep]) {
          if (program.verbose) {
            console.log(
              "🔥",
              chalk.bold(pkg.name) + ":",
              dep,
              chalk.gray(pkg.devDependencies[dep])
            )
          }

          if (!wildStats[dep]) {
            wildStats[dep] = []
          }
          if (!wildStats[dep].includes(pkg.devDependencies[dep])) {
            wildStats[dep].push(pkg.devDependencies[dep])
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
  return { dirtyPackageCounter, wildStats }
}

doCheck().then(({ dirtyPackageCounter, wildStats }) => {
  console.log()
  if (dirtyPackageCounter) {
    if (program.pour) {
      console.log(chalk.yellow("Poured into", dirtyPackageCounter, "packages!"))
    } else {
      console.log(chalk.red(dirtyPackageCounter, "packages need soy!"))
    }
  } else {
    console.log(chalk.green("Everything tastes good!"))
  }

  if (program.wild) {
    console.log()
    console.log(chalk.underline("Wild devDependencies summary:"))
    console.log()
    const wildSorted = Object.keys(wildStats).sort(
      (a, b) => wildStats[b].length - wildStats[a].length
    )

    for (let wild of wildSorted) {
      console.log(
        chalk.bold(wild) + ":",
        chalk.gray(wildStats[wild].join(" ")),
        "(" + wildStats[wild].length + ")"
      )
    }
  }
})

//TODO: count how many packages use the different devDependency versions and print from largest to smallest, e.g.: rollup (3): ^0.65.0 (21) ^0.62.0 (3) ^0.54.0 (1)
//TODO: packages having a package in dependencies that is in soy/devDependencies
//TODO: packages having a package in devDependencies that is in soy/dependencies

