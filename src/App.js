import logo from './logo.svg';
import "./scss/index.scss";
import {default as Header} from './components/Header'
import Breadcrumb from './components/Breadcrumb';
import Body from './components/body/Body';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumb />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
