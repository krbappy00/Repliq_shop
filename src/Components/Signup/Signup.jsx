import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPass, setConfirm] = useState(false);
  const [value, setValue] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    setEmail(e.email);
    setPassword(e.password);
    setPhone(value)
    createUser(e.email, e.password)
      .then((userCredential) => {
        console.log(userCredential.user)
        navigate("/");
        
      })
      .catch((error) => {
        console.log(error);
      });

    //  fetch("https://dummyjson.com/users/add", {
    //    method: "POST",
    //    headers: { "Content-Type": "application/json" },
    //    body: JSON.stringify({
    //      email: email,
    //      password: password,
    //      phone: value,
    //      /* other user data */
    //    }),
    //  })
    //    .then((res) => res.json())
    //    .then(console.log);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{ boxShadow: "-12px 12px rgba(255, 153, 0, 0.3)" }}
          className="mt-12  border border-black w-[500px] mx-auto p-8 rounded "
        >
          <div className="">
            <h1 className="border-none text-center text-text">Sign Up</h1>
            <div className="relative mt-8">
              <label className="">
                <p className="text-text ml-2 mb-2">Phone number</p>
              </label>
              <PhoneInput
                inputProps={{
                  name: "phone",
                  country: "bd",
                  required: true,
                  autoFocus: true,
                }}
                inputStyle={{
                  width: "100%",
                  height: "52px",
                }}
                onlyCountries={["bd"]}
                country={"bd"}
                value={value}
                onChange={setValue}
              />
            </div>

            {errors.phone && (
              <p className="border-none text-red-600 ml-2">
                {errors.phone?.message}*
              </p>
            )}
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
                <p className="text-text ml-2 mb-2 mt-2">Password</p>
              </label>
              <input
                {...register("password", {
                  required: "Without Password How you can SignUp?",
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
            <div className="relative w-full border-none mt-2">
              <label className="">
                <p className="text-text ml-2 mb-2">Confirm Password</p>
              </label>
              <input
                {...register("confirmPassword", {
                  required: "Please Confirm Your password Sir 😑",
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Your passwords didn't match Sir 🤐";
                    }
                  },
                })}
                type={confirmPass ? "text" : "password"}
                className="relative w-full rounded-md border-2  p-3 outline-none"
                id="pass"
              />
              <label
                className="absolute right-5 top-12 cursor-pointer"
                htmlFor="pass"
              >
                {confirmPass ? (
                  <>
                    <AiOutlineEyeInvisible
                      onClick={() => setConfirm(false)}
                      className="text-xl"
                    ></AiOutlineEyeInvisible>
                  </>
                ) : (
                  <>
                    <AiOutlineEye
                      onClick={() => setConfirm(true)}
                      className="text-xl"
                    ></AiOutlineEye>
                  </>
                )}
              </label>
            </div>

            {errors.confirmPassword && (
              <p className="border-none text-red-600 ml-2">
                {errors.confirmPassword?.message}*
              </p>
            )}
            <button
              type="submit"
              className="mb-0 mt-4 bg-text p-3 w-full text-white"
            >
              SIGNUP
            </button>

            <p className="border-none text-center font-b text-text mt-2">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#FF9900]">Login</span>
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

export default SignUp;
