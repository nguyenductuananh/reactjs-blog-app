import "./scss/index.scss";
import { default as Header } from "./components/Header";
import Body from "./components/body/Body";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
