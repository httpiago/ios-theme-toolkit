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
import ActionSheet from './ActionSheet'

const COMPONENT = shallow(
  <ActionSheet
    className="aditionalClass"
    visible={true}
    onRequestClose={() => {}}
  />
)

describe('Test ActionSheet component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  // it('should update correctly', () => {
  //   COMPONENT.setProps({ color: "green" })

  //   expect(COMPONENT.hasClass('button--green')).toBeTruthy()
  // })

  // it('should renders children correctly', () => {
  //   expect(COMPONENT.text()).toContain('content test')
  // })

  // it('should has aditional classes', () => {
  //   expect(COMPONENT.hasClass('aditionalClass')).toBeTruthy()
  // })

  // it('should pass aditional props to html element', () => {
  //   COMPONENT.setProps({ 'data-custom-attr': 'yes' })

  //   expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  // })

})
