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
import RangeSlider from './RangeSlider'

const COMPONENT = shallow(
  <RangeSlider value={42} onChange={() => {}} className="aditionalClass" />
)

describe('Test RangeSlider component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should update correctly', () => {
    COMPONENT.setProps({ value: 76 })
    
    expect(COMPONENT.html()).toContain('value="76"')
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.hasClass('aditionalClass')).toBeTruthy()
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

  it('should return a input[type="range"] tag', () => {
    expect(COMPONENT.type()).toEqual('input')

    expect(COMPONENT.html()).toContain('type="range"')
  })

})
