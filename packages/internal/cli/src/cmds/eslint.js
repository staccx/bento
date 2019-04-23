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
          "-a eyJ2ZXIiOiIyIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYiLCJraWQiOiJ3RlZRY2VoSEtFQ0J1YnBaWkNKdjE1SUxkRGZ2OUNHcGdTRHFZN1VQM3dVIn0.eyJzdWIiOiJqZnJ0QDAxYzRoNGd6OGowdzAwMHkxN2ZxcXMxcGhhXC91c2Vyc1wvc3RhY2N4Iiwic2NwIjoibWVtYmVyLW9mLWdyb3VwczpyZWFkZXJzIGFwaToqIiwiYXVkIjoiamZydEAwMWM0aDRnejhqMHcwMDB5MTdmcXFzMXBoYSIsImlzcyI6ImpmcnRAMDFjNGg0Z3o4ajB3MDAweTE3ZnFxczFwaGEiLCJleHAiOjE1NTYwMTk2OTYsImlhdCI6MTU1NjAxNjA5NiwianRpIjoiMWQ2YjQwNWYtY2QwZi00YTNlLTllOWQtOGE1NTY3NjU0ZDA2In0.A7t3E0Yz4yLWGd8uFZmmwrDwSaKHqygEJnOn5bDfgjkj4sRtDGjQAkDJKr_tpmJWiEVWrW8ZO0b3-LLMonMoPCpYwvFLP9EdWYAPrBxeyVHY_aX4LFYzJLYGBSyyuDuNHc8eO_CcBZhJCYYh0HGH3VZkTNcNmoksqxZWMri-O0845xCWp8IhzUsOdIH_J-alaP7MKjJc98GTUbE0Vtnm4di6YYkq1gxt3QrbJDYHM_aPo54-aLi60xMFLTSuK3MKC_Qyz2s9zBE_XMVELDfTS9IFCpQ0U42CHWyKMJ6AA9DCoT7MUFFzhGww51fybH_Pxmcj4814f1r1Ay3aNyJ-Og"
        ],
        {
          cwd
        }
      )
  })

  spinner.succeed("You now have eslint")
}

module.exports = install
