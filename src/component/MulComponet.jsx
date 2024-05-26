import PropTypes from "prop-types";

export const MulComponet = (props) => {
  return (
    <div>The value is:{props.value}</div>
  )
}
MulComponet.protoTypes ={
  value : PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.bool]).isRequired

}