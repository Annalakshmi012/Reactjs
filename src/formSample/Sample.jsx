import { useState } from "react";


export const Sample = () => {
    const [user,setUser]=useState({fname:"Ram",lname:"Kumar",age:21});
    // function changeName(e){
    // //    const newStateObject={ ...user};
    // //    newStateObject.name=e.target.value;
    // //    setUser(newStateObject);
    // setUser((oldState)=>{
    //     return{...oldState,name:e.target.value};
    // });
      
       
    // }
    // function changeAge(e){
    //     const newAge={...user};
    //     newAge.age=e.target.value;
    //     setUser(newAge);
        
    // }
    function changeHandler(e){
        setUser({...user,[e.target.name]:e.target.value});
    }
  return (
    <>
    <h1>{user.fname} {user.lname},{user.age}</h1>

    <form >
        
    
    <input type="text"  placeholder="Enter the User Name" onChange={changeHandler} value={user.fname} name="fname"/>
    <input type="text"  placeholder="Enter the User Name" onChange={changeHandler} value={user.lname} name="lname"/>
    <input type="text"  placeholder="Enter the User Name" onChange={changeHandler} value={user.age} name="age"/>
    </form>
    </>
  )
}
