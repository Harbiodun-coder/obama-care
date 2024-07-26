import React, { useState } from "react";
import { FaPhone, FaGlobe, FaUserTag, FaUser, FaEnvelope } from "react-icons/fa";
import Input from "../shared/Input";
import { SignUpState } from "@/pages/onboarding";
import OnBoardingLayout from "../layout/OnBoardingLayout";
import Button from "../shared/Button";
import Checkbox from "./checkbox";
import { GoArrowLeft } from "react-icons/go";

import { useRouter } from "next/router";
import swal from 'sweetalert';

type Step3Props = {
  prev: () => void;
  submit: (e: React.FormEvent) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: SignUpState;
};

const Step3: React.FC<Step3Props> = ({ prev, submit, change, state }) => {
  const router = useRouter();
  const [error, setError] = useState(""); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.err || 'Failed to sign up');
        } else {
          throw new Error('An unexpected error occurred');
        }
      }

      swal('Success', 'Signup successful', 'success');
      router.push('/login');
    } catch (error: any) {
      console.error('Error signing up:', error);
      setError(error.message || 'Signup failed. Please try again.');
      swal('Error', error.message || 'Signup failed. Please try again.', 'error');
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
          <div>Go Back</div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Review Information</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="First Name"
            name="first_name"
            value={state.first_name}
            change={change}
            placeholder="Enter your first name"
            readOnly
            icon={<FaUser />}
          />
          <Input
            label="Last Name"
            name="last_name"
            value={state.last_name}
            change={change}
            placeholder="Enter your last name"
            readOnly
            icon={<FaUser />}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={state.email}
            change={change}
            placeholder="Enter your email"
            readOnly
            icon={<FaEnvelope />}
          />
          <Input
            label="Country"
            name="country"
            value={state.country}
            change={change}
            placeholder="Enter your country"
            readOnly
            icon={<FaGlobe />}
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={state.phone}
            change={change}
            placeholder="Enter your phone number"
            readOnly
            icon={<FaPhone />}
          />
          <Input
            label="Role"
            name="role"
            value={state.role}
            change={change}
            placeholder="Enter your role"
            readOnly
            icon={<FaUserTag />}
          />
          <Checkbox
            name="agree_to_terms"
            value={state.agree_to_terms ? "yes" : "no"}
            id="agree_to_terms"
            label="Agree to Terms"
            handleChange={change}
          />
          <div className="flex justify-between mt-4">
            <Button
              intent="primary"
              type="submit"
              action={undefined}
              size="bg"
              text="Submit"
              isLoading={false}
            />
          </div>
        </form>
      </div>
    </OnBoardingLayout>
  );
};

export default Step3;
