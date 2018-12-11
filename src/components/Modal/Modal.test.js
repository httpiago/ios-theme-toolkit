/**
 * TEST FILE
 * Please try writing the tests for all component behaviors,
 * manually call the functions within the class, change the properties...
 *
 * @see https://jestjs.io/docs/en/expect
 * @see https://github.com/airbnb/enzyme/tree/master/docs/api
 */
import React from 'react'
import { mount } from 'enzyme'
import Modal from './Modal'
import Button from '../Button/Button'

class ModalTest extends React.Component {
  state = { modalVisibility: false }
  
  openModal = () => {
    this.setState({ modalVisibility: true })
  }
  closeModal = () => {
    this.setState({ modalVisibility: false })
  }
  
  render() {
    return (
      <div>
        <Modal
          visible={this.state.modalVisibility}
          onRequestClose={() => {}}
          content={<div className="check-modal" />}
        />
        
        <Button id="bttn-to-open-modal">Open modal</Button>
      </div>
    )
  }
}

import 'jsdom-global/register' // Create fake DOM
const COMPONENT = mount(
  <ModalTest />
)

afterAll(() => {
  COMPONENT.unmount()
  // global.window.destroy()
})

// !Fazer uma forma fazer o jsdom funcionar
describe.skip('Test Modal component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should appear on screen on "visible" changed to true', () => {
    COMPONENT.find('#bttn-to-open-modal').first().simulate('click')
    
    console.log('modal>', global.document)
  })

})
