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
import ProgressBar from './ProgressBar'

const COMPONENT = shallow(
  <ProgressBar value={47} className="aditionalClass" />
)

describe('Test ProgressBar component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should update correctly', () => {
    COMPONENT.setProps({ color: 'red' })
    
    expect(COMPONENT.hasClass('progressbar--red')).toBeTruthy()
    
    // Check if percentage level change correctly
    COMPONENT.setProps({ value: 64 })
    
    expect(COMPONENT.children('span').html()).toContain('width:64%')
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.hasClass('aditionalClass')).toBeTruthy()
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

})
