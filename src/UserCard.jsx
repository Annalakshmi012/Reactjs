import PropTypes from 'prop-types';
const userDta=[
    {
name:"james", 
city:"Landon",
des:"Backend Developer",
skills:["UI&UX","HTML","CSS","REACT","MONGODB","JAVA","SPRING"],
online:false,
profile:"img/download.jfif"},
{
    name:"Mark", 
    city:"Karur",
    des:"Frontend Developer",
    skills:["UI&UX","HTML","CSS","REACT","ANGULAR"],
    online:true,
    profile:"img/download (2).jfif"},
    {
        name:"Arya", 
        city:"chennai",
        des:"Devops Developer",
        skills:["UI&UX","HTML","CSS","REACT","ANGULAR"],
        online:false,
        profile:"img/download (1).jfif"},
];
function User(props){
    return <div className=" card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile}className="img"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.des}</p>
        <div className="button"><button className="primary">Message</button>
        <button className="primary outLine">Following</button></div>
        <div className="skills">
            <h6>skills</h6>
        <ul>
            {props.skills.map((skills,index)=>(<li key={index}> {skills}</li>))}
        </ul>
        </div>
    </div>;

}

export const UserCard = () => {
  return (
    <>{userDta.map((user,index)=>(<User key={index} name={user.name} city={user.city} des={user.des} online={user.online}
    profile={user.profile} skills={user.skills}/>))}
    </>
    // <User name="james" city="Landon" des="Backend Developer" skills={["UI&UX","HTML","CSS","REACT","ANGULAR"]} online={false}
    // profile="img/download (2).jfif"/>
  )
}
User.protoTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    des:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
}
