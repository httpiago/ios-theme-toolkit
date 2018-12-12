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
import Drawer from './Drawer'

const COMPONENT = shallow(
  <Drawer
    visible={true}
    content={<div className="checkContent">Test content</div>}
    onRequestClose={() => {}}
    className="aditionalClass"
  />
)

describe('Test Drawer component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

})
