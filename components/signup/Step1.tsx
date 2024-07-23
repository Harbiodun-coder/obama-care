import React from "react";
import { FaGlobe, FaPhone, FaUserTag } from "react-icons/fa";
import Input from "../shared/Input";
import { SignUpState } from "@/pages/onboarding";
import OnBoardingLayout from "../layout/OnBoardingLayout";
import Button from "../shared/Button";

import { GoArrowLeft } from "react-icons/go";
import { countries } from "../shared/countries";
import { useRouter } from "next/router";

type Step1Props = {
  next: (e: React.FormEvent) => void;
  change: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  state: SignUpState;
};

const Step1: React.FC<Step1Props> = ({ next, change, state }) => {
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find(
      (country) => country.name === e.target.value
    );
    if (selectedCountry) {
      change({
        target: {
          name: "phone",
          value: `${selectedCountry.code} ${(state.phone || "").replace(/^\+\d+ /, "")}`
        }
      } as React.ChangeEvent<HTMLInputElement>);
    }
    change(e);
  };
  const router = useRouter();

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
        <form onSubmit={next}>
          <Input
            label="Country"
            name="country"
            value={state.country}
            change={handleCountryChange}
            placeholder="Select your country"
            icon={<FaGlobe />}
            required
            options={countries.map((country) => country.name)}
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={state.phone}
            change={change}
            placeholder="Enter your phone number"
            icon={<FaPhone />}
            required
          />
          <Input
            label="Role"
            name="role"
            value={state.role}
            change={change}
            placeholder="Select your role"
            icon={<FaUserTag />}
            required
            options={["Patient", "Doctor"]} 
          />
          <div className="flex justify-between mt-4">
          
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
