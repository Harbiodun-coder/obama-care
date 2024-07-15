import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Input from "@/components/Input";
import OnBoardingLayout from "@/components/OnBoardingLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
  };

  return (
    <OnBoardingLayout>
      <form onSubmit={handleSubmit}>
        <div className="px-5">
          <div className="flex flex-col gap-2 py-3">
            <div className="text-3xl font-bold text-blue-800">
              Welcome back to Obama Care
            </div>
            <div className="text-sm text-gray-300">
              Welcome back, we missed you
            </div>
          </div>
          <div className="w-full">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              change={handleEmailChange}
              value={email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="***********"
              change={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center py-4">
              <input
                type="checkbox"
                id="myCheckbox"
                className="w-5 h-4 border-black rounded"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="myCheckbox" className="ml-2">
                Remember Me
              </label>
            </div>
            <Link href="/" className="text-blue-700 cursor-pointer">
              Forgot Password?
            </Link>
          </div>
          <div className="w-full">
            <Button intent="primary" size="bg" text="Sign in" isLoading={false} />
          </div>
          <div className="flex justify-center py-4">
            <Button intent="primary" size="bg" text="Login with Google" isLoading={false} />
          </div>
          <div className="flex justify-center">
            <span className="text-sm">
              Don&#39;t have an account?{" "}
              <Link href="/onboarding" className="text-blue-700">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </form>
    </OnBoardingLayout>
  );
}
