import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import TodosPage from "./pages/TodosPage";

function App() {
  const { isAuthorised } = useContext(AuthContext);

  return (
    <div className="App">{isAuthorised ? <TodosPage /> : <LoginPage />}</div>
  );
}

export default App;
