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
import Card from './Card'

const COMPONENT = shallow(
  <Card
    header={<div className="check-header" />}
    footer={<div className="check-footer" />}
    className="aditionalClass"
  >
    Card content test
  </Card>
)

describe('Test Card component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should update correctly', () => {
    COMPONENT.setProps({ shadow: true })

    expect(COMPONENT.hasClass('card--shadow')).toBeTruthy()
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.hasClass('aditionalClass')).toBeTruthy()
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

  it('should render children correctly', () => {
    expect(COMPONENT.find('.card__content').text()).toEqual('Card content test')
  })
  
  it('should render header correctly', () => {
    expect(COMPONENT.exists('.check-header')).toBeTruthy()
  })
  
  it('should render footer correctly', () => {
    expect(COMPONENT.exists('.check-footer')).toBeTruthy()
  })

})
