import PropTypes from "prop-types";

export const Header = (props) => {
  return (
    <div className='student'>
        <table>
            <tr>
                <th>NAME</th>
                <td>{props.name}</td>
            </tr>
            <tr>
             <th>Age</th>
             <td>{props.age}</td>
            </tr>
            <tr>
                <th>Class</th>
                <td>{props.class}</td>
            </tr>
        </table>
    </div>
  )
}
Header.proptypes={
 name:Proptype.string,
 age:Proptype.number,
 class:Proptype.number,
};
Header.defaultProps={
    name:"no name",
    age:0,
    class:0,

};