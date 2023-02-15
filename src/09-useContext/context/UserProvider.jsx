import { UserContext } from "./UserContext";

import { useState } from "react";

// const user = {
//   id: 1,
//   name: "Fernando Herrera",
//   email: "juan@peralta.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
