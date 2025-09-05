import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login"); 
    } else {
      setUsername(JSON.parse(storedUser).username);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/login"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello {username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
