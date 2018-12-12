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
import Tooltip from './Tooltip'

const COMPONENT = shallow(
  <Tooltip text={'Hello world!'}>
    <div className="check-children">Hover me</div>
  </Tooltip>
)

describe('Test Tooltip component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

})
