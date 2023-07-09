import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    logIn(data.email, data.password)
      .then((userInfo) => {
        const user = userInfo.user;
        console.log(user)
        navigate('/');

      })
      .catch((error) => {
        console.log(error.message);
      });
    
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{ boxShadow: "-12px 12px rgba(255, 153, 0, 0.3)" }}
          className="mt-24  border border-black w-[500px] mx-auto p-8 rounded "
        >
          <div className="">
            <h1 className="border-none text-center text-text">Login</h1>
            <div className="relative w-full border-none ">
              <label className="">
                <p className="text-text ml-2 mb-2 mt-2">Email</p>
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                className="relative w-full rounded-md border-2  p-3 outline-none"
                type="email"
              />
              {errors.email && (
                <p className="border-none text-red-600">
                  {errors.email?.message}*
                </p>
              )}
            </div>
            <div className="relative w-full border-none ">
              <label className="">
                <p className="text-text ml-2 mb-2">Password</p>
              </label>
              <input
                {...register("password", {
                  required: "Without Password How you can Login?",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "Password Must be min 8 letter, with at least a symbol, upper and lower case letters and a number!! 😂",
                  },
                })}
                className="relative w-full rounded-md border-2  p-3 outline-none"
                type={showPassword ? "text" : "password"}
                id="password"
              />
              <label
                className="absolute right-5 top-12 cursor-pointer"
                htmlFor="password"
              >
                {showPassword ? (
                  <>
                    <AiOutlineEyeInvisible
                      onClick={() => setShowPassword(false)}
                      className="text-xl"
                    ></AiOutlineEyeInvisible>
                  </>
                ) : (
                  <>
                    <AiOutlineEye
                      onClick={() => setShowPassword(true)}
                      className="text-xl"
                    ></AiOutlineEye>
                  </>
                )}
              </label>
            </div>

            {errors.password && (
              <p className="border-none text-red-600 ml-2">
                {errors.password?.message}*
              </p>
            )}
            <button
              type="submit"
              className="mb-0 mt-4 bg-text p-3 w-full text-white"
            >
              LOGIN
            </button>

            <p className="border-none text-center font-b text-text mt-2">
              Do not have an account?{" "}
              <Link to="/signup">
                {" "}
                <span className="text-[#FF9900]">SignUp</span>
              </Link>
            </p>
            <div className="divider mb-4 mt-2 border-none text-text text-center">
              OR
            </div>
            <div className="flex items-center justify-center gap-4 border-[1px] border-text rounded">
              <FcGoogle className="text-xl"></FcGoogle>
              <p className="p-3 font-b text-text">CONTINUE WITH GOOGLE</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
