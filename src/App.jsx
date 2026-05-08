import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
