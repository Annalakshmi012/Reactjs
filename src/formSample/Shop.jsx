import { useState } from "react";

export const Shop = () => {
    const [cartCount,setCardCount] = useState(0);
    const handleClick =()=>setCardCount(cartCount+1);
    return (
      <>
      <h1>Number of items in the card:{cartCount}</h1>
      <button onClick={handleClick}>Add to cart</button>
      </>
  )
}
