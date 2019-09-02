import React from 'react'
import { shallow } from 'enzyme'
import shallowWithStore from 'shallowWithStore'
import { createMockStore } from 'redux-test-utils'
import ConnectedApp, { App } from '..'


//props
let props = {}

//create the wrapper
let wrapper = shallow(<App {...props}/>)

beforeEach(() => {
  wrapper.setProps(props)
})

describe(`App`, () => {
  it(`renders correctly`, () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe(`connected`, () => {
    it(`should render correctly`, () => {
      const store = createMockStore(props)
      const connectedComponent = shallowWithStore(<ConnectedApp />, store)
      expect(connectedComponent).toMatchSnapshot()
    })
  })
})