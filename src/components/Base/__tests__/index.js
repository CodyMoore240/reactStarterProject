import React from 'react'
import { shallow } from 'enzyme'
import Component from '..'

let props = {}
let wrapper = shallow(<Component {...props} />)

beforeEach(() => {
  wrapper.setProps(props)
})

describe(`Component`, () => {
  it(`renders correctly`, () => {
    expect(wrapper).toMatchSnapshot()
  })
})
