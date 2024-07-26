import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import OnBoardingLayout from "@/components/layout/OnBoardingLayout";
import { useRouter } from "next/router";
import GoogleLoginButton from "@/components/shared/GoogleLogin";
import Swal from 'sweetalert2';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
  
    const loginDetails = {
      email,
      password
    };
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      const { email, role, jwt_token } = data.data; 
      
      localStorage.setItem('token', jwt_token);

      if (!email || !role) {
        throw new Error('Invalid response data');
      }
       
      Swal.fire({
        title: 'Success',
        text: 'Login successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      if (role === 'doctor') {
        router.push('/dashboard/doctor');
      } else if (role === 'patient') {
        router.push('/dashboard/patient');
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Unknown user role',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Invalid email or password',
        icon: 'error',
        confirmButtonText: 'OK'
      });
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
      <div className="">
        <form onSubmit={handleSubmit} className=" w-full h-screen bg-white p-6 rounded-lg min-h-screen ">
          <div className="flex flex-col gap-2 py-3">
            <div className="md:text-3xl text-[18px] font-bold text-[#0065C2] text-center">
              Welcome back to Obama Care
            </div>
            <div className="text-sm text-gray-300 text-center">
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
          </div>
          <div className="w-full mt-4">
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
        </form>
      </div>
    </OnBoardingLayout>
  );
}
