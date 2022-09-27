import React from 'react'

const Card = ({children, className}) => {
    const classes = ' rounded-md my-4 box-border' + className;
  return (
    <div className={classes}>{children}</div>
  )
}

export default Card;