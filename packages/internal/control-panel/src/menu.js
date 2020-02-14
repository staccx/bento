const electron = require("electron")
const app = electron.app
const Menu = electron.Menu
const shell = electron.shell

const buildDarwinTemplate = mainWindow => {
  const subMenuAbout = {
    label: "Bento",
    submenu: [
      {
        label: "About ElectronReact",
        selector: "orderFrontStandardAboutPanel:"
      },
      { type: "separator" },
      {
        label: "Services",
        submenu: [
          {
            label: "Build all",
            accelerator: "Command+B",
            selector: "buildAll:"
          }
        ]
      },
      { type: "separator" },
      {
        label: "Hide ElectronReact",
        accelerator: "Command+H",
        selector: "hide:"
      },
      {
        label: "Hide Others",
        accelerator: "Command+Shift+H",
        selector: "hideOtherApplications:"
      },
      { label: "Show All", selector: "unhideAllApplications:" },
      { type: "separator" },
      {
        label: "Quit",
        accelerator: "Command+Q",
        click: () => {
          app.quit()
        }
      }
    ]
  }
  const subMenuEdit = {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "Command+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+Command+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "Command+X", selector: "cut:" },
      { label: "Copy", accelerator: "Command+C", selector: "copy:" },
      { label: "Paste", accelerator: "Command+V", selector: "paste:" },
      {
        label: "Select All",
        accelerator: "Command+A",
        selector: "selectAll:"
      }
    ]
  }
  const subMenuViewDev = {
    label: "View",
    submenu: [
      {
        label: "Reload",
        accelerator: "Command+R",
        click: () => {
          mainWindow.webContents.reload()
        }
      },
      {
        label: "Toggle Full Screen",
        accelerator: "Ctrl+Command+F",
        click: () => {
          mainWindow.setFullScreen(!this.mainWindow.isFullScreen())
        }
      },
      {
        label: "Toggle Developer Tools",
        accelerator: "Alt+Command+I",
        click: () => {
          mainWindow.toggleDevTools()
        }
      }
    ]
  }
  const subMenuViewProd = {
    label: "View",
    submenu: [
      {
        label: "Toggle Full Screen",
        accelerator: "Ctrl+Command+F",
        click: () => {
          mainWindow.setFullScreen(!this.mainWindow.isFullScreen())
        }
      }
    ]
  }
  const subMenuWindow = {
    label: "Window",
    role: "window",
    submenu: [
      {
        label: "Minimize",
        accelerator: "Command+M",
        selector: "performMiniaturize:"
      },
      { label: "Close", accelerator: "Command+W", selector: "performClose:" },
      { type: "separator" },
      { label: "Bring All to Front", selector: "arrangeInFront:" }
    ]
  }
  const subMenuHelp = {
    label: "Help",
    submenu: [
      {
        label: "Learn More",
        click() {
          shell.openExternal("http://electron.atom.io")
        }
      },
      {
        label: "Documentation",
        click() {
          shell.openExternal(
            "https://github.com/atom/electron/tree/master/docs#readme"
          )
        }
      },
      {
        label: "Community Discussions",
        click() {
          shell.openExternal("https://discuss.atom.io/c/electron")
        }
      },
      {
        label: "Search Issues",
        click() {
          shell.openExternal("https://github.com/atom/electron/issues")
        }
      }
    ]
  }

  const tools = {
    label: "Tools",
    submenu: [
      {
        label: "Open Styleguide",
        accelerator: "Alt+Ctrl+S",
        click() {
          mainWindow.webContents.send("serve styleguide")
        }
      },
      {
        label: "Bootstrap",
        click() {
          mainWindow.webContents.send("bootstrap")
        }
      },
      {
        label: "Clean",
        click() {
          mainWindow.webContents.send("clean")
        }
      },
      {
        label: "Reset project",
        click() {
          mainWindow.webContents.send("reset project")
        }
      }
    ]
  }
  const subMenuBuild = {
    label: "Build",
    submenu: [
      {
        label: "Build all",
        click() {
          shell.exec("lerna run build")
        }
      }
    ]
  }

  const subMenuView = subMenuViewDev

  return [
    subMenuAbout,
    subMenuEdit,
    subMenuView,
    subMenuBuild,
    subMenuWindow,
    tools
  ]
}

const buildDefaultTemplate = mainWindow => {
  const templateDefault = [
    {
      label: "&File",
      submenu: [
        {
          label: "&Open",
          accelerator: "Ctrl+O"
        },
        {
          label: "&Close",
          accelerator: "Ctrl+W",
          click: () => {
            this.mainWindow.close()
          }
        }
      ]
    },
    {
      label: "&View",
      submenu:
        process.env.NODE_ENV === "development"
          ? [
              {
                label: "&Reload",
                accelerator: "Ctrl+R",
                click: () => {
                  mainWindow.webContents.reload()
                }
              },
              {
                label: "Toggle &Full Screen",
                accelerator: "F11",
                click: () => {
                  mainWindow.setFullScreen(!this.mainWindow.isFullScreen())
                }
              },
              {
                label: "Toggle &Developer Tools",
                accelerator: "Alt+Ctrl+I",
                click: () => {
                  mainWindow.toggleDevTools()
                }
              }
            ]
          : [
              {
                label: "Toggle &Full Screen",
                accelerator: "F11",
                click: () => {
                  mainWindow.setFullScreen(!this.mainWindow.isFullScreen())
                }
              }
            ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Learn More",
          click() {
            shell.openExternal("http://electron.atom.io")
          }
        },
        {
          label: "Documentation",
          click() {
            shell.openExternal(
              "https://github.com/atom/electron/tree/master/docs#readme"
            )
          }
        },
        {
          label: "Community Discussions",
          click() {
            shell.openExternal("https://discuss.atom.io/c/electron")
          }
        },
        {
          label: "Search Issues",
          click() {
            shell.openExternal("https://github.com/atom/electron/issues")
          }
        }
      ]
    }
  ]

  return templateDefault
}

class MenuBuilder {
  constructor(mainWindow) {
    this.mainWindow = mainWindow
  }

  buildMenu() {
    if (
      process.env.NODE_ENV === "development" ||
      process.env.DEBUG_PROD === "true"
    ) {
      this.setupDevelopmentEnvironment()
    }

    let template

    if (process.platform === "darwin") {
      template = buildDarwinTemplate(this.mainWindow)
    } else {
      template = buildDefaultTemplate(this.mainWindow)
    }

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    return menu
  }

  setupDevelopmentEnvironment() {
    this.mainWindow.openDevTools()
    this.mainWindow.webContents.on("context-menu", (e, props) => {
      const { x, y } = props

      Menu.buildFromTemplate([
        {
          label: "Inspect element",
          click: () => {
            this.mainWindow.inspectElement(x, y)
          }
        }
      ]).popup(this.mainWindow)
    })
  }
}

module.exports = MenuBuilder