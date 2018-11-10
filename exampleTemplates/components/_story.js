import React from 'react'
import { storiesOf } from '@storybook/react';
import Example from './'

const styles = {
  display: `block`
}

storiesOf('Example', module)
.add('default', () => (
  <div style={styles}>
    <Example 
      example={true}
    />
  </div>
))