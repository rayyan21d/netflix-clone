/* eslint-disable @next/next/no-img-element */
import Input from "@/components/Input";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/public/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>

            <div className="flex flex-col gap-4">
              <Input
                label="Username"
                id="name"
                onChange={(event: any) => setName(event.target.value)}
                value={name}
                type=""
              />

              <Input
                label="Email"
                id="email"
                onChange={(event: any) => setEmail(event.target.value)}
                value={email}
                type="email"
              />

              <Input
                label="Password"
                id="password"
                onChange={(event: any) => setPassword(event.target.value)}
                value={password}
                type="password"
              />

              <button className="bg-red-600 py-3 rounded-md w-full text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                Sign in
              </button>

              <p className="text-neutral-500 mt-500 mt-12">
                Don&apos;t have an account?
                <span className="text-white ml-1 hover:underline cursor-pointer">
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
