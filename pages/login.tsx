import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Input from "@/components/Input";
import OnBoardingLayout from "@/components/OnBoardingLayout";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
// import GoogleLoginButton from "@/components/GoogleLoginButton"; 

const LOGIN = "/api/login";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const router = useRouter();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to log in");
      }
      return response.json();
    },
    onSuccess: (data: any) => {
      console.log("Login successful:", data);
      localStorage.setItem("token", data.token); 
      
      if (data.role === "patient") {
        router.push("/patient-dashboard");
      } else if (data.role === "doctor") {
        router.push("/doctor-dashboard");
      } else {
        router.push("/dashboard");
      }
    },
    onError: (error: any) => {
      console.error("Error logging in:", error);
      setError("Failed to log in. Please check your credentials and try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); 
    mutation.mutate();
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
              value={email}
              change={handleChangeEmail}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="***********"
              value={password}
              change={handleChangePassword}
            />
            {error && (
              <div className="text-red-500 text-sm mt-1">
                {error}
              </div>
            )}
          </div>
          <div className="w-full">
            <Button intent="primary" size="bg" text="Sign in" isLoading={false} type="submit" />
          </div>
          <div className="flex justify-center py-4">
            {/* <GoogleLoginButton /> */}
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
