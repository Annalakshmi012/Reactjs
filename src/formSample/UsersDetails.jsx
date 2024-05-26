import { useState } from "react"


export const UsersDetails = () => {
  const [user,setUser]=useState({name:"Ram",age:"23"})
  const updateUsername=()=>{
    // setUserName("sam")
    // userName=="Ram"?setUserName("Sam"):setUserName("Ram");
    setUser({...user,name:"Sam"});
  }
  const updateUserage=()=>{
    // setUserAge("23")
    // userAge=="21"?setUserAge("23"):setUserAge("21");
   setUser({...user,age:"21"});
  }
  return (
   
    <>












 <h1>{user.name}</h1>
<button onClick={updateUsername}>Update username</button>
<h6 >{user.age}</h6>
<button onClick={updateUserage}>Update userAge</button> 
    
    </>
  )
}
