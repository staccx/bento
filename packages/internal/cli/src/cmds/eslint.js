const { executeAsync, setupSpinner, runCommand } = require("./__helpers")

const pkg = "@staccx/eslint-config@latest"

const install = async ({ pwd = null }) => {
  const cwd = pwd || process.cwd()

  const spinner = setupSpinner()

  spinner.info("Installing eslint packages")

  await runCommand({
    spinner,
    succeedText: `Installed eslint packages`,
    startText: `Installing eslint packages`,
    failText: `Failed to install eslint packages`,
    command: async () =>
      executeAsync("yarn", ["add", "-D", pkg], {
        cwd
      })
  })

  await runCommand({
    spinner,
    succeedText: `Installed peer dependencies`,
    startText: `Installing peer dependencies`,
    failText: `Failed to install peer dependencies`,
    command: async () =>
      executeAsync(
        "npx",
        [
          "install-peerdeps",
          pkg,
          "-Y",
          "-o",
          "-r https://stacc.jfrog.io/stacc/api/npm/npm/",
          "-a eyJ2ZXIiOiIyIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYiLCJraWQiOiJ3RlZRY2VoSEtFQ0J1YnBaWkNKdjE1SUxkRGZ2OUNHcGdTRHFZN1VQM3dVIn0.eyJzdWIiOiJqZnJ0QDAxYzRoNGd6OGowdzAwMHkxN2ZxcXMxcGhhXC91c2Vyc1wvc3RhY2N4Iiwic2NwIjoibWVtYmVyLW9mLWdyb3VwczpyZWFkZXJzIGFwaToqIiwiYXVkIjoiamZydEAwMWM0aDRnejhqMHcwMDB5MTdmcXFzMXBoYSIsImlzcyI6ImpmcnRAMDFjNGg0Z3o4ajB3MDAweTE3ZnFxczFwaGEiLCJpYXQiOjE1NTYwMTc5MjQsImp0aSI6ImY4OTY1YWY4LTAxZDItNGU4My1iZTU0LWUyMzhlN2FlOTliYyJ9.UtUiILWJhdHuUizUsqrdjECcc2AyelL49npClBJjhwdwJ79GOkpSdhWM0GumAQexdv-sfSRFrzu2LY6ZI0tDwIv7xzQqKZFNay44XZCAcbS9zdlODhCJIHN32f4M1AgnvhAXtYdpKUjgjEfNjJhvsYYHuQzyDHKOFCUfDhbcNbPgkNvlYz7OZ3BrRA3u0xTZZlhGJL-LQiypBDKO0mRE-n_Jo-hruZcqg6xpjWAKdADSdhymxbvKK8QdAzi6GCdNdC91Mox9d3HqXIHzLZs5foMmkusSQWUXJMjiBFfVgI_TcChu263k90Rxjy0hrm1MpNhFAA1jQx6vCYUzdJ9KhA"
        ],
        {
          cwd
        }
      )
  })

  spinner.succeed("You now have eslint")
}

module.exports = install
