/**
 * TEST FILE
 * Please try writing the tests for all component behaviors,
 * manually call the functions within the class, change the properties...
 *
 * @see https://jestjs.io/docs/en/expect
 * @see https://github.com/airbnb/enzyme/tree/master/docs/api
 */
import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

const COMPONENT = shallow(
  <Input defaultValue="test value" className="aditionalClass" />
)

describe('Test Input component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should update correctly', () => {
    COMPONENT.setProps({ block: true })

    expect(COMPONENT.hasClass('input-text--block')).toEqual(true)
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.hasClass('aditionalClass')).toEqual(true)
  })

  it('should return a textarea tag when prop "htmlType" are defined as "textarea"', () => {
    const TEXTAREACOMP = shallow(
      <Input htmlType="textarea" defaultValue="" />
    )

    expect(TEXTAREACOMP.type()).toEqual('textarea')
  })

  var enterPressed = false
  var escPressed = false
  var fakeStateInputValue = 'initial content'

  const INTERACTIVEINPUT = shallow(
    <Input
      value={fakeStateInputValue}
      onChange={(e) => { fakeStateInputValue = e.target.value }}
      onEnter={() => { enterPressed = true }}
      onCancel={() => { escPressed = true }}
    />
  )

  it('should be a controlled component', () => {
    // Simulate user input
    INTERACTIVEINPUT.setProps({ value: 'new value test' })

    expect(INTERACTIVEINPUT.html()).toContain('value="new value test"')
  })

  it('should callback when user press enter key', () => {
    // Simulate that user pressed enter
    INTERACTIVEINPUT.simulate('keyDown', { keyCode: 13 })

    expect(enterPressed).toBeTruthy()

  })

  it('should callback when user press esc key', () => {
    // Simulate that user pressed esc
    INTERACTIVEINPUT.simulate('keyDown', { keyCode: 27 })

    expect(escPressed).toBeTruthy()
  })
})
