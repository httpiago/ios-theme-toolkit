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
import List from './List'

const COMPONENT = shallow(
  <List className="aditionalClass">
    <List.Item>Item 1</List.Item>
    <List.Item>Item 2</List.Item>
    <List.Item>Item 3</List.Item>
  </List>
)

describe('Test List component', () => {
  it('should render correctly based on last snapshot', () => {
    expect(COMPONENT).toMatchSnapshot()
  })

  it('should has aditional classes', () => {
    expect(COMPONENT.hasClass('aditionalClass')).toBeTruthy()
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

  it('should return a list wrapper element', () => {
    expect(['ul', 'ol']).toContain(COMPONENT.type())
  })
  
  it('should render buttons as children correctly', () => {
    expect(COMPONENT.children()).toHaveLength(3)
  })

})

const ITEM = shallow(
  <List.Item
    media={'media content'}
    after={'after badge'}
    className="itemCustomClass"
  >
    <span className="check-content">Item</span>
  </List.Item>
)

describe('Test List.Item component', () => {
  it('should return a list wrapper element', () => {
    expect(ITEM.type()).toEqual('li')
  })

  it('should has aditional classes', () => {
    expect(ITEM.hasClass('itemCustomClass')).toBeTruthy()
  })

  it('should return a link when "href" prop are defined', () => {
    const LINKITEM = shallow(
      <List.Item href="https://www.iagobruno.com/">Item 1</List.Item>
    ).children().first()
    
    expect(LINKITEM.type()).toEqual('a')
    
    expect(LINKITEM.html()).toContain('href="https://www.iagobruno.com/"')
  })

  it('should pass aditional props to html element', () => {
    COMPONENT.setProps({ 'data-custom-attr': 'yes' })

    expect(COMPONENT.html()).toContain('data-custom-attr="yes"')
  })

  it('should render "media" prop if defined', () => {
    expect(ITEM.exists('.list__item__media')).toBeTruthy()
    
    expect(ITEM.find('.list__item__media').text()).toEqual('media content')
    
    // Remove "media" prop and check if the comp update correctly
    ITEM.setProps({ media: undefined })
    
    expect(ITEM.exists('.list__item__media')).toBeFalsy()
  })

  it('should render "after" prop if defined', () => {
    expect(ITEM.exists('.list__item__after')).toBeTruthy()
    
    expect(ITEM.find('.list__item__after').text()).toEqual('after badge')
    
    // Remove "after" prop and check if the comp update correctly
    ITEM.setProps({ after: undefined })
    
    expect(ITEM.exists('.list__item__after')).toBeFalsy()
  })

  it('should render children correctly', () => {
    expect(ITEM.exists('.check-content')).toBeTruthy()
  })

})
