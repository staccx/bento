"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex
}

var React = _interopDefault(require("react"))
var PropTypes = _interopDefault(require("prop-types"))
var styled = require("styled-components")
var styled__default = _interopDefault(styled)
var theme = require("@staccx/theme")

var themePropTypes = {
  style: "style",
  component: "component"
}

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }

    return target
  }

var objectWithoutProperties = function(obj, keys) {
  var target = {}

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }

  return target
}

var Flag = function Flag(_ref) {
  var children = _ref.children,
    className = _ref.className,
    img = _ref.img,
    reverse = _ref.reverse,
    top = _ref.top,
    bottom = _ref.bottom,
    responsive = _ref.responsive,
    flush = _ref.flush,
    large = _ref.large,
    small = _ref.small,
    tiny = _ref.tiny,
    otherProps = objectWithoutProperties(_ref, [
      "children",
      "className",
      "img",
      "reverse",
      "top",
      "bottom",
      "responsive",
      "flush",
      "large",
      "small",
      "tiny"
    ])
  return React.createElement(
    FlagObject,
    _extends(
      {
        className: className,
        reverse: reverse,
        top: top,
        bottom: bottom,
        responsive: responsive,
        flush: flush,
        large: large,
        small: small,
        tiny: tiny
      },
      otherProps
    ),
    React.createElement(FlagImg, null, img),
    React.createElement(FlagBody, null, children)
  )
}

Flag.themeProps = {
  object: {
    name: "FLAG_OBJECT",
    description: "",
    type: themePropTypes.style
  }
}

var FlagImg = styled__default.div.withConfig({
  displayName: "Flag__FlagImg"
})(
  [
    "display:table-cell;width:1px;vertical-align:middle;padding-right:",
    ";> img{max-width:none;}> svg{display:block;}"
  ],
  theme.spacing.medium()
)

var FlagBody = styled__default.div.withConfig({
  displayName: "Flag__FlagBody"
})([
  "display:table-cell;vertical-align:middle;width:auto;&,>:last-child{margin-bottom:0;}"
])

var reverse = styled.css(
  [
    "direction:rtl;> ",
    ",> ",
    "{direction:ltr;}> ",
    "{padding-right:0;padding-left:",
    ";}"
  ],
  FlagImg,
  FlagBody,
  FlagImg,
  theme.spacing.medium()
)

var reverseLarge = styled.css(
  ["> ", "{padding-right:0;padding-left:", ";}"],
  FlagImg,
  theme.spacing.large()
)

var reverseSmall = styled.css(
  ["> ", "{padding-right:0;padding-left:", ";}"],
  FlagImg,
  theme.spacing.small()
)

var reverseTiny = styled.css(
  ["> ", "{padding-right:0;padding-left:", ";}"],
  FlagImg,
  theme.spacing.tiny()
)

var top = styled.css(["> ", ",> ", "{vertical-align:top;}"], FlagImg, FlagBody)

var bottom = styled.css(
  ["> ", ",> ", "{vertical-align:bottom;}"],
  FlagImg,
  FlagBody
)

var flush = styled.css(["> ", "{padding-right:0;padding-left:0;}"], FlagImg)

var large = styled.css(
  ["> ", "{padding-right:", ";}", ";"],
  FlagImg,
  theme.spacing.large(),
  function(props) {
    return props.reverse ? reverseLarge : null
  }
)

var small = styled.css(
  ["> ", "{padding-right:", ";}", ";"],
  FlagImg,
  theme.spacing.small(),
  function(props) {
    return props.reverse ? reverseSmall : null
  }
)

var tiny = styled.css(
  ["> ", "{padding-right:", ";}", ";"],
  FlagImg,
  theme.spacing.tiny(),
  function(props) {
    return props.reverse ? reverseTiny : null
  }
)

var responsive = styled.css(
  [
    "@media screen and (max-width:",
    "px){&,> ",
    ",> ",
    "{display:block;direction:initial;padding:0;}> ",
    "{width:auto;padding-bottom:",
    ";}",
    " > img{max-width:100%;}}"
  ],
  function(props) {
    return props.responsive
  },
  FlagImg,
  FlagBody,
  FlagImg,
  theme.spacing.medium(),
  FlagImg
)

var FlagObject = styled__default.div.withConfig({
  displayName: "Flag__FlagObject"
})(
  [
    "display:table;width:100%;border-spacing:0;",
    ";",
    ";",
    ";",
    ";",
    ";",
    ";",
    ";",
    ";",
    ";"
  ],
  function(props) {
    return props.reverse ? reverse : null
  },
  function(props) {
    return props.top ? top : null
  },
  function(props) {
    return props.bottom ? bottom : null
  },
  function(props) {
    return props.flush ? flush : null
  },
  function(props) {
    return props.large ? large : null
  },
  function(props) {
    return props.small ? small : null
  },
  function(props) {
    return props.tiny ? tiny : null
  },
  function(props) {
    return props.responsive > 0 ? responsive : null
  },
  theme.themify(Flag.themeProps.object)
)

Flag.defaultProps = {
  className: "",
  reverse: null,
  top: null,
  bottom: null,
  responsive: 0,
  flush: null,
  large: null,
  small: null,
  tiny: null
}

Flag.propTypes = {
  children: theme.themeProps.children.isRequired,
  img: theme.themeProps.children.isRequired,
  className: PropTypes.string,
  reverse: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  responsive: PropTypes.number,
  flush: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool
}

var Warning = function Warning(_ref) {
  var className = _ref.className
  return React.createElement(
    "svg",
    {
      className: className,
      viewBox: "0 0 32 32",
      width: "24",
      height: "24",
      fill: "currentColor"
    },
    React.createElement("path", {
      d:
        "M16 3.22l-.88 1.5-12 20.78-.84 1.5h27.44l-.84-1.5-12-20.78zm0 4L26.25 25H5.75zM15 14v6h2v-6zm0 7v2h2v-2z"
    })
  )
}

Warning.propTypes = { className: PropTypes.string }

var Success = function Success(_ref) {
  var className = _ref.className
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      width: "24",
      height: "24",
      className: className,
      fill: "currentColor"
    },
    React.createElement("path", {
      d:
        "M16 3C8.83 3 3 8.83 3 16s5.83 13 13 13 13-5.83 13-13S23.17 3 16 3zm0 2c6.09 0 11 4.91 11 11s-4.91 11-11 11S5 22.09 5 16 9.91 5 16 5zm6.28 6.28L15 18.56l-4.28-4.28-1.44 1.44 5 5 .72.69.72-.7 8-8z"
    })
  )
}

Success.propTypes = { className: PropTypes.string }

var Info = function Info(_ref) {
  var className = _ref.className
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      width: "24",
      height: "24",
      className: className,
      fill: "currentColor"
    },
    React.createElement("path", {
      d:
        "M16 3C8.83 3 3 8.83 3 16s5.83 13 13 13 13-5.83 13-13S23.17 3 16 3zm0 2c6.09 0 11 4.91 11 11s-4.91 11-11 11S5 22.09 5 16 9.91 5 16 5zm-1 5v2h2v-2zm0 4v8h2v-8z"
    })
  )
}

Info.propTypes = { className: PropTypes.string }

var tProps = {
  alert: {
    name: "ALERT",
    description: "Alert style",
    type: themePropTypes.style
  },
  componentAlertInfo: {
    name: "COMPONENT_ALERT_INFO",
    description: "Theme component for info alert",
    type: themePropTypes.component
  },
  componentAlertWarning: {
    name: "COMPONENT_ALERT_WARNING",
    description: "Theme component for warning alert",
    type: themePropTypes.component
  },
  componentAlertSuccess: {
    name: "COMPONENT_ALERT_SUCCESS",
    description: "Theme component for success alert",
    type: themePropTypes.component
  },
  alertInfo: {
    name: "ALERT_INFO",
    description: "Styles for info alert",
    type: themePropTypes.style
  },
  alertWarning: {
    name: "ALERT_WARNING",
    description: "Styles for warning alert",
    type: themePropTypes.style
  },
  alertSuccess: {
    name: "ALERT_SUCCESS",
    description: "Styles for success alert",
    type: themePropTypes.style
  }
}

var Icon = function Icon(_ref) {
  var type = _ref.type,
    props = _ref.props

  switch (type) {
    case "info":
      return React.createElement(
        theme.ThemeComponent,
        _extends(
          {
            tagName: tProps.componentAlertInfo,
            fallback: Info
          },
          props
        )
      )
    case "warning":
      return React.createElement(
        theme.ThemeComponent,
        _extends(
          {
            tagName: tProps.componentAlertWarning,
            fallback: Warning
          },
          props
        )
      )
    case "success":
      return React.createElement(
        theme.ThemeComponent,
        _extends(
          {
            tagName: tProps.componentAlertSuccess,
            fallback: Success
          },
          props
        )
      )
    default:
      return null
  }
}

var colors = function colors(_ref2) {
  var type = _ref2.type

  switch (type) {
    case "warning":
      return styled.css(
        ["background-color:", ";color:", ";", ";"],
        theme.color("warning"),
        theme.color("white"),
        theme.themify(tProps.alertWarning)
      )
    case "success":
      return styled.css(
        ["background-color:", ";color:", ";", ";"],
        theme.color("positive"),
        theme.color("white"),
        theme.themify(tProps.alertSuccess)
      )
    case "info":
    default:
      return styled.css(
        ["background-color:", ";color:", ";", ";"],
        theme.color("line"),
        theme.color("text"),
        theme.themify(tProps.alertInfo)
      )
  }
}

var Alert = function Alert(_ref3) {
  var children = _ref3.children,
    type = _ref3.type,
    restProps = objectWithoutProperties(_ref3, ["children", "type"])

  return React.createElement(
    AlertElement,
    _extends({ type: type, role: "alert" }, restProps),
    React.createElement(
      Flag,
      { small: true, img: React.createElement(Icon, { type: type }) },
      children
    )
  )
}

var AlertElement = styled__default.div.withConfig({
  displayName: "Alert__AlertElement"
})(
  ["width:100%;border-radius:", ";padding:", ";", ";", ";"],
  theme.borderRadius,
  theme.spacing.small,
  colors,
  theme.themify(tProps.alert)
)

Alert.propTypes = {
  children: theme.themeProps.children.isRequired,
  type: PropTypes.oneOf(["warning", "success", "info"])
}

Alert.defaultProps = {
  type: "info"
}

Alert.themeProps = tProps

var preview = {
  title: "Alert",
  category: "component",
  component: Alert,
  render: function render(props) {
    return React.createElement(
      React.Fragment,
      null,
      "# Alert type warning",
      React.createElement(Alert, { type: "warning" }, "This is a warning"),
      "# Alert type success",
      React.createElement(
        Alert,
        { type: "success" },
        "This is a Success-message"
      ),
      "# Alert type info",
      React.createElement(Alert, { type: "info" }, "This is an info-box!")
    )
  }
}

var tinycolor = require("tinycolor2")

var tProps$1 = {
  button: {
    name: "Button",
    description: "Button styles",
    type: themePropTypes.style
  }
}

var ButtonComp = styled__default.button.withConfig({
  displayName: "Button__ButtonComp"
})(
  [
    "background-color:",
    ";color:",
    ";border-width:0;border-radius:",
    ";padding:",
    " ",
    ";cursor:pointer;min-height:",
    ";text-decoration:none;text-align:center;display:inline-block;font-size:",
    ";font-family:",
    ";line-height:32px;font-weight:",
    ";white-space:nowrap;justify-content:center;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transition:background 0.2s ease;&:hover,&:focus{outline:none;background-color:",
    ";color:",
    ";}",
    ";"
  ],
  theme.color.primary,
  function(p) {
    return tinycolor
      .mostReadable(theme.color.primary()(p), ["#fff"], {
        includeFallbackColors: true,
        level: "AA",
        size: "large"
      })
      .toString()
  },
  theme.borderRadius,
  theme.spacing.tiny,
  theme.spacing.medium,
  theme.targetSize.normal,
  theme.font.base,
  theme.fontFamily.body,
  theme.fontWeight.bold,
  function(p) {
    return tinycolor(theme.color.primary()(p))
      .darken(5)
      .toString()
  },
  function(p) {
    return tinycolor
      .mostReadable(tinycolor(theme.color.primary()(p)).darken(5), ["#fff"], {
        includeFallbackColors: true,
        level: "AA",
        size: "large"
      })
      .toString()
  },
  theme.themify(tProps$1.button.name)
)
/**
 * Button component. Use to click stuff
 */
var Button = function Button(props) {
  return React.createElement(ButtonComp, props)
}

var defaultProps = {
  onClick: null,
  to: "#",
  className: ""
}

var propTypes = {
  /**
   * The children of the lamb
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
  test: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes
Button.themeProps = tProps$1

var preview$2 = {
  title: "Button",
  category: "component",
  tags: ["component", "clickable", "button"],
  component: Button,
  render: function render(props) {
    return React.createElement(Button, props, "Cool Button")
  }
}

var DefaultLoading = function DefaultLoading(_ref) {
  var className = _ref.className,
    variant = _ref.variant,
    rest = objectWithoutProperties(_ref, ["className", "variant"])
  return React.createElement(
    SignalSpinner,
    _extends({ className: className, variant: variant }, rest)
  )
}

var themeProps$1 = {
  component: {
    name: "COMPONENT_LOADING",
    description: "Component for loading",
    type: themePropTypes.component
  },
  loading: {
    name: "LOADING",
    description: "Loading style",
    type: themePropTypes.style
  }
}

var Loading = function Loading(_ref2) {
  var className = _ref2.className,
    variant = _ref2.variant,
    rest = objectWithoutProperties(_ref2, ["className", "variant"])
  return React.createElement(
    theme.ThemeComponent,
    _extends(
      {
        tagName: themeProps$1.component.name,
        fallback: DefaultLoading
      },
      rest
    )
  )
}

var spinnerBubble1 = styled.keyframes(
  [
    "0%{color:",
    ";transform:translate(-50%,-50%) scale(1);opacity:1;}100%{color:",
    ";transform:translate(-50%,-50%) scale(4.8);opacity:0;}"
  ],
  theme.color.primary,
  theme.color.secondary
)

var spinnerBubble2 = styled.keyframes(
  [
    "0%{color:",
    ";transform:translate(-50%,-50%) scale(1);opacity:1;}100%{color:",
    ";transform:translate(-50%,-50%) scale(4.8);opacity:0;}"
  ],
  theme.color.secondary,
  theme.color.primary
)

var SignalSpinner = styled__default.div.withConfig({
  displayName: "Loading__SignalSpinner"
})(
  [
    "position:relative;display:block;width:",
    ";height:",
    ";color:",
    ';&::before,&::after{content:"";position:absolute;top:50%;left:50%;width:10px;height:10px;opacity:0;box-shadow:0 0 0 1px;border-radius:50%;transform:translate(-50%,-50%) scale(1);transform-origin:center;}&::before{animation:',
    " 2.6s ease-out 1.3s infinite;}&::after{animation:",
    " 2.6s ease-out 0s infinite;}",
    ";"
  ],
  theme.spacing.large,
  theme.spacing.large,
  theme.color.primary,
  spinnerBubble1,
  spinnerBubble2,
  theme.themify(themeProps$1.loading.name)
)

Loading.propTypes = { className: PropTypes.string, variant: PropTypes.string }
Loading.themeProps = themeProps$1

var preview$4 = {
  title: "Loading",
  category: "component",
  tags: ["visual", "animated"],
  component: Loading,
  render: function render(props) {
    return React.createElement(Loading, props)
  }
}

var Heading = function Heading(_ref) {
  var level = _ref.level,
    children = _ref.children,
    className = _ref.className,
    restProps = objectWithoutProperties(_ref, [
      "level",
      "children",
      "className"
    ])

  switch (level) {
    case "h1":
    case "H1":
    case "1":
    case 1:
      return React.createElement(
        HeadingH1,
        _extends({ level: level, className: className }, restProps),
        children
      )

    case "h2":
    case "H2":
    case "2":
    case 2:
      return React.createElement(
        HeadingH2,
        _extends({ level: level, className: className }, restProps),
        children
      )

    case "h3":
    case "H3":
    case "3":
    case 3:
      return React.createElement(
        HeadingH3,
        _extends({ level: level, className: className }, restProps),
        children
      )

    case "h4":
    case "H4":
    case "4":
    case 4:
      return React.createElement(
        HeadingH4,
        _extends({ level: level, className: className }, restProps),
        children
      )

    case "h5":
    case "H5":
    case "5":
    case 5:
      return React.createElement(
        HeadingH5,
        _extends({ level: level, className: className }, restProps),
        children
      )

    case "h6":
    case "H6":
    case "6":
    case 6:
      return React.createElement(
        HeadingH6,
        _extends({ level: level, className: className }, restProps),
        children
      )

    default:
      return React.createElement(
        HeadingH1,
        _extends({ level: level, className: className }, restProps),
        children
      ) // 👈 we always have to return something
  }
}

Heading.themeProps = {
  heading: {
    name: "heading",
    description: "",
    type: themePropTypes.style
  }
}
var HeadingsStyle = styled.css(
  ["font-family:", ";", ";"],
  theme.fontFamily.heading,
  theme.themify(Heading.themeProps.heading)
)

var HeadingH1 = styled__default.h1.withConfig({
  displayName: "Heading__HeadingH1"
})(["font-size:", ";", ";"], theme.font.h1, HeadingsStyle)

var HeadingH2 = styled__default.h2.withConfig({
  displayName: "Heading__HeadingH2"
})(["font-size:", ";", ";"], theme.font.h2, HeadingsStyle)

var HeadingH3 = styled__default.h3.withConfig({
  displayName: "Heading__HeadingH3"
})(["font-size:", ";", ";"], theme.font.h3, HeadingsStyle)

var HeadingH4 = styled__default.h4.withConfig({
  displayName: "Heading__HeadingH4"
})(["font-size:", ";", ";"], theme.font.h4, HeadingsStyle)

var HeadingH5 = styled__default.h5.withConfig({
  displayName: "Heading__HeadingH5"
})(["font-size:", ";", ";"], theme.font.h5, HeadingsStyle)

var HeadingH6 = styled__default.h6.withConfig({
  displayName: "Heading__HeadingH6"
})(["font-size:", ";", ";"], theme.font.h6, HeadingsStyle)

Heading.defaultProps = {
  level: "h1",
  className: null
}

Heading.propTypes = {
  children: theme.themeProps.children.isRequired,
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
}

var preview$6 = {
  title: "Heading",
  category: "component",
  tags: ["typography"],
  component: Heading,
  render: function render(props) {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Heading, props, "This is a heading"),
      React.createElement(
        Heading,
        _extends({}, props, { level: 2 }),
        "This is a heading"
      ),
      React.createElement(
        Heading,
        _extends({}, props, { level: 3 }),
        "This is a heading"
      ),
      React.createElement(
        Heading,
        _extends({}, props, { level: 4 }),
        "This is a heading"
      ),
      React.createElement(
        Heading,
        _extends({}, props, { level: 5 }),
        "This is a heading"
      ),
      React.createElement(
        Heading,
        _extends({}, props, { level: 6 }),
        "This is a heading"
      )
    )
  }
}

exports.Alert = preview
exports.Button = preview$2
exports.Loading = preview$4
exports.Heading = preview$6
