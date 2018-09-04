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
          const wildVersion = pkg.devDependencies[dep]

          if (program.verbose) {
            console.log(
              "🔥",
              chalk.bold(pkg.name) + ":",
              dep,
              chalk.gray(wildVersion)
            )
          }

          if (!wildStats[dep]) {
            wildStats[dep] = []
          }

          let wildElement = wildStats[dep].find(e => e.version === wildVersion)
          if (wildElement) {
            wildElement.count++
          } else {
            wildStats[dep].push({ version: wildVersion, count: 1 })
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

    for (let dep of wildSorted) {
      wildStats[dep].sort((a, b) => a.count - b.count)
      console.log(
        chalk.bold(dep) + ":",
        chalk.gray(
          wildStats[dep].map(e => e.version + " (" + e.count + ")").join(" ")
        ),
        "(" + wildStats[dep].length + ")"
      )
    }
  }
})

//TODO: count how many packages use the different devDependency versions and print from largest to smallest, e.g.: rollup (3): ^0.65.0 (21) ^0.62.0 (3) ^0.54.0 (1)
//TODO: packages having a package in dependencies that is in soy/devDependencies
//TODO: packages having a package in devDependencies that is in soy/dependencies
