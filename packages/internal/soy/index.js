const fs = require("fs")
const path = require("path")
const globby = require("globby")
const program = require("commander")
const chalk = require("chalk")
const semver = require("semver")

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
  .option(
    "-f, --dependencies <pkg1,pkg2,...>",
    "only consider these dependencies",
    l => l.split(",")
  )
  .option("-F, --packages <pkg1,pkg2,...>", "only consider these packages", l =>
    l.split(",")
  )
  .option(
    "--find <pkg1,pkg2,...>",
    "find packages with these dependencies",
    l => l.split(",")
  )
  .option("-v, --verbose", "be verbose")
  .parse(process.argv)

const rootDir = path.resolve(program.taste ? program.taste : ".")
const template = path.resolve(
  program.bottle ? program.bottle : "./package.json"
)

console.log("Using template", template)
console.log("Tasting directory", rootDir)
console.log("Only considering dependencies", program.dependencies || "(all)")
console.log("Only considering packages", program.packages || "(all)")
console.log()

const pinned = require(template)

const depTypes = ["dependencies", "devDependencies", "peerDependencies"]

const match = (array, value) => {
  if (!array) {
    return true
  }
  return array.some(e => {
    const re = new RegExp(`^${e}$`)
    return re.test(value)
  })
}

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
  const versionMismatches = []
  const misplaced = []

  paths.forEach(path => {
    const pkg = require(path)

    if (!match(program.packages, pkg.name)) {
      return
    }

    let updatedDependencies = false
    for (let depType of depTypes) {
      for (let dep in pkg[depType]) {
        //--find
        if (program.find) {
          if (match(program.find, dep)) {
            console.log(
              chalk.bold(pkg.name),
              chalk.gray(depType),
              dep,
              pkg[depType][dep]
            )
          }
        }

        if (match(program.dependencies, dep)) {
          if (pinned[depType] && pinned[depType][dep]) {
            //--version compare
            if (program.versions) {
              const pinnedVersion = pinned[depType][dep]
              if (pkg[depType] && pkg[depType][dep]) {
                const packageVersion = pkg[depType][dep]
                if (pinnedVersion !== packageVersion) {
                  const diff = semver.intersects(pinnedVersion, packageVersion)

                  console.log(
                    program.pour ? chalk.green("☑") : chalk.red("☐"),
                    chalk.bold.yellow(pkg.name) + ":",
                    dep,
                    "->",
                    chalk.green(pinnedVersion),
                    chalk.gray(packageVersion),
                    diff
                      ? chalk.green("intersecting")
                      : chalk.red("incompatible")
                  )
                  pkg[depType][dep] = pinnedVersion
                  updatedDependencies = true

                  if (!versionMismatches.includes(dep)) {
                    versionMismatches.push(dep)
                  }
                }
              }
            }

            //--misplaced
          } else if (program.misplaced) {
            for (let pinnedDepType of depTypes) {
              if (
                pinned[pinnedDepType] &&
                pinned[pinnedDepType][dep] &&
                !(pkg[pinnedDepType] && pkg[pinnedDepType][dep])
              ) {
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

                if (!misplaced.includes(dep)) {
                  misplaced.push(dep)
                }
              }
            }
          }
        }
      }
    }

    //find devDependencies not present in template.devDependencies
    if (program.wild) {
      for (let dep in pkg.devDependencies) {
        if (match(program.dependencies, dep)) {
          if (!pinned.devDependencies[dep]) {
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

            let wildElement = wildStats[dep].find(
              e => e.version === wildVersion
            )
            if (wildElement) {
              wildElement.count++
            } else {
              wildStats[dep].push({ version: wildVersion, count: 1 })
            }
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
  return { dirtyPackageCounter, wildStats, versionMismatches, misplaced }
}

/**
 * print summary
 */
doCheck().then(
  ({ dirtyPackageCounter, wildStats, versionMismatches, misplaced }) => {
    console.log()
    if (dirtyPackageCounter) {
      if (program.pour) {
        console.log(
          chalk.yellow("Poured into", dirtyPackageCounter, "packages!")
        )
      } else {
        console.log(chalk.red(dirtyPackageCounter, "packages need soy!"))
        if (program.version) {
          console.log()
          console.log(chalk.underline("version mismatches:"))
          console.log(versionMismatches.sort().join("\n"))
        }
        if (program.misplaced) {
          console.log()
          console.log(chalk.underline("misplaced dependencies:"))
          console.log(misplaced.sort().join("\n"))
        }
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
  }
)
