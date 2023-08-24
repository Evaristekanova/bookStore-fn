import ExploreBooks from "./components/ExploreBooks";
import LANDING from './assets/LANDING.jpg'
const App = () => {
  return (
    <>
      <div className="sm:flex sm:flex-col md:flex md:flex-row lg:h-[33rem] lg:bg-lightGreen lg:flex lg:flex-row sm:pt-3 lg:pt-0 pt-2 flex flex-col relative">
        <div className="sm:w-1/2 md:w-full lg:w-1/2 lg:items-center lg:flex-col lg:flex lg:h-full  md:h-full w-full">
          <h1 className="sm:text-3xl md:text-xl lg:text-4xl lg:mx-12 lg:mt-[11rem] md:mx-10 text-center text-white font-semibold">
            Welcome to the Online Free Library App, Expand your Mind by reading
            books from our library.
          </h1>

          <div className="flex justify-center mt-8">
            <button className="py-2 px-4 bg-lightGreen border border-white hover:bg-white hover:border hover:border-lightGreen hover:text-lightGreen rounded-sm text-white font-light">
              Get Started
            </button>

            <button className="py-2 px-4 bg-white rounded-sm hover:bg-lightGreen hover:text-white hover:border hover:border-white text-lightGreen font-light ml-8">
              Learn More
            </button>
          </div>
        </div>
        <div className="sm:w-full md:w-1/2 lg:w-1/2 lg:h-full lg:flex lg:items-center lg:flex-grow  md:h-[90%] w-full">
          <img
            src={LANDING}
            alt=""
            className="sm:w-full md:w-full lg:w-full h-full w-full"
          />
        </div>
      </div>
      <ExploreBooks />
    </>
  );
};

export default App;
