import InputField from "../components/InputField";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30%] border shadow-md">
        <h1 className="text-center font-thin text-xl ml-2 py-2">
          Login into Our Library System
        </h1>
        <form className="px-6 py-4">
          <InputField
            placeholder="Email"
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent my-4"
          />
          <InputField
            placeholder="Password"
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent my-4"
          />
          <div className="flex justify-center">
            <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
