import React from "react"

const Square = (props) => {
//  destructuring props
// const { value } = props is the same as props.value 
  const { value } = props

  return (
    <>
      <div className="square">{value}</div>
    </>
  )
}
export default Square
