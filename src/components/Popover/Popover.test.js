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
import Popover from './Popover'
import 'jsdom-global/register' // Create fake DOM

const COMPONENT = shallow(
  <Popover
    content={'Test content'}
    className="aditionalClass"
  >
    <div className="check-children">Hello world</div>
  </Popover>
)

describe('Test Popover component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

})
