import Proptype from 'prop-types'

export const ChildCom = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
ChildCom.prototype={
  children:Proptype.array,
} 