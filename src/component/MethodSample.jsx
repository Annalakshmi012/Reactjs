import PropTypes from 'prop-types';

export const MethodSample = (props) => {
    const {handleClick}=props;
  return (
    <div><p>This is functional componet</p>
    <button onClick={handleClick}> Click me!</button></div>
  )
}
MethodSample.prototype={
    handleClick:PropTypes.func.isRequired,
}