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
  .option("-V, --versions", "check for version mismatches")
  .option("-w, --wild", "find unmanaged devDependencies")
  .option("-m, --misplaced", "find misplaced dependencies")
  .option("-v, --verbose", "be verbose")
  .parse(process.argv)

const rootDir = path.resolve(program.taste ? program.taste : ".")
const template = path.resolve(
  program.bottle ? program.bottle : "./package.json"
)

console.log("Using template", template)
console.log("Tasting directory", rootDir)
console.log()

const pinned = require(template)

const depTypes = ["dependencies", "devDependencies", "peerDependencies"]

/**
 * check package.json for each package in rootDir
 * (recursive except node_modules)
 */
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
    for (let depType of depTypes) {
      for (let dep in pkg[depType]) {
        //if there is a template dep of the same type
        if (pinned[depType] && pinned[depType][dep]) {
          if (program.versions) {
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

          //check if the dep is misplaced
        } else if (program.misplaced) {
          for (let pinnedDepType of depTypes) {
            if (pinned[pinnedDepType] && pinned[pinnedDepType][dep]) {
              console.log(
                program.pour ? chalk.green("☑") : chalk.red("☐"),
                chalk.bold.yellow.bgBlue(pkg.name) + ":",
                dep + ":",
                "->",
                chalk.green(pinnedDepType),
                chalk.gray(depType)
              )

              const existingVersion = pkg[depType][dep]
              delete pkg[depType][dep]
              if (!pkg[pinnedDepType]) {
                pkg[pinnedDepType] = {}
              }
              pkg[pinnedDepType][dep] = existingVersion
              updatedDependencies = true
            }
          }
        }
      }
    }

    //find devDependencies not present in template.devDependencies
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

/**
 * print summary
 */
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
