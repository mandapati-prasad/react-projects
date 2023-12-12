import "./App.css";
import {
  Header,
  Footer,
  Blog,
  Possibility,
  Features,
  Whatsgpt3,
} from "./containers/index";
import { Navbar, Brand, CTA } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatsgpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
