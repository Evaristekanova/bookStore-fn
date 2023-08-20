import { useState } from "react";
import { SIGNUP_MUTATION } from "../graphql/SIGNUP_MUTATION";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      firstName,
      lastName,
      email,
      password,
    },
    onCompleted: (data) => {
      localStorage.setItem("token", data.signup.token);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await signup();
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFirstNameChange = (e: { target: { value: string } }) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: { target: { value: string } }) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-lightGray">
      <div className="sm:w-[75%] sm:mx-4 md:w-[60%] lg:w-[45%] xl:w-[40%] border shadow-lg pb-6 w-[95%]">
        <div className="border-b py-6">
          <h1 className=" text-center font-semibold text-sm ml-2 py-2 text-lightGreen sm:text-lg md:text-xl lg:text-xl">
            Sign up to Continue
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="sm:px-4 md:px-6 lg:px-6 py-4 px-2 sm:py-3"
        >
          <InputField
            placeholder="First Name"
            type="text"
            id="firstName"
            onChange={handleFirstNameChange}
            value={firstName}
            className="sm:py-3 md:py-3 w-full px-4 py-2 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-2"
          />
          <InputField
            placeholder="Last Name"
            type="text"
            id="lastName"
            onChange={handleLastNameChange}
            value={lastName}
            className="sm:py-3 md:py-3 w-full px-4 py-2 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-2"
          />
          <InputField
            placeholder="Email"
            type="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
            className="sm:py-3 md:py-3 w-full px-4 py-2 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-2"
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
            text={"Register"}
          />
          <p className="font-thin pt-3 sm:text-lg md:text-xl lg:text-xl text-sm">
            Already have an account?{" "}
            <Link className="text-lightGreen font-semibold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
