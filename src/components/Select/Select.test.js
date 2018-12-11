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
import Select from './Select'

const COMPONENT = shallow(
  <Select value="" onChange={() => {}} className="aditionalClass">
    <option value="one">1</option>
    <option value="two">2</option>
    <option value="three">3</option>
  </Select>
)

describe('Test Select component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should update correctly', () => {
    COMPONENT.setProps({ color: 'red' })

    expect(COMPONENT.find('select').hasClass('button--red')).toBeTruthy()
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.hasClass('aditionalClass')).toBeTruthy()
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

  it('should return a select tag', () => {
    expect(COMPONENT.exists('select')).toBeTruthy()
  })

  it('should render options as children correctly', () => {
    expect(COMPONENT.find('select').children()).toHaveLength(3)

    // expect(COMPONENT.children().first().type()).toEqual('button')
  })

})
