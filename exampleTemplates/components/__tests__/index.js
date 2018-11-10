import React from 'react'

import { shallow } from 'enzyme'
import Example from '..'

describe('Example', () => {
  //define mock functions
  const mockExample = jest.fn()

  //define default props
  let props = {}

  //create a shallow wrapper than can be reused
  let wrapper
  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<Example {...props}/>)
  })

  //reset the mock functions after each test
  afterEach(() => {
    mockExample.mockReset()
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  }),
  it('renders correctly with props', () => {
    wrapper.setProps({ 
      exampleProp: true
    })
    expect(wrapper).toMatchSnapshot()
  }),
  describe('when handleExample method is called', () => {
    it('calls the correct function', () => {
      expect(wrapper.instance().handleExample()).toEqual(undefined)
      expect(mockExample).toHaveBeenCalled()
    })
  }),
  describe('when user clicks', () => {
    it('calls the correct function', () => {
      const buttonElement = wrapper.find('.button')
      buttonElement.simulate('click')
      expect(mockExample).toHaveBeenCalledTimes(1)
      expect(mockExample).toHaveBeenCalledWith()
    })
  })
})