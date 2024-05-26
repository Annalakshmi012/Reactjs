import PropTypes from "prop-types";

export const OneofSample = (props) => {
  const {color} = props;
  return (
    <div style={{background:color, padding:"40px",color:"white"}}>Hi  it was a {color} color.</div>
  )
}
OneofSample.propTypes={
  color:PropTypes.oneOf(["red","green","blue"]).isRequired
}