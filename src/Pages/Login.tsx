import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30%] border shadow-lg pb-6">
        <div className="border-b py-6">
          <h1 className=" text-center font-semibold text-xl ml-2 py-2 text-lightGreen">
            Login to Continue
          </h1>
        </div>
        <form className="px-6 py-4">
          <InputField
            placeholder="Email"
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-4"
          />
          <InputField
            placeholder="Password"
            type="password"
            id="password"
            className="w-full px-4 py-3 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-4"
          />
          <FormButton
            className={"w-full bg-lightGreen text-white font-bold py-3 px-4 rounded mt-4"}
            text={"Login"}
          />
          <p className="font-thin pt-3">
            Don't have an account?{" "}
            <Link className="text-lightGreen font-semibold" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
