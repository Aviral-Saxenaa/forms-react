import React, { useState } from 'react';

const App=()=>{

  let[name,setMyname]=useState("");
  let[fullname,setFullname]=useState("");

  const changingtext=(e)=>{

    setMyname(e.target.value);
  }

  const clicked=()=>{
    setFullname(name);
  }

  return(
    <div>
      <h1>Hello {fullname}</h1>
      <input type='text' placeholder='Enter your name' onChange={changingtext} value={name} />
      <button onClick={clicked}>CLICK ME</button>
    </div>
  )
}
export default App;