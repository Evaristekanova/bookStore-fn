import ExploreBooks from "./components/ExploreBooks";
import LANDING from "./assets/LANDING.jpg";
const App = () => {
  return (
    <>
      <div className="w-screeen h-auto bg-lightGreen text-white">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl font-bold">Welcome to Online Book Store</h1>
          <h2 className="text-xl font-semibold">Expand Your Mind Wiht Our Books</h2>
          <img src={LANDING} alt="landing" className="w-1/2 h-auto" />
          </div>
      </div>
      <ExploreBooks />
    </>
  );
};

export default App;
