import React, { useState } from "react";

const App = () => {
        let [name, setMyname] = useState("");
        let [fullname, setFullname] = useState("");

        const changingtext = (e) => {
                setMyname(e.target.value);
        };

        const clicked = (e) => {
          e.preventDefault();
                setFullname(name);
        };

        return (
                <div>
                        <form onClick={clicked}>
                                <h1>Hello {fullname}</h1>
                                <input
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={changingtext}
                                        value={name}
                                />
                                <br></br>
                                <button type="submit">CLICK ME</button>
                        </form>
                </div>
        );
};
export default App;
