import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [page, setPage] = useState("register");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>System Auth</h1>
      <div>
        <button onClick={() => setPage("register")}>Register</button>
        <button onClick={() => setPage("login")}>Login</button>
      </div>
      <hr />
      {page === "register" ? <RegisterForm /> : <LoginForm />}
    </div>
  );
}

export default App;
