import React, { useState } from "react";
import Signin from "./pages/login/Signin";
import './App.css';
import Barpages from "./pages/Barpages";
import Adminbarpages from "./adminpages/Adminbarpages";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Barpages setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Signin setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;