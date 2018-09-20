const fs = require("fs")
const path = require("path")
const globby = require("globby")
const program = require("commander")
const chalk = require("chalk")
const semver = require("semver")
const depcheck = require("depcheck")

const list = l => l.split(",")

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
  .option("-d, --depcheck", "find unused dependencies")
  .option(
    "-R, --remove-unused <pkg1,pkg2,...>",
    "remove these unused dependencies",
    list
  )
  .option(
    "-r, --remove <pkg1,pkg2,...>",
    "remove dependencies from all packages and all groups",
    list
  )
  .option(
    "-f, --dependencies <pkg1,pkg2,...>",
    "only consider these dependencies",
    list
  )
  .option(
    "-F, --packages <pkg1,pkg2,...>",
    "only consider these packages",
    list
  )
  .option(
    "--find <pkg1,pkg2,...>",
    "find packages with these dependencies",
    list
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
console.log("Removing packages", program.remove || "(none)")
console.log("Removing unused packages", program.removeUnused || "(none)")
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

  paths.forEach(async currentPath => {
    const pkg = require(currentPath)

    // return if this package is not in the filter
    if (!match(program.packages, pkg.name)) {
      return
    }

    let updatedDependencies = false
    for (let depType of depTypes) {
      for (let dep in pkg[depType]) {
        // --remove dependencies
        if (program.remove && match(program.remove, dep)) {
          delete pkg[depType][dep]
          console.log(chalk.bold(pkg.name), chalk.gray(dep))
          updatedDependencies = true
        }

        // --find
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
            // --version compare
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

            // --misplaced
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

    // find devDependencies not present in template.devDependencies
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

    if (program.depcheck) {
      await depcheck(
        path.dirname(currentPath),
        {
          withoutDev: false,
          skipMissing: false,
          ignoreDirs: ["node_modules", "dist", "build"],
          parsers: {
            "*.js": depcheck.parser.jsx
          },
          detectors: [
            depcheck.detector.requireCallExpression,
            depcheck.detector.importDeclaration
          ]
        },

        unused => {
          const scripts = pkg.scripts || {}
          const scriptBinaries = []
          Object.keys(scripts).forEach(s => {
            const commands = scripts[s]
              .split(/\s*;\s*|\s*&&\s*/)
              .map(c => c.split(" ")[0])
            const builtins = ["yarn", "node"]
            scriptBinaries.push(...commands.filter(c => !builtins.includes(c)))
          })

          const filteredDependencies = unused.dependencies.filter(
            d => !scriptBinaries.includes(d) && match(program.dependencies, d)
          )

          const filteredDevDependencies = unused.devDependencies.filter(
            d => !scriptBinaries.includes(d) && match(program.dependencies, d)
          )

          if (
            filteredDevDependencies.length > 0 ||
            filteredDependencies.length > 0
          ) {
            console.log()
            console.log(chalk.bold.underline(pkg.name) + ":")
          }

          if (filteredDependencies.length > 0)
            console.log(filteredDependencies.join(", "))
          if (filteredDevDependencies.length > 0)
            console.log(chalk.bgWhite.black(filteredDevDependencies.join(", ")))

          if (program.removeUnused) {
            for (let d of filteredDependencies) {
              if (match(program.removeUnused, d)) {
                delete pkg.dependencies[d]
                updatedDependencies = true
              }
            }

            for (let d of filteredDevDependencies) {
              if (match(program.removeUnused, d)) {
                delete pkg.devDependencies[d]
                updatedDependencies = true
              }
            }
          }
        }
      )
    }

    if (updatedDependencies) {
      dirtyPackageCounter++
      if (program.pour) {
        fs.writeFileSync(currentPath, JSON.stringify(pkg, null, 2) + "\n")
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
