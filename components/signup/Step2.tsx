import React, { useState } from "react";
import Input from "../Input";
import { SignUpState } from "@/pages/onboarding";
import OnBoardingLayout from "../OnBoardingLayout";
import Button from "../Button";

import { FaUser, FaEnvelope, FaLock, FaNotesMedical, FaPills, FaAllergies } from "react-icons/fa"
import { GoArrowLeft } from "react-icons/go";
import GoogleLoginButton from "../GoogleLogin";

type Step2Props = {
  prev: () => void;
  next: (e: React.FormEvent) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: SignUpState;
};

const Step2: React.FC<Step2Props> = ({ prev, next, change, state }) => {
  
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
      <div className="flex p-4 gap-4">
            
            <GoArrowLeft 
                    onClick={prev}
                    className="text-gray-600 cursor-pointer text-2xl hover:text-gray-700"
                  />
                  <div className="">Go Back</div>
              </div>

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
          
          <div className="flex  py-4 justify-between">
            <div className="border flex flex-col"></div>
            <span>OR</span>
            <div className="border border-b"></div>
          </div>
          <div className="flex justify-center py-4">
            <GoogleLoginButton />
          </div>
        </form>
      </div>
    </OnBoardingLayout>
  );
};

export default Step2;
