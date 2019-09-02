import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Base = ({
  exampleProp
}) => {
  return (
    <div className={styles.container}>
      Nothing to see here {exampleProp}
    </div>
  )
}

Base.propTypes = {
  exampleProp: PropTypes.string 
}

export default Base
