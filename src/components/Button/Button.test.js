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
import Button from './Button'

const COMPONENT = shallow(
  <Button color="red" className="aditionalClass">
    <div>button content test</div>
  </Button>
)

describe('Test Button component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should update correctly', () => {
    COMPONENT.setProps({ color: "green" })

    expect(COMPONENT.hasClass('button--green')).toEqual(true)
  })

  it('should renders children correctly', () => {
    expect(COMPONENT.find('div').text()).toContain('button content test')
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.hasClass('aditionalClass')).toEqual(true)
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

  it('should return a link ("a" tag) when prop "href" are defined', () => {
    const LINKCOMP = shallow(
      <Button href="https://www.iagobruno.com" />
    )

    expect(LINKCOMP.type()).toEqual('a')
    expect(LINKCOMP.prop('href')).toEqual('https://www.iagobruno.com')
  })

  it('should callback when "onClick" are defined', () => {
    var clicked = false
    const CLICKCOMP = shallow(
      <Button onClick={() => { clicked = true }} />
    )

    CLICKCOMP.simulate('click')

    expect(clicked).toBeTruthy()
  })
})
