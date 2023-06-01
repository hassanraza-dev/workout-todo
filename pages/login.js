import Image from "next/image";
import React, { useState } from "react";
import { login } from "../network/network";
import { add } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("TESTtest123!");
  const dispatch = useDispatch();
  const router = useRouter();

  // const value = useSelector((state) => state.token);

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password })
      .then((res) => {
        document.cookie = `token=${res.token}`;
        router.push("/");
        dispatch(add(res.token));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="w-full mx-auto h-auto sm:w-auto shadow-sm bg-black py-3 px-12 m-5 text-gray-400  rounded-xl  md:max-w-lg">
        <div className="flex justify-center">
          <Image
            src="https://thumbs.dreamstime.com/b/white-dumbbell-gym-logo-black-background-workout-sign-vector-template-172909186.jpg"
            alt="Gym Logo"
            width={150}
            height={150}
          />
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="title">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              required
              placeholder="Enter title"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="numberOfSets"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="numberOfSets"
              name="reps"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              className="bg-blue-600 w-full my-12 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
