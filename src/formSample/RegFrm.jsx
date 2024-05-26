import {useState} from 'react'
import "./RegFrm.css"

export const RegFrm = () => {
  const [user,setUser] =useState({
    name:"ram",
    age:13,
  gender:"Female",
isMarried:true,
country:"India",
bio:"Write about you something"});
function changeHandler(e){
  const name=e.target.name;
  // console.log(name);
  const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
  setUser({...user,[name]:value});
  

}
  return (
    <><table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{user.age}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{user.gender}</td>
        </tr>
        <tr>
          <td>Marital Status</td>
          <td>{user.isMarried?"Married":"Not Married"}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{user.country}</td>
        </tr>
        <tr>
          <td>Bio</td>
          <td>{user.bio}</td>
        </tr>
      </tbody>
      </table>
      <form action="">
        <input type="text" placeholder='Full Name' value={user.name} onChange={changeHandler} name="name"/>
        <input type="number" placeholder='Age' value={user.age} onChange={changeHandler}  name="age"/>
        <div className='gender'>
          <label htmlFor="male">
            <input type="radio" name='gender' id="male" onChange={changeHandler}  checked={user.gender=="Male"} value="Male" />
          Male
          </label>
          <label htmlFor="female">
            <input type="radio" name='gender' id="female"  onChange={changeHandler} checked={user.gender=="Female"} value="Female" />
          Female
          </label>
        </div>
        <label htmlFor="isMarried" >
          <input type="checkbox" id='isMarried' name='isMarried' onChange={changeHandler} checked={user.isMarried}/>
          Is Married
        </label>
        <div className='select-div'> 
        <label htmlFor="country">Select Country</label>
        <select name="country" id="country" value={user.country} onChange={changeHandler}>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
        </select>
        </div>
        <textarea name="bio" id="bio" cols="30" rows="5" placeholder='Writr about you' onChange={changeHandler} value={user.bio}></textarea>
      </form>
      </>
    
  )
}
