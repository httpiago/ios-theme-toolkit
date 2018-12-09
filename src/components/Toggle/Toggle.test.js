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
import Toggle from './Toggle'

const COMPONENT = shallow(
  <Toggle checked={false} onChange={() => {}} className="aditionalClass" />
)

describe('Test Toggle component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should update correctly', () => {
    COMPONENT.setProps({ checked: true })
    
    expect(COMPONENT.html()).toContain('checked')
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.find('.toggle').hasClass('aditionalClass')).toBeTruthy()
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

  it('should return a input[type="checkbox"] tag', () => {
    expect(COMPONENT.find('.toggle').type()).toEqual('input')

    expect(COMPONENT.find('.toggle').html()).toContain('type="checkbox"')
  })

})
