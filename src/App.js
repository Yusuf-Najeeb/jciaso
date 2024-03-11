import { Outlet } from "react-router";
import "./index.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
