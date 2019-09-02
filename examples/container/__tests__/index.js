import React from 'react'
import { shallow } from 'enzyme'
import shallowWithStore from 'shallowWithStore'
import { createMockStore } from 'redux-test-utils'
import ConnectedComponent, { Component } from '..'

//mocks
const exampleMock = jest.fn()

//props
let props = {}

//create the wrapper
let wrapper = shallow(<Component {...props}/>)

//spies
let exampleSpy

beforeEach(() => {
  wrapper.setProps(props)
  exampleSpy = jest.spyOn(wrapper.instance(), `exampleMethod`)
})

afterEach(() => {
  exampleMock.mockReset()
})

describe(`Example`, () => {
  it(`renders correctly`, () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe(`When example method is called`, () => {
    it(`calls the correct function`, () => {
      wrapper.instance().exampleMethod()
      expect(exampleSpy).toHaveBeenCalled()
    })
  })

  describe(`connected`, () => {
    it(`should render correctly`, () => {
      const store = createMockStore(props)
      const connectedComponent = shallowWithStore(<ConnectedComponent />, store)
      expect(connectedComponent).toMatchSnapshot()
    })
  })
})