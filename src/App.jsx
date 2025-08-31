import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
