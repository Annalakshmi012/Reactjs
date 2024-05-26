import { ArraySample } from "./component/ArraySample";
import { ChildCom } from "./component/ChildCom";
import { Header } from "./component/Header";

import { MethodSample } from "./component/MethodSample";



import { MulComponet } from "./component/MulComponet";

import { OneofSample } from "./component/OneofSample";






const App = () => {
  const item =[{id:1,name:"annama"},
  {id:2,name:"bala"},
  {id:3,name:"gowsi"},
  {id:4,name:"harish"},
  ];
  const handleClick =()=>{
    alert("Button clicked");
  };
 
  return(
  <div>
    
  
 <Header  name="Annalakshmi" age={20} class={12}/> 
 <Header  name="Annalakshmi" age={20} class={12}/> 
 <Header  name="Annalakshmi"  class={12}/> 
   <ChildCom> 
     <p>this sample 1</p> 
   <p>this sample 3</p> 
   </ChildCom> 
   <ArraySample item={item}/> 
   <OneofSample color="blue"/> 
   <MulComponet value="annalakshmi" /> 
   <MulComponet value={34} />  
   <MulComponet value= {true} />   
    <div> 
     <h1>Prant component</h1> 
     <MethodSample  handleClick={handleClick}/> 
   </div> 
  </div>
   
  )
};

export default App; 
