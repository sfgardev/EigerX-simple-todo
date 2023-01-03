import { useContext } from "react";
import Todos from "../components/Todos";
import { AuthContext } from "../context/AuthContext";

const TodosPage = () => {
  const { username, logout } = useContext(AuthContext);

  return (
    <div className="wrapper">
      <div className="user-info">
        <h1>Hello, {username}</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <Todos />
    </div>
  );
};

export default TodosPage;
