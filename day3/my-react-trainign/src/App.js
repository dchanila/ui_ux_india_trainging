import "./App.css";
import Header from "./Head/Header";
import Body from "./Body/Body";
import Forter from "./Forter/Forter";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="bg-white p-5 text-center">
        <h1 className="text-3xl mb-6">
          We are at the heart of appropriate Care
        </h1>
        <Body />
      </div>
      <Forter />
    </div>
  );
}

export default App;
