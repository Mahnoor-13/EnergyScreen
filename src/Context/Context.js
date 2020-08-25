import React, { useState, createContext } from "react";
import CompanyRegisteration from "../Components/CompanyRegisteration/CompanyRegisteration";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [number, setNumber] = useState(0);

  return (
    <UserContext.Provider value={[number, setNumber]}>
      <CompanyRegisteration {...props} />
      {/* {props.childern} */}
    </UserContext.Provider>
  );
};

// import React, {useState, createContext} from 'react'
// import CompanyRegisteration from "../Components/CompanyRegisteration/CompanyRegisteration";

// export const XyzContext = createContext();

// export const XyzProvider = (props) => {

//     const [number, setNumber] = useState(0);
//     console.log(props.children)

//     return(
//         <XyzContext.Provider value = {[number, setNumber]}>
// <CompanyRegisteration />
//             {/* {props.childern} */}
//         </XyzContext.Provider>
//     )
// }
