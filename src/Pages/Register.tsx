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
      console.log(data);
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
    } catch (error) {
      console.log(error);
    }
  };

  const handleFirstNameChange = (e: { target: { value: string } }) => {
    setFirstName(e.target.value);
    console.log(firstName);
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
      <div className="w-[30%] border shadow-lg pb-6 md:w-[60%] sm:w-full">
        <div className="border-b py-6">
          <h1 className=" text-center font-semibold text-xl ml-2 py-2 text-lightGreen">
            Sign up to Continue
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-4">
          <InputField
            placeholder="First Name"
            type="text"
            id="firstName"
            onChange={handleFirstNameChange}
            className="w-full px-4 py-3 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-2"
          />
          <InputField
            placeholder="Last Name"
            type="text"
            id="lastName"
            onChange={handleLastNameChange}
            className="w-full px-4 py-3 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-2"
          />
          <InputField
            placeholder="Email"
            type="email"
            id="email"
            onChange={handleEmailChange}
            className="w-full px-4 py-3 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-2"
          />
          <InputField
            placeholder="Password"
            type="password"
            id="password"
            onChange={handlePasswordChange}
            className="w-full px-4 py-3 border border-lightGreen rounded-md focus:outline-none focus:border-gray-300 focus:border-transparent my-2"
          />
          <FormButton
            className={
              "w-full bg-lightGreen text-white font-bold py-3 px-4 rounded mt-4"
            }
            text={"Register"}
          />
          <p className="font-thin pt-3">
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
