import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="text-3xl text-center font-light pt-4">
        Online Library App
      </div>
      <Footer />
    </>
  );
};

export default App;
