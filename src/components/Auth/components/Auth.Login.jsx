"use client";

import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";
import Link from "next/link";

export const AuthLogin = () => {
  const { loginData, handleChange, handleSubmitLogin } = useLogin();
  return (
    <main className="h-screen w-full grid grid-cols-2">
      <div className="bg-emerald-500"></div>
      <div className="flex justify-center items-center">
        <div className="w-[320px] space-y-3">
          <Input name="email" placeholder="email" onChange={handleChange} />
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
          <Button onClick={handleSubmitLogin}>Login</Button>
          <div>
            <p>
              Don't have account?{" "}
              <Link className="text-sky-400" href="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
