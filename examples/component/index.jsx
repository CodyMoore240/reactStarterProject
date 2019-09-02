import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Example = ({
  exampleProp
}) => {
  return (
    <div className={styles.container}>
      Nothing to see here {exampleProp}
    </div>
  )
}

Example.propTypes = {
  exampleProp: PropTypes.string 
}

export default Example
