import PropTypes from "prop-types";

export const ArraySample = (props) => {
    const{item}=props;
  return (
    <div><h2>list items</h2>
    <ul>
        {item.map((item)=>
        (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
        </div>
  )
}
ArraySample.propTypes={
    item:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,

        })
    ).isRequired,
}