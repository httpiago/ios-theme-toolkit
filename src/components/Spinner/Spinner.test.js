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
import Spinner from './Spinner'

const COMPONENT = shallow(
  <Spinner className="aditionalClass" />
)

describe('Test Spinner component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should update correctly', () => {
    COMPONENT.setProps({ size: 'big' })
    
    expect(COMPONENT.hasClass('preloader--big')).toBeTruthy()
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.hasClass('aditionalClass')).toBeTruthy()
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

  it('should can be a custom size', () => {
    COMPONENT.setProps({ size: 250 })

    expect(COMPONENT.html()).toContain('height:250px')
    expect(COMPONENT.html()).toContain('width:250px')
  })

})
