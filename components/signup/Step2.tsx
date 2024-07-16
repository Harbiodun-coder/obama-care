import React from "react";
import { FaGlobe, FaPhone, FaUserTag } from "react-icons/fa";
import Input from "../Input";
import { SignUpState } from "@/pages/onboarding";
import OnBoardingLayout from "../OnBoardingLayout";
import Button from "../Button";

import { GoArrowLeft } from "react-icons/go";
import { countries } from "../countries";

type Step2Props = {
  prev: () => void;
  next: (e: React.FormEvent) => void;
  change: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  state: SignUpState;
};

const Step2: React.FC<Step2Props> = ({prev, next, change, state }) => {
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
        <h2 className="text-2xl font-bold mb-4">Step 2: Additional Information</h2>
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

export default Step2;
