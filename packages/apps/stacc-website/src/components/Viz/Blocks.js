import PropTypes from "prop-types"
import React from "react"
import * as THREE from "three"
let scene = null
let camera = null
// const renderer = new THREE.WebGLRenderer({ antialias: true })
let renderer = null
const heightRatio = 0.32711198428
let container
const blocks = []
const frustumSize = 50
const animationMixers = []
const time = new THREE.Clock()
const mouse = new THREE.Vector2()
const raycaster = new THREE.Raycaster()

const mixers = []

const colors = ["#467EFF", "#EB5E55", "#FFBA30", "#FFF230", "#66CD73"]

const taken = {}

class Blocks extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.init = this.init.bind(this)
    this.update = this.update.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  componentWillMount() {
    this.grid = []
    const xMod = (-this.props.xCells / 2) * this.props.cellSize
    for (let i = 0; i < this.props.xCells; i++) {
      for (let j = 0; j < this.props.zCells; j++) {
        const position = {
          x: xMod + i * this.props.cellSize,
          y: 0,
          z: j * this.props.cellSize
        }
        this.grid.push(position)
      }
    }
  }

  componentDidMount() {
    this.init()
    this.update()
  }

  init() {
    const { innerWidth: width } = window

    const height = width * heightRatio

    this.aspect = width / height
    container = document.getElementById(this.props.id)
    camera = new THREE.OrthographicCamera(
      (frustumSize * this.aspect) / -2,
      (frustumSize * this.aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      1000
    )
    // camera = new THREE.PerspectiveCamera(60, this.aspect, 1, 1000)
    // camera.rotation.set(22.5, 0, 0)
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0.5, 1, 0.1).normalize()
    scene.add(light)

    let colorIndex = 0
    // const blocks = new THREE.Object3D()
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
    geometry.translate(0, 0.5, 0)
    for (let i = 0; i < this.props.blockCount; i++) {
      const color = colors[colorIndex++]
      let parsedHex = color.replace("#", "0x").toLowerCase()
      const c = parseInt(parsedHex, 16)
      const object = new THREE.Mesh(
        geometry,
        new THREE.MeshToonMaterial({ color: c })
      )

      let index = Math.floor(Math.random() * this.grid.length)
      while (taken.hasOwnProperty(index)) {
        index = Math.floor(Math.random() * this.grid.length)
      }
      const position = this.grid[index]
      taken[index] = object
      object.userData = {
        index
      }
      object.position.x = position.x
      object.position.y = position.y
      object.position.z = position.z
      object.rotation.y = THREE.Math.degToRad(45)
      object.scale.x = 2 + Math.random() * 5
      const height = 0.3 + Math.random() * 5
      object.scale.y = height

      object.scale.z = 2 + Math.random() * 5

      const mixer = new THREE.AnimationMixer(object)
      animationMixers.push(mixer)

      scene.add(object)
      blocks.push(object)
      if (colorIndex >= colors.length) {
        colorIndex = 0
      }
    }

    camera.position.set(0, 100, -100)
    camera.lookAt(0, 0, this.props.cameraAngle)

    scene.add(camera)

    renderer = new THREE.WebGLRenderer({ antiAlias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    document.addEventListener("mousemove", this.onMouseMove, false)
    window.addEventListener("resize", this.onWindowResize, false)

    this.onWindowResize()
  }

  onWindowResize() {
    const { innerWidth: width } = window

    const height = width * heightRatio
    this.aspect = width / height
    camera.aspect = this.aspect
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  }

  onMouseMove(event) {
    event.preventDefault()
    let canvasBounds = renderer.context.canvas.getBoundingClientRect()
    mouse.x =
      ((event.clientX - canvasBounds.left) /
        (canvasBounds.right - canvasBounds.left)) *
        2 -
      1
    mouse.y =
      -(
        (event.clientY - canvasBounds.top) /
        (canvasBounds.bottom - canvasBounds.top)
      ) *
        2 +
      1

    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(blocks)
    if (intersects.length) {
      const first = intersects[0].object

      const lastIndex = first.userData.index
      delete taken[lastIndex]

      let index = Math.floor(Math.random() * this.grid.length)
      while (taken.hasOwnProperty(index) && index !== lastIndex) {
        index = Math.floor(Math.random() * this.grid.length)
      }
      const position = this.grid[index]

      first.position.set(position.x, position.y, position.z)
      taken[index] = first
    }
  }

  update() {
    requestAnimationFrame(this.update)
    mixers.forEach(mixer => {
      mixer.update(time.getDelta())
    })

    renderer.render(scene, camera)
  }
  render() {
    return <div id={this.props.id} />
  }
}

export default Blocks

Blocks.propTypes = {
  blockCount: PropTypes.number,
  cameraAngle: PropTypes.number,
  cellSize: PropTypes.number,
  id: PropTypes.string,
  xCells: PropTypes.number,
  zCells: PropTypes.number
}

Blocks.defaultProps = {
  blockCount: 10,
  cameraAngle: 35,
  cellSize: 10,
  id: "blocks-renderer",
  xCells: 10,
  zCells: 10
}
