import { useState } from "react";
import LoginForm from "./Login";
import RegisterForm from "./Register";

const AuthForm = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => setIsActive((prev) => !prev);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-300 via-gray-100 to-white font-roboto">
      <div
        className={`relative w-full max-w-6xl min-h-[650px] bg-white rounded-[25px] shadow-[0_0_30px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-[1800ms] ease-in-out flex flex-col md:flex-row ${
          isActive ? "active" : ""
        }`}
      >
        <div
          className={`absolute right-0 w-1/2 h-full bg-white flex items-center text-gray-800 text-center px-12 z-10 transition-all duration-600 ease-in-out delay-1200 ${
            isActive ? "right-1/2" : ""
          } max-md:bottom-0 max-md:w-full max-md:h-[70%] ${
            isActive ? "max-md:right-0 max-md:bottom-[30%]" : ""
          }`}
        >
          <LoginForm />
        </div>

        <div
          className={`absolute right-0 w-1/2 h-full bg-white flex items-center text-gray-800 text-center px-10 z-10 transition-all duration-600 ease-in-out delay-1000 ${
            isActive ? "visible right-1/2" : "invisible"
          } max-md:bottom-0 max-md:w-full max-md:h-[70%] ${
            isActive ? "max-md:right-0 max-md:bottom-[30%]" : ""
          }`}
        >
          <RegisterForm />
        </div>

        {/* Toggle UI below remains the same */}
        <div className="hidden md:block absolute w-full h-full">
          <div
            className={`absolute w-[300%] h-full bg-[#1d1c1f] rounded-[150px] z-20 transition-all duration-1800 ease-in-out ${
              isActive ? "left-1/2" : "left-[-250%]"
            }`}
          ></div>

          <div
            className={`absolute left-0 w-1/2 h-full text-white flex flex-col justify-center items-center z-20 transition-all duration-600 ease-in-out delay-1200 ${
              isActive ? "left-[-50%] delay-600" : ""
            }`}
          >
            <h1 className="text-3xl font-semibold mb-4">
              Let's Get You Started
            </h1>
            <p className="text-sm mb-6 text-center">
              Don't have an account?{" "}
              <span className="font-medium">Sign up now</span>
            </p>
            <button
              onClick={handleToggle}
              className="w-48 h-12 cursor-pointer bg-transparent border-2 border-white rounded-lg text-lg font-semibold text-white hover:bg-white hover:text-black transition-colors duration-200 ease-in-out"
            >
              Sign up
            </button>
          </div>

          <div
            className={`absolute ${
              isActive ? "right-0 delay-1200" : "right-[-50%] delay-600"
            } w-1/2 h-full text-white flex flex-col justify-center items-center z-20 transition-all duration-600 ease-in-out`}
          >
            <h1 className="text-4xl font-semibold mb-6">Welcome Back!</h1>
            <p className="text-sm mb-6 text-center text-gray-300">
              Existing user? Sign in here
            </p>
            <button
              onClick={handleToggle}
              className="w-40 h-12 cursor-pointer bg-transparent border-2 border-white rounded-lg text-base font-semibold text-white hover:bg-white hover:text-black transition-colors shadow-md"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
