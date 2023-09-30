"use client";

import { Input, Button } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";
import Link from "next/link";

export const AuthRegister = () => {
  const { registerData, handleChange, handleSubmitRegister } = useRegister();

  return (
    <main className="h-screen w-full grid grid-cols-2">
      <div className="bg-emerald-500"></div>
      <div className="flex justify-center items-center">
        <div className="w-[320px] space-y-3">
          <Input name="name" placeholder="name" onChange={handleChange} />
          <Input name="email" placeholder="email" onChange={handleChange} />
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
          <Button onClick={handleSubmitRegister}>Register</Button>
          <div>
            <p>
              Already have account?{" "}
              <Link className="text-sky-400" href="/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
