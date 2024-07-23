import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import OnBoardingLayout from "@/components/layout/OnBoardingLayout";
import { useRouter } from "next/router";
import GoogleLoginButton from "@/components/shared/GoogleLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  
  const API_URL = `https://obamacare.onrender.com/login`;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const loginDetails = {
      email,
      password
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

     
      const user = data.users.find(u => u.email === loginDetails.email && u.password === loginDetails.password);
      if (user) {
        console.log('Login successful:', user);

        if (user.role === 'doctor') {
          router.push("/dashboard/doctor");
        } else if (user.role === 'patient') {
          router.push("/dashboard/patient");
        } else {
          setError("Unknown user role");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error('Error:', error);
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
            <Button 
              intent="primary" 
              size="bg" 
              text={loading ? "Signing in..." : "Sign in"} 
              isLoading={loading} 
              type="submit" 
            />
          </div>
          <div className="flex justify-center py-4">
            <GoogleLoginButton />
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
