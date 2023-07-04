import React, { useState } from "react";

const App = () => {
        let [name, setMyname] = useState("");
        let [fullname, setFullname] = useState("");
        let[lastname,setLastname]=useState("");
        let[fulllastname,setFulllastname]=useState("");

        const changingtext = (e) => {
                setMyname(e.target.value);
        };

        const clicked = (e) => {
          e.preventDefault();
          setFullname(name);
          setFulllastname(lastname);
        };

        const changingtexttwo=(e)=>{
          setLastname(e.target.value);
        }

        return (
                <div>
                        <form onClick={clicked}>
                                <h1>Hello {fullname} {fulllastname}</h1>
                                <input
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={changingtext}
                                        value={name}
                                />
                                
                                <input
                                        type="text"
                                        placeholder="Enter your lastname"
                                        onChange={changingtexttwo}
                                        value={lastname}
                                />
                                <br></br>
                                <button type="submit">CLICK ME</button>
                        </form>
                </div>
        );
};
export default App;
