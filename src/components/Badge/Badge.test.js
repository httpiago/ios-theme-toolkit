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
import Badge from './Badge'

const COMPONENT = shallow(
  <Badge className="aditionalClass">NEW</Badge>
)

describe('Test Badge component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should update correctly', () => {
    COMPONENT.setProps({ color: 'yellow' })

    expect(COMPONENT.hasClass('badge--yellow')).toBeTruthy()
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.hasClass('aditionalClass')).toBeTruthy()
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

  it('should not render children when "size" prop are defined as "tiny"', () => {
    COMPONENT.setProps({ size: 'tiny' })

    expect(COMPONENT.text()).toEqual('')
  })

})
