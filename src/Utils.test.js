import * as Utils from './Utils'

describe('Test mapClassList() function', () => {
  const result = Utils.mapClassList({
    'class-true-value': true,
    'class-false-value': false,
    'class-default-value': 'default',
    'class-number-value': 20,
    'class-undefined-prop': undefined
  })

  it('should return a string', () => {
    expect(typeof result).toBe('string')
  })

  it('should return classes with true value', () => {
    expect(result).toContain('class-true-value')
  })

  it('should not return classes with false value', () => {
    expect(result).not.toContain('class-false-value')
  })

  it('should not return classes with "default" value', () => {
    expect(result).not.toContain('class-default-value')
  })

  it('should not return classes with number value', () => {
    expect(result).not.toContain('class-number-value')
  })

  it('should not return classes with undefined value', () => {
    expect(result).not.toContain('class-undefined-value')
  })
})

describe('Test canUseDOM() function', () => {
  it('should return false in node environment', () => {
    const result = Utils.canUseDOM()

    expect(result).toBeFalsy()
  })

  it('should return true in browser environment', () => {
    // Define a fake window for test
    global.window = require('ssr-window').window

    const result = Utils.canUseDOM()

    expect(result).toBeTruthy()
  })

})
