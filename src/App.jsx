import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-none">
        <Header />
      </div>
      <div className="grow flex justify-center items-center">
        <Outlet />
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}

export default App;
