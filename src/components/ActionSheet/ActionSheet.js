import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'
import Drawer from '../Drawer/Drawer'
import ButtonGroup from '../ButtonGroup/ButtonGroup'

/**
 * ActionSheet component.
 *
 * @since 0.5.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/ActionSheet
 */
export default function ActionSheet({ content, buttons, className: aditionalClasses, closeOnInnerClick, onRequestClose, ...rest }) {

  const prefix = 'action-sheet'
  //const classes = mapClassList({})

  const handleInnerClick = () => {
    if (closeOnInnerClick === true) onRequestClose()
  }

  return (
    <Drawer
      className={`${prefix} ${aditionalClasses}`}
      {...rest}
      placement="bottom"
      backdrop
      closeByBackdropClick={true}
      onRequestClose={onRequestClose}
      onClick={handleInnerClick}
      content={(
        <React.Fragment>
          {content && <div className="action-sheet__content">{content}</div>}

          {buttons && (
            <ButtonGroup
              vertical={true}
              className="modal__buttons"
            >
              {React.Children.toArray(buttons)}
            </ButtonGroup>
          )}
        </React.Fragment>
      )}
    />
  )
}

ActionSheet.defaultProps = {
  className: '',
  content: null,
  closeOnInnerClick: true
}

ActionSheet.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
  /** Content above the buttons */
  content: PropTypes.node,
  /** Buttons */
  buttons: PropTypes.arrayOf(PropTypes.node),
  /** Function that will be called when the user clicks outside of elment and in the future when pressing the esc key */
  onRequestClose: PropTypes.func.isRequired,
  /** Close when user click inside action sheet */
  closeOnInnerClick: PropTypes.bool,
}
