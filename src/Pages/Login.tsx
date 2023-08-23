import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
import { LOGIN_MUTATION } from "../graphql/LOGIN_MUTATION";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email,
      password,
    },

    onCompleted: (data) => {
      localStorage.setItem("token", data.login.token);
    },

    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await login();
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-[88vh] bg-lightGray">
      <div className="sm:w-[75%] sm:px-3 md:px-4 lg:px-4 md:w-[60%] lg:w-[45%] xl:w-[40%] border shadow-lg pb-6 w-[95%]">
        <div className="border-b py-6">
          <h1 className=" text-center font-semibold sm:text-xl md:text-xl lg:text-2xl text-sm ml-2 py-2 text-lightGreen">
            Login to Continue
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="sm:px-4 md:px-6 lg:px-6 py-4 px-2 sm:py-3"
        >
          <InputField
            placeholder="Email"
            type="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
            className="sm:py-3 md:py-3 w-full px-4 py-2 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-2 sm:my-3 md:my-3 lg:my-4"
          />
          <InputField
            placeholder="Password"
            type="password"
            id="password"
            onChange={handlePasswordChange}
            value={password}
            className="sm:py-3 md:py-3 w-full px-4 py-2 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-2"
          />
          <FormButton
            className={
              "w-full bg-lightGreen text-white font-bold sm:py-3 md:py-3 px-4 py-2 rounded mt-4"
            }
            text={"Login"}
          />
          <p className="font-thin pt-3 sm:text-lg md:text-xl lg:text-xl text-sm">
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
