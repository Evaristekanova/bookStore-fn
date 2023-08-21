import LANDING from "./assets/LANDING.jpg";
const App = () => {
  return (
    <div className="sm:flex sm:flex-col md:flex md:flex-row lg:bg-lightGreen lg:flex lg:flex-row sm:pt-3 lg:h-[100%] lg:pt-0 pt-2 flex flex-col relative">
      <div className="sm:w-1/2 md:w-full lg:w-1/2 lg:flex lg:items-center lg:h-full lg:justify-center lg:border  md:h-full w-full">
        Hello Here
      </div>
      <div className="sm:w-full md:w-1/2 lg:w-1/2 lg:flex lg:items-center lg:flex-grow  md:h-[90%] w-full">
        <img
          src={LANDING}
          alt=""
          className="sm:w-full md:w-full lg:w-full h-[90%] object-cover w-full"
        />
      </div>
    </div>
  );
};

export default App;
