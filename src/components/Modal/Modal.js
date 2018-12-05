import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Portal from '../Portal/Portal'

/**
 * Modal component.
 *
 * @since 0.3.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Modal
 *
 * @todo Add ability to close by pressing the ESC key when the react hooks is added
 */
export default function Modal({ visible, type, content, title, footer, backdrop, buttons, verticalButtons, className: aditionalClasses, onRequestClose, onOpen, onClose, ...rest }) {

  const prefix = 'modal'
  const classes = mapClassList({
    [`${prefix}--${type}`]: type,
  })

  if (!visible) return null

  return (
    <Portal>
      <div className="modal__container">
        {backdrop && (<div className="modal__backdrop" onClick={() => onRequestClose()} />)}

        <div
          className={`${prefix} ${classes} ${aditionalClasses}`}
          {...rest}
        >
          {
            (title !== '')
              ? <div className="modal__title">{title}</div>
              : null
          }

          <div className="modal__content">{content}</div>

          <ButtonGroup
            direction={verticalButtons ? 'vertical' : 'horizontal'}
            className="modal__buttons"
          >
            {buttons}
          </ButtonGroup>
        </div>
      </div>
    </Portal>
  )
}

Modal.defaultProps = {
  className: '',
  type: 'default',
  buttons: [],
  backdrop: true,
  title: '',
  verticalButtons: false,
}

Modal.propTypes = {
  /** The visibility state of modal */
  visible: PropTypes.bool.isRequired,
  /** Aditional classes. */
  className: PropTypes.string,
  /** Modal type */
  type: PropTypes.oneOf(['default', 'alert', 'confirm', 'prompt']),
  /** Modal content (anything that can be rendered by React) */
  content: PropTypes.node.isRequired,
  /** Modal title */
  title: PropTypes.string,
  /** Array of buttons (only accepts "Button" component of this package) */
  buttons: PropTypes.array,
  /** Show a transparent background behind the modal */
  backdrop: PropTypes.bool,
  /** Function that will be called when the user clicks outside of modal and in the future when pressing the esc key */
  onRequestClose: PropTypes.func.isRequired,
  /** Buttons on vertical */
  verticalButtons: PropTypes.bool,
}


/*

<Modal
  type="default"
  title="Hello world!"
  footer={(<div/>)}
  content={(<div/>)}
  visible={true}
  closable={true}
  onClose={() => {}}
  backdrop={true}
  closeByBackdropClick={true}
  width={400}
  keyboard={true}
  className=""
  animation={[ "scale", "none", "opacity" ]}
>

 */
