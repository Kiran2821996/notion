import React from "react";
import { useState } from "react";
import user from "../data/user.json";
import { Button } from 'antd';

function SearchPop() {
  const [invite, setInvite] = useState(true);
  const [add, setAdd] = useState();
  const [value, setValue] = useState();
  const [userData, setUserData] = useState([]);
  const [access, setAccess] = useState([]);

  const [pop, setPop] = useState(false);
  const handleShare = () => {
    setPop(!pop);
    setInvite(true);
  };
  const handleClick = () => {
    setInvite(false);
    console.log("kk");
  };
  const handleInvite = () => {
    setInvite(true);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSelect = (e) => {
    access.push(e.target.value);
    setAccess([...access]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInvite(true);
    setAdd(true);
    if (user.email === value) {
      userData.push(user.email);
      setUserData([...userData]);
    }
  };

  return (
    <div>
      {pop ? (
        <div>
           <Button type="primary" onClick={handleShare}>Share</Button>
        

          {invite ? (
            <div>
              <button>
                <button onClick={handleClick}>
                  {" "}
                  <input type="text" /> <button>Invite</button>
                </button>
                <div>
                  {add && (
                    <p>
                      {userData[0]}-----{access[access.length - 1]}
                    </p>
                  )}
                </div>
              </button>
            </div>
          ) : (
            <div>
              <button>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    autoComplete="on"
                    onChange={handleChange}
                    value={value}
                    name="browser"
                    id="browser"
                  />

                  <select id="can" onChange={handleSelect}>
                    <option value="Full access">Full access</option>
                    <option value="Can Edit">Can Edit</option>
                    <option value="Can Comment">Can Comment</option>
                    <option value="Can View">Can View</option>
                  </select>
                  <div>
                    {" "}
                    <textarea name="" id="" cols="30" rows="10"></textarea>{" "}
                  </div>
                  <div>
                    <button onClick={handleInvite}>cancel</button>
                    <button type="submit">Invite</button>
                  </div>
                </form>
              </button>
            </div>
          )}
        </div>
      ) : (
        <button onClick={handleShare}>Share</button>
      )}
    </div>
  );
}

export default SearchPop;
