import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./views/Landing/Landing";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>

      <div className="body-container">
        <Landing />
      </div>

      {/* 
      <div className="footer-container">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
