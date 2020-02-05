import React from "react"
import Modal from "./Modal"
import Button from "../Button/Button"

const preview = {
  title: "Modal",
  category: "Components/Layout",
  component: Modal,
  render: ({ setState, isOpen = false, ...props }) => (
    <React.Fragment>
      <Button onClick={() => setState({ isOpen: !isOpen })}>Open modal</Button>
      <Modal
        {...props}
        isOpen={isOpen}
        onClose={() => setState({ isOpen: false })}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          iaculis erat ipsum, ut euismod orci luctus sit amet. Donec et
          tincidunt dolor, at vehicula mauris. Nullam eleifend tristique arcu ac
          scelerisque. Pellentesque sapien ex, faucibus sit amet nulla eget,
          sollicitudin fringilla arcu. Suspendisse imperdiet urna eu nulla
          tincidunt pretium. Nunc a blandit nulla, ac feugiat nulla. Nulla nisl
          nunc, ornare quis odio gravida, sodales mattis enim. Aenean turpis
          dui, fringilla in arcu a, consectetur placerat sapien. Aenean nec
          augue quis ipsum feugiat maximus. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Suspendisse vitae nisl vehicula ante gravida
          scelerisque faucibus ac enim. Suspendisse imperdiet tellus id
          tristique scelerisque.
        </p>

        <p>
          Ut rutrum ex ante, ut posuere arcu pellentesque vel. Mauris sodales
          urna enim, a sodales lorem fringilla sit amet. Vivamus ultricies non
          mauris ac maximus. Donec sit amet eleifend nibh, eu mollis lorem.
          Praesent tincidunt, mauris pharetra facilisis molestie, urna nisi
          cursus enim, vitae congue ligula eros tempor felis. Sed sit amet felis
          nulla. Quisque dictum aliquet quam vitae venenatis. Donec eu nibh quis
          magna auctor cursus. Duis malesuada arcu mi, facilisis accumsan risus
          iaculis eu. Sed a lacinia mauris.
        </p>
      </Modal>
    </React.Fragment>
  )
}

export default preview
