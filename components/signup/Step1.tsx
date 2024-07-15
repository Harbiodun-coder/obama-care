import React, { useState } from "react";
import Input from "../Input";
import { SignUpState } from "@/pages/onboarding";
import OnBoardingLayout from "../OnBoardingLayout";
import Button from "../Button";
import { useRouter } from "next/router";
import { FaUser, FaEnvelope, FaLock, FaNotesMedical, FaPills, FaAllergies } from "react-icons/fa"

type Step1Props = {
  next: (e: React.FormEvent) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: SignUpState;
};

const Step1: React.FC<Step1Props> = ({ next, change, state }) => {
  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!state.first_name) newErrors.first_name = "First name is required";
    if (!state.last_name) newErrors.last_name = "Last name is required";
    if (!state.email) newErrors.email = "Email is required";
    if (!state.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      next(e);
    }
  };

  return (
    <OnBoardingLayout>
      <div className="p-4">
        <div className="flex items-center pt-5 justify-end">
          <a href="#" className="pr-10 text-[#9CA3AF] text-sm">
            Already have an account?
          </a>
          <div className="">
            <Button
              intent="primary"
              type="button"
              action={() => router.push("/login")}
              size="bg"
              text="Login"
              isLoading={false}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Step 1: Personal Information</h2>
        <form onSubmit={handleNextStep}>
          <Input
            label="First Name"
            name="first_name"
            value={state.first_name}
            change={change}
            placeholder="Enter your first name"
            required
            icon={<FaUser className="text-[gray]" />}
          />
          {errors.first_name && <p className="text-red-500">{errors.first_name}</p>}
          <Input
            label="Last Name"
            name="last_name"
            value={state.last_name}
            change={change}
            placeholder="Enter your last name"
            required
            icon={<FaUser className="text-[gray]" />}
          />
          {errors.last_name && <p className="text-red-500">{errors.last_name}</p>}
          <Input
            label="Email"
            name="email"
            type="email"
            value={state.email}
            change={change}
            placeholder="Enter your email"
            required
            icon={<FaEnvelope className="text-[gray]"/>}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <Input
            label="Password"
            name="password"
            type="password"
            value={state.password}
            change={change}
            placeholder="Enter your password"
            required
            icon = {<FaLock className="text-[gray]" />}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <div className="mt-4 items-center">
            <Button
              intent="primary"
              type="submit"
              action={undefined}
              size="bg"
              text="Next"
              isLoading={false}

            />
          </div>
        </form>
      </div>
    </OnBoardingLayout>
  );
};

export default Step1;
